export default function RatingStars({ rating, setRating }) {
  return (
    <div className="flex gap-1 text-2xl">
      {[1, 2, 3, 4, 5].map((num) => (
        <span
          key={num}
          onClick={() => setRating(num)}
          className={`cursor-pointer ${
            num <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}
