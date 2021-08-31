import React, { useState, useRef } from "react";
import Axios from "../../../server/node_modules/axios";
import "./login.css";
import loginim from "../../images/login.svg";
export default function Login({ setid }) {
  const [Email, setEmail] = useState("");
  const [message, setmessage] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passRef = useRef();

  const login = () => {
    //allow everyone to see web site content
    setid(1)
    //allow only admins
    Axios.post("http://localhost:3001/login", {
      email: Email,
      password: password,
    }).then((response) => {
      console.log(typeof response.data[0]);
      if (typeof response.data[0] !== "undefined") {
        setid(response.data[0].id);
      } else {
        console.log(response.data.message);
        setmessage(response.data.message);
      }
    });
  };
  return (
    <div className="d-flex root">
      <div className=" align-items-center justify-content-center image">
        <img src={loginim} alt="" />
      </div>
      <div
        className="d-flex flex-column justify-content-around align-items-center "
        style={{ height: "100vh", flex: 1 }}
      >
        <span className="Logo">LammaAdmin</span>
        <div className="container d-flex   flex-column justify-content-around align-items-center">
          <h1 className="title">Login</h1>
          <span style={{ color: "red" }}>{message}</span>
          <div className="FORM">
            <label style={{ fontWeight: "300", marginBottom: "10px" }}>
              Email
            </label>
            <input
              className="form-control input"
              type="email"
              required
              ref={emailRef}
              onChange={() => {
                setEmail(emailRef.current.value);
              }}
            />
          </div>
          <div>
            <label style={{ fontWeight: "300", marginBottom: "10px" }}>
              Password
            </label>
            <input
              className="form-control input"
              ref={passRef}
              required
              type="password"
              onChange={() => {
                setPassword(() => passRef.current.value);
              }}
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={login}
            style={{ width: "200px", height: "40px", fontWeight: "600" }}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
