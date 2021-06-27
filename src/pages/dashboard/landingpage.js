import React, { useEffect, useState } from "react";
import Title from "../../components/header";
import { useHistory } from "react-router-dom";

function Landingpage() {
  //   const [userDetails, setuserDetails] = useState();
  //   const [loginDetails, setloginDetails] = useState();

  //   React.useEffect = () => {
  //     setuserDetails = JSON.parse(localStorage.getItem("userData"));
  //     setloginDetails = JSON.parse(localStorage.getItem("login"));
  //   };
  //   useEffect(() => {
  //     setuserDetails(JSON.parse(localStorage.getItem("userData")));
  //     setloginDetails(JSON.parse(localStorage.getItem("login")));
  //     console.log("userDetails", userDetails);
  //   }, [loginDetails, userDetails]);

  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  React.useEffect(() => {
    // localstorage only support storing strings as keys and values
    // - therefore we cannot store arrays and objects without converting the object
    // into a string first. JSON.stringify will convert the object into a JSON string
    // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    // localStorage.setItem("products", JSON.stringify(products));
    // add the todos as a dependancy because we want to update the
    // localstorage anytime the todos state changes
    setDisplayProducts(JSON.parse(localStorage.getItem("products")));
    console.log("displayProducts", displayProducts);
  }, []);

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
    if (values.email === "" || values.phone === "" || values.name === "") {
      alert("please enter email and password");
    } else {
      //   console.log("email", values);
      setProducts([
        ...products,
        // { name: values.name, email: values.email, phone: values.phone },
        values,
      ]);
      localStorage.setItem("products", JSON.stringify(products));
      setDisplayProducts(JSON.parse(localStorage.getItem("products")));
      console.log("displayProducts", displayProducts);
    }
  };

  const deleteProduct = (id) => {
    // alert("email", email, "password", password);
    const data = displayProducts.filter((book) => book.email == id);

    console.log("deleting data", data);
    setProducts([...products, data]);
    localStorage.setItem("products", JSON.stringify(products));
    setDisplayProducts(JSON.parse(localStorage.getItem("products")));
    console.log("displayProducts", displayProducts);
  };

  return (
    <>
      <Title />
      <div className="row">
        <div className="card col-6 col-lg-4  mt-2 ">
          <form>
            <div className="form-group text-left">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input
                type="name"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Enter name"
                onChange={(v) => {
                  validateFrom(v);
                }}
              />
            </div>
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
              <label htmlFor="exampleInputPassword1">Phone</label>
              <input
                type="phone"
                className="form-control"
                id="phone"
                placeholder="phone"
                onChange={(v) => {
                  validateFrom(v);
                }}
              />
            </div>
            {/* <div className="form-group text-left">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              onChange={(v) => {
                validateFrom(v);
              }}
            />
          </div> */}
            <div
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%" }}
              onClick={() => submit()}
            >
              Add contact
            </div>
          </form>
        </div>
        <div className="col-6 container">
          {displayProducts?.map((item, i) => (
            <>
              <div className="card col-lg-4 mt-2 ">
                <form>
                  <div className="form-group text-left">
                    <label>Name</label>
                    <input
                      type="name"
                      className="form-control"
                      id="name"
                      aria-describedby="emailHelp"
                      value={item.name}
                    />
                  </div>
                  <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      value={item.email}
                    />
                  </div>
                  <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="phone"
                      className="form-control"
                      id="phone"
                      value={item.phone}
                    />
                  </div>

                  <div
                    type="submit"
                    className="btn btn-danger"
                    style={{ width: "100%" }}
                    onClick={() => deleteProduct(item.email)}
                  >
                    Delete
                  </div>
                </form>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Landingpage;
