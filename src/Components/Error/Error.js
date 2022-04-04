import React from "react";
import { useNavigate } from "react-router-dom";
import ErrorPicture from "../../images/404.png";

const Error = () => {
    let navigate = useNavigate();
    return (
        <div className="container p-3 md:p-5 mt-10">
            <img className="w-1.2 mx-auto" src={ErrorPicture} alt="" />
            <button
                onClick={() => {
                    navigate("/home");
                }}
                className="bg-orange-600 text-white block p-2 px-10 my-3 rounded mx-auto mt-10"
            >
                Back to Home
            </button>
        </div>
    );
};

export default Error;
