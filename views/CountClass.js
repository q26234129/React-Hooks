import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  setCount = (count) => {
    this.setState({
      count: count + 1
    });
  };

  render() {
    return (
      <>
        <h3>Demo01-Class-计数器</h3>
        <p>count：{this.state.count}</p>
        <button onClick={() => this.setCount(this.state.count)}>Add</button>
      </>
    );
  }
}

export default Counter;
