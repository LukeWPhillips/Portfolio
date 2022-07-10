import React from "react";

function Card({ children, reverse }) {
  return <div className={`item ${reverse && "reverse"}`}>{children}</div>;
}

export default Card;
