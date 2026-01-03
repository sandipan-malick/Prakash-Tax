import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { FaStar, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import prakash from "../assets/prakash.png";
import ashoke from "../assets/ashoke.png";

export default function Home() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchReviews = async () => {
      try {
        const res = await axios.get("https://prakash-tax.onrender.com/api/reviews/feedBackSend");
        if (isMounted) {
          setReviews(res.data || []);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  const avgRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((sum, r) => sum + r.rating, 0);
    return (total / reviews.length).toFixed(1);
  }, [reviews]);

  return (
    <div className="w-full text-gray-800">
      {/* HERO SECTION */}
      <section className="bg-linear-to-r from-blue-900 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Prakash Tax Solutions
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Trusted Tax & Documentation Services
          </p>
          <p className="mb-8">
            All types of Tax related work are provided with accuracy and trust.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="tel:9734350935"
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
            >
              Call Now
            </a>
            <a
              href="/feedback"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900"
            >
              Give Feedback
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              About Prakash Tax Solutions
            </h2>
            <p className="mb-4 leading-relaxed">
              Prakash Tax Solutions is a trusted service provider offering all
              kinds of tax-related and documentation work with transparency and
              professionalism.
            </p>
            <p className="font-semibold">
              Owner: <span className="font-normal">Prakash Chandra Dalui</span>
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="flex items-center gap-2 mb-2">
              <FaPhoneAlt className="text-blue-700" /> 9734350935
            </p>
            <p className="flex items-center gap-2 mb-2">
              <FaEnvelope className="text-blue-700" />
              prakashchandra.dalui@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-700" />
              Hooghly, West Bengal
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Income Tax Related Work",
              "GST Services",
              "Documentation & Form Filling",
              "Government Online Services",
              "TDS Return",
              "Other Tax Consultancy Services",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-lg mb-2">{service}</h3>
                <p className="text-sm text-gray-600">
                  Reliable and professional service with complete guidance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                <img src={prakash} alt="Prakash Chandra Dalui" />
              </div>
              <h3 className="text-xl font-semibold">Prakash Chandra Dalui</h3>
              <p className="text-gray-500">Owner</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                <img src={ashoke} alt="Ashoke Chatterjee" />
              </div>
              <h3 className="text-xl font-semibold">Ashoke Chatterjee</h3>
              <p className="text-gray-500">Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Customer Reviews
          </h2>

          <div className="flex justify-center items-center mb-8">
            <span className="text-3xl font-bold mr-2">{avgRating}</span>
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={
                    star <= Math.round(avgRating) ? "" : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="ml-2 text-gray-500">
              ({reviews.length} Reviews)
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.length === 0 && (
              <p className="text-center col-span-3 text-gray-500">
                No reviews yet.
              </p>
            )}

            {reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex text-yellow-400 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={star <= review.rating ? "" : "text-gray-300"}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.comment}</p>
                <h4 className="font-semibold">{review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
