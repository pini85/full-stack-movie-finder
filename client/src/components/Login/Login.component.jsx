import React from "react";
import { connect } from "react-redux";

import Button from "../Button/Button";
const Login = ({ currentUser }) => {
  return (
    <>
      {currentUser ? (
        <a href="/api/logout">
          <Button title="logout" icon={false}></Button>
        </a>
      ) : (
        <a href="/auth/google">
          <Button title="sign in with google" icon="google"></Button>
        </a>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.fetchCurrentUser,
});
export default connect(mapStateToProps, null)(Login);
