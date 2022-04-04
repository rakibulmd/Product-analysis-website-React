import React from "react";
import smartWatch from "../../images/smartwatch.png";
import "./Showcase.css";

const Showcase = () => {
    return (
        <div className="container showcase mx-auto flex flex-col items-center md:flex-row justify-center ">
            <div className="order-2 md:order-1 text-center md:text-left">
                <h2 className="text-4xl">We can tell</h2>
                <h2 className="text-5xl text-orange-600 leading">
                    The best for you
                </h2>
                <p className="mt-8">
                    If you are looking for your next smart watch, you have come
                    to the right place. We have reviewed almost all popular
                    smart watches so you can decide which one can suit you the
                    best. Don't forget to post your own review!
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
    );
};

export default Showcase;
