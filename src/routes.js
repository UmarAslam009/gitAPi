/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import ReactDOM from 'react-dom';
import Switch from 'react-router-dom/Switch'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Login from "./login";
import User from "./user";
function AppRouter() {
  return (
    <Router>
        <Route path = "/" exact component = {Login}/>
        <Route path = "/user" exact component = {User} />
   </Router>
  );
}
export default AppRouter;
