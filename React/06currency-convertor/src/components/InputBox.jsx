import React from "react";

function InputBox({
  label = "",
  option,
  selectedCurrency,
  changeCurrency,
  changeAmount,
  amount = 0,
  disableAmount = false,
  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          value={amount}
          disabled={disableAmount}
          onChange={(e) => changeAmount(e.target.value)}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => changeCurrency(e.target.value)}
        >
          <option value={selectedCurrency}>{selectedCurrency}</option>
          {option.map((element) => {
            return (
              <option key={element} value={element}>
                {element}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
