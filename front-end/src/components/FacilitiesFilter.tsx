import { hotelFacilities } from "../configs/hotel-options-config";

type Props = {
  selectFacilities: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FacilitiesFilter = ({ selectFacilities, onChange }: Props) => {
  return (
    <div className="pb-5 border-b border-slate-300">
      <h4 className="mb-2 font-semibold text-md">Facilities</h4>
      {hotelFacilities.map((facility) => (
        <label
          key={facility}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <input
            type="checkbox"
            className="rounded"
            value={facility}
            checked={selectFacilities.includes(facility)}
            onChange={onChange}
          />
          <span>{facility}</span>
        </label>
      ))}
    </div>
  );
};

export default FacilitiesFilter;
