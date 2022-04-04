import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../Hooks/useReviews";
import Review from "../Review/Review";
import Showcase from "../Showcase/Showcase";

const Home = () => {
    const [reviews, setReviews] = useReviews();
    let navigate = useNavigate();
    return (
        <main className="px-3 md:px-5 mt-5">
            <Showcase></Showcase>
            <div className="container mx-auto">
                <h2 className="text-center font-bold text-3xl mb-5">
                    User Reviews
                    <span className="text-orange-600 ml-2">
                        ({reviews.slice(0, 3).length}/{reviews.length})
                    </span>
                </h2>
                {reviews.slice(0, 3).map((review) => (
                    <Review key={review.id} review={review}></Review>
                ))}
            </div>
            <button
                onClick={() => navigate("/reviews")}
                className="bg-orange-600 text-white block p-2 px-10 my-3 rounded mx-auto"
            >
                See All Reviews
            </button>
        </main>
    );
};

export default Home;
