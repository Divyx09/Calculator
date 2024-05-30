import React, { useState } from "react";
import Container from "./Container";
import Button from "./Button";

const CalcInterface = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const buttonName = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
  ];

  const onCLickHandle = (item) => {
    if (item === "C") {
      setInputValue("")
      setError(false)
    }
    else if (item === "=") {
      try {
        let result = eval(inputValue)
        setInputValue(result)
      }
      catch (e) {
        setError(true)
      }
    }
    else if (item != "C" && item != "=") {
      setInputValue(inputValue + item)
    }
  }
  return (
    <div className="mt-5 pt-5">
      <h1 className='text-center text-secondary'>CALCULATOR</h1>
      <Container>
        {error ? (
          <div className="alert alert-danger text-center mt-2">
            Error: Invalid Input
          </div>
        ) : ""}
        <div className="form-group">
          <input type='text' className='form-control my-3 py-3 form-control-lg input-value' readOnly value={inputValue} />
        </div>
        <Button buttonName={buttonName} onCLickHandle={onCLickHandle} />
      </Container>
    </div>
  );
};

export default CalcInterface;
