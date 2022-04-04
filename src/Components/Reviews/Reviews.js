import React from "react";
import useReviews from "../../Hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    console.log(reviews);
    return (
        <div className="px-3 md:px-5 mt-10 lg:grid lg:grid-cols-2 gap-5">
            {reviews.map((review) => (
                <Review key={review.id} review={review}></Review>
            ))}
        </div>
    );
};

export default Reviews;
