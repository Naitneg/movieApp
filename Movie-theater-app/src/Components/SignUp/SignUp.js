import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./signUp.css";
import Header from "../../Pages/ConcessionsPages/Header";

function SignUp() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      fetch("http://localhost:3000/api/auth/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formValues.username,
          email: formValues.email,
          password: formValues.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.id) {
            navigate("/login");
          } else {
            console.log("unable to register");
          }
        });
    }
  }, [formErrors, isSubmit, navigate]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    } else if (values.password.length > 16) {
      errors.password = "Password cannot exceed more than 16 characters";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Those passwords didnt match. Try again.";
    }
    return errors;
  };

  return (
    <>
      <Header />
      <div className="signUp-container">
        <form className="signUp-form" onSubmit={handleSubmit}>
          <div className="signUp-title">
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
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <div className="field">
              <input
                type="password"
                name="confirmPassword"
                placeholder="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.confirmPassword}</p>
            <button className="signUp-button ">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
