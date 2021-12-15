import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="FAQ__question">
      <header>
        <h4
          onClick={() => setExpanded(!expanded)}
          className="FAQ__question-title"
        >
          {title}
        </h4>
        <button className="FAQ__btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded && <p>{info}</p>}
    </article>
  );
};

export default Question;
