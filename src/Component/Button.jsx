import React from "react";

const Button = ({ buttonName, onCLickHandle }) => {
  return (
    <div className='border row d-flex justify-content-center'>
      {buttonName.map((item, index) => (
        <button key={index} className={`btn  ${item === "C" ? "btn-danger" : (["=", "+", "-", "/"].includes(item) ? "btn-warning" : "btn-secondary")} col-3 p-3 my-2 mx-2`} onClick={() => { onCLickHandle(item) }}>
          <b className="h4">{item}</b>
        </button>
      ))
      }
    </div >
  );
};

export default Button;
