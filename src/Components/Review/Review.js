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
        <div className="mb-10 border-2 border-orange-600 rounded-xl p-3 shadow-xl">
            <h2 className="font-bold text-xl border-b-2  pb-2">{comment}</h2>
            <div className="flex justify-between">
                <p className="text-stone-700">{time}</p>
                <div>{rating}</div>
            </div>
            <div className="text-center">
                <p className="text-stone-700 text-6xl">❝</p>
                <p>{description}</p>
                <p className="text-stone-700 text-6xl">❞</p>
            </div>

            <div className="mt-5 flex items-center justify-center">
                <div>
                    <img
                        className="mx-auto w-20 h-20 rounded-full mr-2"
                        src={picture}
                        alt=""
                    />
                </div>
                <div>
                    <h2>
                        {name} ({gender})
                    </h2>
                    <p>
                        <small>
                            {company} , {address}
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Review;
