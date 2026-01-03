import { useEffect, useState } from "react";
import axios from "axios";
import AdminReviewCard from "../components/AdminReviewCard";

export default function AdminReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  let isMounted = true;

  const fetchReviews = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5080/api/admin/reviews"
      );

      if (isMounted) {
        setReviews(res.data.reviews);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      if (isMounted) setLoading(false);
    }
  };

  fetchReviews();

  return () => {
    isMounted = false;
  };
}, []);

  const deleteReview = async (id) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;

    try {
      await axios.delete(
        `http://localhost:5080/api/admin/reviews/${id}`
      );

      // Remove deleted review from UI
      setReviews(reviews.filter((review) => review._id !== id));
    } catch (error) {
      console.error(error);
      alert("Failed to delete review");
    }
  };



  if (loading) {
    return <p className="text-center mt-10">Loading reviews...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Admin – Customer Reviews
      </h1>

      {reviews.length === 0 ? (
        <p className="text-center text-gray-500">No reviews found</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {reviews.map((review) => (
            <AdminReviewCard
              key={review._id}
              review={review}
              onDelete={deleteReview}
            />
          ))}
        </div>
      )}
    </div>
  );
}
