import UserClass from "./UserClass";
import React from "react";
import { Component } from "react";
import UserContext from "../utils.js/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    //console.log("Parent constructor")
  }
  componentDidMount() {
    // console.log("Parent componentDidMount")
  }
  render() {
    //console.log("Parent render")
    return (
      <div>
        <h1> About us page </h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name={"First"} location={"Binghamton"} />
      </div>
    );
  };
}


export default About;