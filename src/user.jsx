import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image,Row,Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './nav';
import "./home.css";
class user extends Component {
  render() {
  
    return (
      <div> 
       {console.log(this.props)}
         <Navbar/>
         <Row>
           <Col xs={6} md={3}>
            <Image  src={this.props.location.state.img} className="profile-pic"  /> 
            <h3 className="name">{this.props.location.state.name}</h3> 
            <button className="name">Edit profile</button> 
          </Col>
          <Col xs={5} md={9}>
        <Row>
        <div class="topnav">
          <a href="#Overview" class="text">Overview <span className="badge badge-pill badge-secondary">{5}</span></a>
          <a href="#Repositories">Repositories<span className="badge badge-pill badge-secondary">{5}</span></a>
          <a href="#Projects">Projects<span className="badge badge-pill badge-secondary">{3}</span></a>
          <a href="#Packages" >Packages<span className="badge badge-pill badge-secondary">{3}</span></a>
          <a href="#Star">Star<span className="badge badge-pill badge-secondary">{2}</span></a>
          <a href="#Followers">Followers<span className="badge badge-pill badge-secondary">{this.props.location.state.fllowers}</span></a>
          <a href="#Following">Following<span className="badge badge-pill badge-secondary">{1}</span></a>
        </div> 
         </Row>
         <Row>
           <div className="card top_margin">
            <div className="card-body name">
            <a  href="#" className="card-link"><h4 className="card-title">React</h4></a>
            </div>
         </div> 
         <div className="card top_margin name">
            <div className="card-body">
            <a  href="#" className="card-link"><h4 className="card-title">new project</h4></a>
            </div>
         </div> 
         <div className="card top_margin name">
            <div className="card-body">
            <a  href="#" className="card-link"><h4 className="card-title">new project</h4></a>
            </div>
         </div> 
        </Row>
         </Col>
        </Row>
      </div>
      
    );
  }
}

export default user;
