import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { signUp } from '../actions/userActions';

const Signup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    username: "",
    password: "",
  });
  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  const { name, username, password } = formData;

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
        value={name}
        onChange={(e)=> updateFormData(e)}
        name='name'
        type='text'
        placeholder='Name'
      />
      <input
        value={username}
        onChange={(e) => updateFormData(e)}
        placeholder="User Name"
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
export default Signup;
