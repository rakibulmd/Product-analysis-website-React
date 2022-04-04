import React from "react";

const Review = ({ review }) => {
    const {
        name,
        picture,
        rating,
        comment,
        description,
        address,
        company,
        gender,
        time,
    } = review;
    return (
        <div className="mb-10 border-2 rounded-xl p-3 shadow-xl">
            <h2 className="font-bold text-xl border-b-2 pb-2">{comment}</h2>
            <p className="text-stone-600">{time}</p>
            <div>{rating}</div>
            <div className="text-center">
                <p className="text-stone-700 text-6xl">❝</p>
                <p>{description}</p>
                <p className="text-stone-700 text-6xl">❞</p>
            </div>

            <div className="mt-5 text-center flex justify-center flex-col">
                <img
                    className="mx-auto w-20 h-20 rounded-full"
                    src={picture}
                    alt=""
                />
                <h2>
                    {name} , {gender}
                </h2>
                <p>
                    {company} , {address}
                </p>
            </div>
        </div>
    );
};

export default Review;
