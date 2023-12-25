import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");

  const login = () => {
    console.log("function called");
    console.log("username: ", username);

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        console.log(data.token);
        console.log("logged in");
        console.log("data: ", data);
      })

      .catch((err) => {
        console.log(err);
      });
    navigate("/homeProtectedRoute");
  };

  return (
    <div className="text-black flex justify-center items-center flex-col gap-16 pt-5">
      <span className="text-3xl font-bold ">Login Page</span>

      <form
        className="text-white flex items-center flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="rounded-md p-2"
          type="text"
          placeholder="username"
          value={username}
          readOnly
        />
        <input
          className="rounded-md p-2"
          type="password"
          placeholder="password"
          value={password}
          readOnly
        />
        <button
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 h-11 w-20 mb-2"
          onClick={login}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
