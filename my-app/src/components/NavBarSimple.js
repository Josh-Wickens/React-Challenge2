import React, { Component } from 'react'
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
         message: "Hello, Guest!",
         buttonText: "Log in"
      }
    }

    handleClick() {
        this.setState((prevState) => {
            return {
                message:
                prevState.message === "Hello, Guest!" ? "Welcome back User!" : "Hello, Guest!",
                buttonText:
                prevState.buttonText === "Log out" ? "Log in" : "Log out",

            };
        });
    }
  render() {
    return (
      <div className= {css.NavBar}>
        <h1>My Gallery</h1>
        <div>
            <span> {this.state.message}</span>
            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
        </div>
      </div>
    )
  }
}

export default NavBarSimple