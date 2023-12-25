import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const redirectHandler = () => {
    return navigate("/");
  };
  return (
    <div>
      Something Went Wrong :(
      <button onClick={redirectHandler}>GO to Login Page</button>
    </div>
  );
};

export default Error;
