import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(event) {
    const { counter } = this.state;
    if (event.target.id === 'adjhozzamar') {
      this.setState({ counter: counter + 1 });
    } else if (event.target.id === 'vegyelmarel') {
      if (counter > 0) {
        this.setState({ counter: counter - 1 });
      }
    }
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <Button handleClick={this.buttonClick} title="Adj hozza tes" />
        <Display display={counter} />
        <Button handleClick={this.buttonClick} title="Vegyel el belole tesom" />
      </div>
    );
  }
}
