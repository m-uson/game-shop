import React from "react";
import "./came-cover.css";

const GameCover = ({ image = "" }) => {
  return (
    <img className="game-cover" style={{ backgroundImage: `url(${image})` }} />
  );
};

export default GameCover;
