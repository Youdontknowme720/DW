import { useState } from "react";
import "../styles/Personal.css";
import PersonalCard from "./PersonalCard";

type Card = {
  title: string;
  desc: string;
  image: string;
};

type Props = {
  cards: Card[];
};

export default function Personal({ cards }: Props) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="personal-container">
      <button className="carousel-btn left" onClick={prev}>‹</button>

      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {cards.map((card, i) => (
            <div className="carousel-slide" key={i}>
              <PersonalCard {...card} />
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-btn right" onClick={next}>›</button>
    </div>
  );
}
