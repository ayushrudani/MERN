import { useState } from "react";

function App() {
  const [bg, setBg] = useState("red");
  return (
    <>
      <div
        style={{ backgroundColor: bg }}
        className=" flex items-center justify-center w-full h-[100vh]"
      >
        {/* // white bg pannle in bottom center */}
        <div className="absolute bottom-6 w-auto py-2 px-8 rounded-md text-center bg-white">
          <button
            onClick={() => setBg("red")}
            className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg mx-2"
          >
            Red
          </button>
          <button
            onClick={() => setBg("green")}
            className="bg-green-500 text-white font-bold px-4 py-2 rounded-lg mx-2"
          >
            Green
          </button>
          <button
            onClick={() => setBg("blue")}
            className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg mx-2"
          >
            Blue
          </button>
          <button
            onClick={() => setBg("yellow")}
            className="bg-yellow-500 text-white font-bold px-4 py-2 rounded-lg mx-2"
          >
            Yellow
          </button>
          <button
            onClick={() => setBg("black")}
            className="bg-black text-white font-bold px-4 py-2 rounded-lg mx-2"
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
