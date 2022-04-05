import React from "react";

const QnA = ({ qna }) => {
    const { question, answer } = qna;
    return (
        <article className="border-2 rounded-lg mb-5 p-3 border-orange-600">
            <h2 className="font-bold text-xl pb-2 border-b-2">{question}</h2>
            <p className="pt-3">{answer}</p>
        </article>
    );
};

export default QnA;
