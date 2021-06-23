import React, {useState} from 'react';
import  '../Styles/signup.css'
import { connect } from 'react-redux';
import { loginUser } from '../actions/userActions';
import { useHistory } from 'react-router';

const Form = (props) => {
  const [formData, setFormData] = useState ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const { push } = useHistory();
  const { isLoggedIn } = props;

  const updateFormData = event =>
    setFormData ({
      ...formData,
      [event.target.name]: event.target.value,
    });
  const {firstName, lastName, email, password} = formData;

  const onSubmit = (evt) => {
    evt.preventDefault();
    const loginCreds = {
      username: formData.username.trim(),
      password: formData.password.trim(),
    };
    props.loginUser(loginCreds);
  };

  return (
    <form>
      <input
        value={firstName}
        onChange={e => updateFormData (e)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={lastName}
        onChange={e => updateFormData (e)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      <input
        value={email}
        onChange={e => updateFormData (e)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={password}
        onChange={e => updateFormData (e)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     username: state.userReducer.username,
//     password: state.userReducer.password,
//     isLoggedIn: state.userReducer.isLoggedIn,
//   };
// };
// export default connect(mapStateToProps, { loginUser })(Form);
export default (Form);
