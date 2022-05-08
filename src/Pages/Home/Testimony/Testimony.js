import React from "react";
import "./Testimony.css";
import billGates from "../../../images/mrbill.jpg";
import chrisRock from "../../../images/Chris_Rock.jpg";
import willSmith from "../../../images/will-smith.jpg";
import TestimonyCard from "../TestimonyCard/TestimonyCard";

const Testimony = () => {
  const testimonies = [
    {
      id: 1,
      img: billGates,
      name: "Bill Gates",
      desc: "He is a wonderful company and truly a professional in this field. I will treasure them forever. I simply cannot recommend them enough!",
    },
    {
      id: 2,
      img: willSmith,
      name: "Will Smith",
      desc: "They are the absolute BEST! I have had the pleasure of getting service from them twice and would recommend them to anyone. Thank you, thank you, thank you!",
    },
    {
      id: 3,
      img: chrisRock,
      name: "Chris Rock",
      desc: "They create magic. I would never hesitate to recommend them to anyone who wants a true professional to create a customized perfume experience",
    },
  ];
  return (
    <div className="my-5">
      <h1 className="text-center my-5 testi-title">Feed Backs</h1>
      <div className="row p-4 g-4 mx-auto card-container">
        {testimonies.map((testimony) => (
          <TestimonyCard key={testimony.id} testimony={testimony} />
        ))}
      </div>
    </div>
  );
};

export default Testimony;
