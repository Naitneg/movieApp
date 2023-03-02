import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Header from "../../Pages/ConcessionsPages/Header";

function Login() {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [wrongcredentials, setwrongcredentials] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);
  const { dispatch } = useContext(AuthContext);

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    dispatch({ type: "LOGIN_START" });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formValues.username,
          password: formValues.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.user) {
            dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
            navigate("/movies");
          } else {
            dispatch({ type: "LOGIN_FAILURE" });
            setwrongcredentials(false);
          }
        });
    }
  }, [formErrors, dispatch, isSubmit, navigate]);

  return (
    <>
      <Header />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-title">
            <h2>Login Form</h2>
            <h3>EaglesCinema</h3>
          </div>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.username}</p>
            <div className="field">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            {!wrongcredentials && (
              <p className="login-container1">Wrong pasword or username</p>
            )}
            <p>{formErrors.password}</p>

            <button className="login-button ">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
