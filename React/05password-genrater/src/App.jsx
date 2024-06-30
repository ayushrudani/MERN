import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwrodGenrater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (specialCharAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, specialCharAllowed, setPassword]);

  const passRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwrodGenrater();
  }, [length, numberAllowed, specialCharAllowed, passwrodGenrater]);

  return (
    <>
      <div className=" flex items-center justify-center w-full h-[100vh]">
        <div className="w-auto px-12 py-8 bg-gray-100 rounded-lg shadow-lg justify-center items-center">
          <h1 className="text-4xl font-bold text-center">Password Generator</h1>
          <div className="mt-4 flex justify-between">
            <input
              type="text"
              value={password}
              readOnly
              className="w-full p-2 border border-gray-300 rounded-md"
              ref={passRef}
            />
            <button
              onClick={copyToClipboard}
              className="w-[50px] h-full ml-2 p-2 bg-blue-500 text-white rounded-md"
            >
              Copy
            </button>
          </div>
          <div className="flex items-center justify-between mt-4 gap-x-2">
            <label htmlFor="length">Length({length})</label>
            <input
              type="range"
              id="length"
              min="0"
              max="30"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />

            <div className="flex gap-x-2">
              <input
                type="checkbox"
                id="number"
                checked={numberAllowed}
                onChange={(e) => setNumberAllowed(e.target.checked)}
              />
              <label htmlFor="number">Number</label>

              <input
                type="checkbox"
                id="specialChar"
                checked={specialCharAllowed}
                onChange={(e) => setSpecialCharAllowed(e.target.checked)}
              />
              <label htmlFor="specialChar">Special Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
