import React, { useCallback, useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const data = useCurrencyInfo(from);
  const options = Object.keys(data);

  const convert = useCallback(() => {
    setConvertedAmount(data[to] * amount);
  }, [amount]);
  const swap = () => {
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setFrom(to);
    setTo(from);
  };
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <div className="w-full mb-1">
              <InputBox
                label="From"
                option={options}
                selectedCurrency={from}
                changeCurrency={(e) => setFrom(e)}
                amount={amount}
                changeAmount={(e) => setAmount(e)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={() => {
                  swap();
                }}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                option={options}
                selectedCurrency={to}
                changeCurrency={(e) => setTo(e)}
                amount={convertedAmount}
                disableAmount
              />
            </div>
            <button
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={convert}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
