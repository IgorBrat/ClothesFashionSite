import React from "react";
import {Route, Navigate} from "react-router-dom";
import SignIn from "../SignIn/SignIn.js";

const ProtectedRoute = ({props}) => {
  let Component = props.component;

  if (props.isAuthenticated) {
    return (<Route exact path={props.path} element={<Component />}/>);
  } else {
    return (<Route exact path="/login" element={<SignIn/>} />);
  }
}

export default ProtectedRoute;
