import React from "react";
import { Redirect } from "react-router-dom";
import Log from "./Log";
export default function Content() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  if (isLoggedIn === null) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Log />
    </>
  );
}
