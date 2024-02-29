import express, { Request, Response } from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/register",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({ min: 6 }),
    check("firstName", "Please enter a valid first name").isString(),
    check("lastName", "Please enter a valid last name").isString(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json("User already exists");
      }
      user = new User(req.body);
      await user.save();
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: "1d" }
      );
      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 24 * 60 * 60 * 1000,
      });
      return res.sendStatus(201);
    } catch (error) {
      console.error(error);
      res.status(500).send("Something went wrong");
    }
  }
);

export default router;
