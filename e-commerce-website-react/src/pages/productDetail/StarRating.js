import React from "react";
import { TbStarFilled } from "react-icons/tb";
import { TbStarHalfFilled } from "react-icons/tb";
import { CiStar } from "react-icons/ci";

function StarRating({ stars }) {
  console.log("stars", stars);
  const rating = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars > index + 1 ? (
          <TbStarFilled className="icon" />
        ) : stars > number ? (
          <TbStarHalfFilled className="icon" />
        ) : (
          <CiStar className="icon" />
        )}
      </span>
    );
  });

  return (
    <>
      <span>{rating}</span>
    </>
  );
}
export default StarRating;
