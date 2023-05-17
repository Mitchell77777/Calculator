import React from "react";
import { useState } from "react";
import Display from "./display";
import Keypad from "./keypad";
import Axios from "axios";

const Calculator = () => {
  const [result, setResult] = useState("");

  const [lhs, setLhs] = useState("");
  const [operator, setOperator] = useState("");
  const [rhs, setRhs] = useState("");

  const handleClick = (value) => {
    if (["+", "-", "*", "/"].includes(value)) {
      if (result.match(/[+\-*/]$/)) {
        return;
      }
    }
    setResult(result.concat(value));
  };

  const clear = () => {
    setResult("");
  };

  const calculate = () => {
    if (result.match(/[+\-*/]$/)) {
      return;
    } else {
      const expression = result.split(/[+\-*/]/);
      const lhs = expression[0];
      const operator = result.match(/[+\-*/]/)[0];
      const rhs = expression[1];
      Axios.post("http://localhost:5174/create", {
        lhs: lhs,
        operator: operator,
        rhs: rhs,
      }).then(() => {
        console.log("Success");
      });
      setResult(eval(result).toString());
    }
  };

  return (
    <div className="calculator">
      <h1 className="logo">Western Express Calculator</h1>
      <Display result={result} />
      <Keypad handleClick={handleClick} clear={clear} calculate={calculate} />
    </div>
  );
};

export default Calculator;
