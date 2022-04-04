import React from "react";
import smartWatch from "../../images/smartwatch.png";

const Home = () => {
    return (
        <main>
            <div className="container mx-auto flex flex-col md:flex-row md:justify-center sm:justify-start h-screen w-screen items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-7xl">We can tell</h2>
                    <h2 className="text-7xl">What is best for you...</h2>
                </div>
                <img
                    className="md:w-1/2 sm:w-full md:mx-auto order-1 md:order-2"
                    src={smartWatch}
                    alt=""
                />
            </div>
        </main>
    );
};

export default Home;
