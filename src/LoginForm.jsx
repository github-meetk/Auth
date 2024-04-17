import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/v1/auth/login", formData)
      .then((result) => {
        console.log(result);
        setFirstName(result?.data?.user?.firstName);
        setlastName(result?.data?.user?.lastName);
      })
      .catch((err) => console.log(err));
    // You can add login logic here, such as sending the data to a server for authentication
    console.log("Login submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="title">Authentication</div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Login</button>

      <Link to={"/"}>Singup</Link>
      {firstName && (
        <>
          <div className="title">FirstName : {firstName}</div>
          <div className="title">LastName : {lastName}</div>
        </>
      )}
    </form>
  );
};

export default LoginForm;
