import React from "react";
import { useState } from "react";

function backgroundChanger() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className="flex justify-center items-end p-5 flex-wrap w-full h-screen" style={{ backgroundColor: color }}>
        <div className="bg-white px-10 py-3 rounded-full gap-3 flex flex-wrap">
          <button
            onClick={() => setColor("red")}
            className=" px-10 text-white text-lg font-medium py-2 rounded-full shadow-md"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className=" px-10 text-white text-lg font-medium py-2 rounded-full shadow-md"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("black")}
            className=" px-10 text-white text-lg font-medium py-2 rounded-full shadow-md"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("gray")}
            className=" px-10 text-white text-lg font-medium py-2 rounded-full shadow-md"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
        </div>
      </div>
    </>
  );
}
export default backgroundChanger;
