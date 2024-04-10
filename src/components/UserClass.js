import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props.name + "Child constructor");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {

    console.log(this.props.name + "Child componentDidMount");

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);

  }

  componentDidUpdate() {
    console.log("Component Did Update")
  }

  componentWillUnmount() {
    console.log("component is unmounted")
  }

  render() {
    const { name, location } = this.state.userInfo;
    console.log(this.props.name + "Child render");
    return (
      <div>
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;