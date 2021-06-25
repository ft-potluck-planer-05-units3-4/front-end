import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { signUp } from '../actions/userActions';

const Signup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  const { userName, password } = formData;

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(signUp(formData));
    // console.log("FormData:",formData);
    //     const loginCreds = {
    //       username: formData.username.trim (),
    //       password: formData.password.trim (),
    //     };
    // console.log("LoginCreds:",loginCreds);
    // props.loginUser (loginCreds);
  };

  return (
    <form>
      <input
        value={userName}
        onChange={(e) => updateFormData(e)}
        placeholder="User Name"
        type="text"
        name="userName"
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
export default Signup;
