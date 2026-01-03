import { useState } from "react";
import RatingStars from "./RatingStars";
import axios from "axios";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !comment || rating === 0) {
      alert("Please fill all fields and give rating");
      return;
    }

    try {
      await axios.post("https://prakash-tax.onrender.com/api/reviews/add", {
        name,
        comment,
        rating,
      });

      alert("Thank you for your feedback!");
      setName("");
      setComment("");
      setRating(0);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        Share Your Experience
      </h2>

      <form onSubmit={submitHandler} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Your Comment"
          className="w-full border p-2 rounded"
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <div>
          <p className="mb-1 font-medium">Rating</p>
          <RatingStars rating={rating} setRating={setRating} />
        </div>

        <button
          type="submit"
          className="bg-blue-800 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
