import React, { useState } from "react";
import Title from "../components/header";
import { useHistory } from "react-router-dom";

const Login = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [login, setLogin] = useState(true);

  const validateFrom = (v) => {
    // console.log(v.target.value);
    // this.setState({
    //   [e.target.name]: e.target.value,
    // });
    const { id, value } = v.target;
    setValues({ ...values, [id]: value });
  };

  const submit = () => {
    // alert("email", email, "password", password);
    if (values.email === "" || values.password === "") {
      alert("please enter email and password");
    } else {
      console.log("email", values);
      const userDetails = JSON.parse(localStorage.getItem("userData"));
      if (
        userDetails.email === values.email &&
        userDetails.password === values.password
      ) {
        localStorage.setItem(
          "userData",
          JSON.stringify({ ...userDetails, login: true })
        );
        history.push("/landingPage");
      } else {
        alert("Invalid User name and password");
      }
    }
  };

  return (
    <>
      <Title />
      {/* <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
           <div className="image">
            <img src={loginImg} />
          </div> 
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div> */}
      {/* <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <form>
          <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group text-left">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div> */}
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <form>
          <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(v) => {
                validateFrom(v);
              }}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={(v) => {
                validateFrom(v);
              }}
            />
          </div>

          <div
            // type="submit"
            className="btn btn-primary"
            onClick={() => submit()}
          >
            Login
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
