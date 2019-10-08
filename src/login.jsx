import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "./logo.png";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";
import { Router, Link, browserHistory, IndexRoute } from "react-router";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      user:{}
    };
  }

  getuser = () => {
    const name = this.state.email;
    fetch(`http://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState(
          {
            user: {
              name: data.name,
              location: data.location,
              img: data.avatar_url,
              login: data.login,
              fllowers: data.followers,
              public_rep: data.public_repos
            }
          }//,
       //   () => {
         //   this.props.history.push({
         //     pathname: "/user",
         //     state: {
         //       userObj: this.state.user
         //     }
         //   });
       // }
        );
        this.props.history.push("/user",this.state.user)
      });
  };
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="Login ">
        <img class="center" src={Logo} style={{ height: 50 }} />
        <p className="text-center">Sign in to GitHub</p>
        <form onSubmit={this.handleSubmit} className="m-12">
          <FormGroup controlId="email" bsSize="small">
            Username or email address
            <FormControl
              autoFocus
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="small">
            Password{" "}
            <a href="/users/123" class="active" class="float-right">
              Forgot password?
            </a>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

          <Button Link
            className=" btn btn-success"
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick={this.getuser}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
