import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../Hooks/useReviews";
import smartWatch from "../../images/smartwatch.png";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
    const [reviews, setReviews] = useReviews();
    let navigate = useNavigate();
    return (
        <main className="px-3 md:px-5 mt-5">
            <div className="container showcase mx-auto flex flex-col items-center md:flex-row justify-center ">
                <div className="order-2 md:order-1 text-center md:text-left">
                    <h2 className="text-4xl">We can tell</h2>
                    <h2 className="text-5xl text-orange-600 leading">
                        The best for you
                    </h2>
                    <p className="mt-8">
                        If you are looking for your next smart watch, you have
                        come to the right place. We have reviewed almost all
                        popular smart watches so you can decide which one can
                        suit you the best. Don't forget to post your own review!
                    </p>
                    <button className="bg-orange-600 text-white p-2 px-3 mt-3 rounded">
                        See Reviews
                    </button>
                </div>
                <img
                    className="md:w-1/2 sm:w-full md:mx-auto order-1 md:order-2"
                    src={smartWatch}
                    alt=""
                />
            </div>
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
