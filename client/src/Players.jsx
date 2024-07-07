import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Players = ({ players }) => {
  const [index, setIndex] = useState(0);
  const { id, photo, decription } = players[index];

  const nextPlayer = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % players.length;
      return newIndex;
    });
  };

  const prevPlayer = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + players.length) % players.length;

      return newIndex;
    });
  };

  const randomPlayer = () => {
    let randomNumber = Math.floor(Math.random() * players.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    const newIndex = randomNumber % players.length;
    setIndex(newIndex);
  };

  return (
    <>
      <main className="w-full flex justify-center items-center bg-black">
        <article className="w-full flex justify-center items-center flex-col md:text-base text-sm text-white p-1">
          <h2 className="font-bold underline">
            Indian Team
          </h2>
          <div className="w-full h-auto flex justify-center items-center p-1 relative">
            <img
              src={photo}
              alt=""
              className="w-full object-contain aspect-video"
            />
            <div className="w-full flex justify-between items-center text-black px-1 absolute">
              <button
                className="md:w-10 w-5 md:h-10 h-5 flex justify-center items-center p-1 bg-white rounded-full"
                onClick={prevPlayer}
              >
                <FaChevronLeft />
              </button>
              <button
                className="md:w-10 w-5 md:h-10 h-5 flex justify-center items-center p-1 bg-white rounded-full"
                onClick={nextPlayer}
              >
                <FaChevronRight />
              </button>
            </div>
            <p className="bg-red-600 text-white absolute md:text-[1rem] text-[0.6rem] bottom-2 left-2 p-1">{decription}</p>
          </div>
          <div>
            <button
              className="w-auto text-center py-1 px-2 bg-purple-600 md:text-[1rem] text-[0.6rem] font-bold text-white rounded-sm"
              onClick={randomPlayer}
            >
              surprise me!
            </button>
          </div>
        </article>
      </main>
    </>
  );
};

export default Players;
