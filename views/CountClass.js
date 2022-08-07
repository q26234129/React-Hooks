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
        <h3>Demo01 - 计数器</h3>
        <span style={{ color: "#666" }}>useState 应用</span>
        {/* 一个曾经踩过的内联样式的坑
        除了外部那个表示Javascript语句的花括号外，里面必须再写一个花括号{}包含的对象，
        外部的{ }表示这是Javascript句法，里面的{  }是一个对象 
        */}
        <p>{this.state.count}</p>
        <button onClick={() => this.setCount(this.state.count)}>Add</button>
      </>
    );
  }
}

export default Counter;
