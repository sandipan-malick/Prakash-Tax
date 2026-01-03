import { useEffect, useState } from "react";
import FeedbackForm from "../components/FeedbackForm";
import axios from "axios";

export default function Feedback() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    let isMounted = true; // safety guard

    const fetchFeedback = async () => {
      try {
        const res = await axios.get(
          "https://prakash-tax.onrender.com/api/feedback/all"
        );

        if (isMounted) {
          setReviews(res.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchFeedback();

    return () => {
      isMounted = false; // cleanup
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-6">
          Customer Feedback & Ratings
        </h1>

        <div className="mb-12">
          <FeedbackForm />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.length === 0 ? (
            <p className="text-center col-span-2 text-gray-500">
              No feedback available yet.
            </p>
          ) : (
            reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <div className="text-yellow-500">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                </div>

                <p className="text-gray-700 mb-2">{review.comment}</p>
                <p className="text-sm text-gray-400">
                  {new Date(review.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
