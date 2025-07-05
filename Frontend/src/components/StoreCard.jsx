import { useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";
import StoreImage from "../assets/StoreImage.jpg";

export default function StoreCard({ store, onRate }) {
  const [score, setScore] = useState(store.userRating || 0);
  const isRated = store.userRating != null;

  const handleRating = async () => {
    if (score < 1 || score > 5) return toast.error("Rating must be between 1–5");

    try {
      if (isRated) {
        await api.put(`/ratings/${store._id}`, { score });
        toast.success("Rating updated");
      } else {
        await api.post("/ratings", { storeId: store._id, score });
        toast.success("Rating submitted");
      }
      onRate(); // Refresh list
    } catch (err) {
      toast.error(err.response?.data?.message || "Rating failed");
    }
  };

  //star function
  function renderStars(score, clickable = false, onChange = () => {}) {
    const s = Math.round(score) || 0;
    return (
      <div className="flex gap-1/2">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            onClick={() => clickable && onChange(i)}
            className={`text-xl cursor-${clickable ? "pointer" : "default"} ${
              i <= s ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="border-2 rounded-lg p-4 bg-white shadow-md">
      <img
        src={StoreImage}
        alt="Store"
        className="w-full border-1 object-cover rounded-xl mb-2"
      />

      <h2 className="text-lg font-bold">{store.name}</h2>
      <p className="text-sm text-gray-600">{store.address}</p>

      <div className="flex text-sm">
        <p className="mt-2">{store.avgRating || "0"}</p>
        <p className="mt-1/2 ml-2 ">{renderStars(store.avgRating)}</p>
      </div>

      <div className="flex mt-1">
        <p className="mb-1 mt-1 text-sm font-medium">Your Rating :</p>
        <p className="ml-2 ">{renderStars(score, true, setScore)}</p>
        <button
          onClick={handleRating}
          className=" ml-5 mt-1 bg-blue-500 text-white text-sm px-2 py-1/2 rounded hover:bg-blue-600"
        >
          {isRated ? "Update Rating" : "Submit Rating"}
        </button>
      </div>
    </div>
  );
}
