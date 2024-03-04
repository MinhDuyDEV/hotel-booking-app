import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import { hotelFacilities } from "../configs/hotel-options-config";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h2 className="mb-3 text-2xl font-bold">Type</h2>
      <div className="grid grid-cols-5 gap-3">
        {hotelFacilities.map((facility) => (
          <label
            className="flex items-center gap-2 text-sm text-gray-700"
            key={facility}
          >
            <input
              type="checkbox"
              value={facility}
              {...register("facilities", {
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) {
                    return true;
                  } else {
                    return "At least one facility is required";
                  }
                },
              })}
            />
            <span>{facility}</span>
          </label>
        ))}
      </div>
      {errors.facilities && (
        <span className="text-sm font-bold text-red-500">
          {errors.facilities.message}
        </span>
      )}
    </div>
  );
};

export default FacilitiesSection;
