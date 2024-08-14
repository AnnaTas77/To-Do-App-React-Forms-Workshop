import React from "react";
import Button from "./components/Button";
import Screen from "./components/Screen";
import { useState } from "react";

function App() {
  const btnValues = [
    "C",
    "+-",
    "%",
    "/",
    7,
    8,
    9,
    "X",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];
  // Define state and click handlers here

  const [calc, setCalc] = useState({ sign: "", num: 0, res: 0 });

  const numClickHandler = (e) => {
    e.preventDefault();

    let typedValue = e.target.value;

    setCalc((prevCalc) => {
      const newNum = (() => {
        if (prevCalc.num === "0" && typedValue === "0") {
          return "0";
        } else if (prevCalc.num === "0") {
          return typedValue;
        } else {
          return prevCalc.num + typedValue;
        }
      })();

      const newRes = prevCalc.sign ? prevCalc.sign : "0";

      return {
        ...prevCalc,
        num: newNum,
        res: newRes,
      };
    });
  };

  return (
    <>
      <div className="wrapper">
        <Screen value={calc.num} />
        <div className="buttonBox">
          {btnValues.map((btn) => (
            <Button
              value={btn}
              className={btn === "=" ? "equals" : ""}
              onClick={numClickHandler}
            />
          ))}
        </div>
        ;
      </div>
    </>
  );
}

export default App;
