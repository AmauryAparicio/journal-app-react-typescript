import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const RegisterScreen: FunctionComponent = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="confirm"
          className="auth__input"
          autoComplete="off"
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Login
        </button>
        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
