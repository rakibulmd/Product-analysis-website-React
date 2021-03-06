import React from "react";
import smartWatch2 from "../../images/smartwatch2.jpg";
import "animate.css";

const About = () => {
    return (
        <div className="container mx-auto p-3 md:p-5 mt-10">
            <img
                className="w-full md:w-1/2 mx-auto animate__animated animate__fadeInUp animate__fast	800ms"
                src={smartWatch2}
                alt=""
            />
            <h2 className="text-xl text-center mt-5 animate__animated animate__fadeInUp">
                We review smart watches that helps to consumer to check before
                buying it. This helps to buy according to the needs of consumer
                and to avoid unusual troubles.
            </h2>
        </div>
    );
};

export default About;
