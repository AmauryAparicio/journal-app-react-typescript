import React, { FormEvent, FunctionComponent } from "react";
import { Link } from "react-router-dom";
import useForm from "./../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { rmError, setError } from "./../../actions/ui";
import { iAppState, iUiState } from "../../misc/Interfaces";
import { startRegister } from "../../actions/auth";

const RegisterScreen: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector<iAppState>(({ ui }) => ui) as iUiState;
  const { isEmail } = validator;
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const { name, email, password, confirm } = formValues;
  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegister(email, password, name));
    }
  };
  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== confirm || password.length < 5) {
      dispatch(setError("Please verify your password"));
      return false;
    }
    dispatch(rmError());
    return true;
  };
  return (
    <div className="auth__box-container animate__animated animate__bounceIn">
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="confirm"
          className="auth__input"
          autoComplete="off"
          value={confirm}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Login
        </button>
        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </div>
  );
};

export default RegisterScreen;
