// import React from "react";
// import { connect } from "react-redux";
// import { Route, Redirect } from "react-router-dom";
//
// function PrivateRoute({ isLoggedIn, ...rest }) {
//   return isLoggedIn ? <Route {...rest} /> : <Redirect to="/" />;
// }
//
// const state2props = (state) => ({
//   isLoggedIn: state.isLoggedIn,
// });
//
// export default connect(state2props)(PrivateRoute);
import React from "react";
import { Route, Redirect } from "react-router-dom";

const Privateroute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default Privateroute;
