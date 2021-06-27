import React, { useEffect, useState } from "react";
import "../style/Title.css";
import { BrowserRouter, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function getData() {
  return JSON.parse(localStorage.getItem("userData"));
}

function Title() {
  const [userDetails, setuserDetails] = useState(getData);
  const history = useHistory();

  //   const [loginDetails, setloginDetails] = useState();
  console.log("header props", userDetails);
  //   useEffect(() => {
  //     setuserDetails(JSON.parse(localStorage.getItem("userData")));
  //     setloginDetails(JSON.parse(localStorage.getItem("login")));
  //   }, []);

  const logout = () => {
    localStorage.setItem(
      "userData",
      JSON.stringify({ ...userDetails, login: false })
    );
    history.push("/");
  };

  if (userDetails.login === true) {
    return (
      <div className="Title">
        <div style={{ color: "#fff" }}>
          <h3>{userDetails.name}</h3>
        </div>
        &nbsp;&nbsp;
        <div style={{ color: "#fff" }} onClick={() => logout()}>
          <h3>Logout</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Title">
        <Link to="/register" style={{ color: "#fff" }}>
          <h3>Register</h3>
        </Link>
        &nbsp;&nbsp;
        <Link to="/" style={{ color: "#fff" }}>
          <h3>Login</h3>
        </Link>
      </div>
    );
  }
}

export default Title;
