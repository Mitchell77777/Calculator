import React from "react";

const Keypad = ({ handleClick, clear, calculate }) => {
  return (
    <div className="keypad">
      <div>
        {" "}
        <button className="operatorButton" onClick={() => handleClick("+")}>
          +
        </button>
        <button className="operatorButton" onClick={() => handleClick("-")}>
          -
        </button>
        <button className="operatorButton" onClick={() => handleClick("*")}>
          *
        </button>
        <button className="operatorButton" onClick={() => handleClick("/")}>
          /
        </button>
      </div>

      <div>
        {" "}
        <button className="numberButton" onClick={() => handleClick("7")}>
          7
        </button>
        <button className="numberButton" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="numberButton" onClick={() => handleClick("9")}>
          9
        </button>
        <button className="numberButton" onClick={() => handleClick("0")}>
          0
        </button>
      </div>

      <div>
        {" "}
        <button className="numberButton" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="numberButton" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="numberButton" onClick={() => handleClick("6")}>
          6
        </button>
        <button className="clearButton" onClick={clear}>
          c
        </button>
      </div>

      <div>
        {" "}
        <button className="numberButton" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="numberButton" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="numberButton" onClick={() => handleClick("3")}>
          3
        </button>
        <button className="equalButton" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Keypad;
