import React from "react";
import useReviews from "../../Hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    console.log(reviews);
    return (
        <div className="px-3 md:px-5 mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-10">
            {reviews.map((review) => (
                <Review key={review.id} review={review}></Review>
            ))}
        </div>
    );
};

export default Reviews;
