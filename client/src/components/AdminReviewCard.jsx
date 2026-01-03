export default function AdminReviewCard({ review, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg">{review.name}</h3>
        <span className="text-yellow-500 font-medium">
          ⭐ {review.rating}/5
        </span>
      </div>

      <p className="text-gray-700 mb-3">{review.comment}</p>

      <p className="text-sm text-gray-400 mb-3">
        {new Date(review.createdAt).toLocaleString()}
      </p>

      <button
        onClick={() => onDelete(review._id)}
        className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-500"
      >
        Delete
      </button>
    </div>
  );
}
