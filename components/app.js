import React, { Component } from "react";
import Button from "./button";
import Display from "./display";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleDecrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div>
        <Button handleClick={this.handleIncrement} title={"Adj hozza tes"} />
        <Display display={this.state.counter} />
        <Button handleClick={this.handleDecrement} title={"Vegyel el belole tesom"} />
      </div>
    );
  }
}
