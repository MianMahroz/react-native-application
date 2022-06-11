import React from 'react';
import {connect} from 'react-redux';
import LoginComponent from '../components/LoginComponent';
import {AuthenticateUser} from '../actions/LoginAction';

const mapDispatchToProps = dispatch => {
  return {
    loginSubmit: formData => dispatch(AuthenticateUser(formData)),
  };
};

const mapStateToProps = state => {
  //   console.log('state change called', state);
  return {
    isLoggedIn: state.LoginReducer.isLoggedIn,
    user: state.LoginReducer.user,
  };
};
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);

export default LoginContainer;
