import css from "./ErrorMessage.module.css";
import React from "react";

const ErrorMessage = () => {
  return <p className={css.text}>There was an error, please try again...</p>;
};

export default ErrorMessage;
