import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="py-6 bg-blue-800">
      <div className="container flex justify-between mx-auto">
        <span className="text-3xl font-bold tracking-tight text-white">
          <Link to="/">Holidays.com</Link>
        </span>
        <span className="flex items-center space-x-6">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center px-3 py-2 font-bold text-white rounded hover:bg-blue-600"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center px-3 py-2 font-bold text-white rounded hover:bg-blue-600"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex items-center px-3 py-2 font-bold text-blue-600 bg-white rounded hover:bg-gray-100 hover:text-blue-500"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
