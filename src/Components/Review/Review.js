import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import "animate.css";
class Foo extends Component {
    changeRating(newRating, name) {
        this.setState({
            rating: newRating,
        });
    }

    render() {
        return (
            <StarRatings
                rating={this.state.rating}
                starRatedColor="rgb(230, 67, 47)"
                starEmptyColor="rgb(203, 211, 227)"
                changeRating={this.changeRating}
                numberOfStars={5}
                name="rating"
            />
        );
    }
}

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
        <div className="mb-10 border-2 border-orange-600 rounded-xl p-3 shadow-xl relative h-[500px] animate__animated animate__fadeInUp animate__fast	800ms">
            <div className="border-b-2">
                <h2 className="font-bold text-xl pb-2">{comment}</h2>
                <div className="flex items-center">
                    <div>
                        <StarRatings
                            rating={rating}
                            starRatedColor="rgb(230, 67, 47)"
                            starEmptyColor="rgb(203, 211, 227)"
                            starDimension="20px"
                            starSpacing="1px"
                        />
                    </div>
                    <div className="ml-3">
                        {" "}
                        <p>
                            <small>{rating} / 5</small>
                        </p>
                    </div>
                </div>
                <div className="hidden sm:flex justify-between">
                    <p className="text-stone-700">
                        {" "}
                        <small> {time?.split("T")[0]}</small>{" "}
                    </p>
                    <p className="text-stone-700">
                        <small>{time?.split("T")[1]}</small>
                    </p>
                </div>
            </div>

            <div className="text-center">
                <p className="text-stone-700 text-6xl">❝</p>
                <p>{description}</p>
                <p className="text-stone-700 text-6xl">❞</p>
            </div>

            <div className="flex justify-between items-center absolute bottom-3">
                <div className="mt-5 flex items-center justify-center">
                    <div>
                        <img
                            className="mx-auto w-16 h-16 rounded-full"
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
        </div>
    );
};

export default Review;
