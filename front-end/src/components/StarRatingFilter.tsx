import { AiFillStar } from "react-icons/ai";

type Props = {
  selectedStars: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StarRatingFilter = ({ selectedStars, onChange }: Props) => {
  return (
    <div className="pb-5 border-b border-slate-300">
      <h4 className="mb-2 font-semibold text-md">Property Rating</h4>
      {["5", "4", "3", "2", "1"].map((star) => (
        <label
          key={star}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <input
            type="checkbox"
            className="rounded"
            value={star}
            checked={selectedStars.includes(star)}
            onChange={onChange}
          />
          <span className="flex items-center gap-1">
            {star} <AiFillStar className="fill-yellow-400" />
          </span>
        </label>
      ))}
    </div>
  );
};

export default StarRatingFilter;
