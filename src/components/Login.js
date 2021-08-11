import React, { useState } from "react";
import "../styles/signup.css";
import { connect } from "react-redux";
import { loginUser } from "../actions/userActions";
import { useHistory } from "react-router";
const Login = (props) => {
  const [formData, setFormData] = useState({
    username: "Admin",
    password: "1234",
  });
  const { push } = useHistory();

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const { username, password } = formData;
  const { loginUser } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    const loginCreds = {
      username: formData.username.trim(),
      password: formData.password.trim(),
    };
    loginUser(loginCreds);
    push("/events");
  };
  return (
    <form>
      <input
        value={username}
        onChange={(e) => updateFormData(e)}
        placeholder="User name"
        type="text"
        name="username"
        required
      />
      <input
        value={password}
        onChange={(e) => updateFormData(e)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <button onClick={onSubmit} type="submit">
        Submit
      </button>
    </form>
  );
};

export default connect(null, { loginUser })(Login);
