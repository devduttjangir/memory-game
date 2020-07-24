import React, { Component } from "react";

export default class Sample extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  componentDidMount() {
    const { count } = this.state;
    document.title = "Click " + count;
  }

  componentDidUpdate() {
    const { count } = this.state;
    document.title = "Click " + count;
  }

  handleClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    const { count } = this.state;
    return <div onClick={() => this.handleClick()}>Click Here {count}</div>;
  }
}
