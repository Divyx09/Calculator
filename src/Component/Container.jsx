import React from "react";

const Container = (props) => {
  return (
    <div>
      <div className='container border my-2 rounded ' style={{ width: "25rem" }}>
        {props.children}
      </div>
    </div>
  );
};

export default Container;
