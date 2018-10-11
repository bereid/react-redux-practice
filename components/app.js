import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    // const { counter } = this.state;
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  decrement() {
    // const { counter } = this.state;
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <Button handleClick={this.increment} title="Adj hozza tes" id="adjhozzamar" />
        <Display display={counter} />
        <Button handleClick={this.decrement} title="Vegyel el belole tesom" id="vegyelmarel" />
      </div>
    );
  }
}
