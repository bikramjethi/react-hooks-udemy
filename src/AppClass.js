import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
    isOn: false
  }

  incrementCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  toggleLight = () => {
    this.setState(prevState => ({ isOn: !prevState.isOn }));
  }

  render() {
    const { isOn, count } = this.state;
    return (
      <>
        <h2>Counter</h2>
        <button onClick={this.incrementCount}>
          I was clicked {count} times
        </button >

        <h2>Toggle Light</h2>
        <img
          src={
            isOn
              ? "https://icon.now.sh/highlight/fd0"
              : "https://icon.now.sh/highlight/aaa"
          }
          style={{
            height: "50px",
            width: "50px"
          }}
          alt="flashLight"
          onClick={this.toggleLight}
        />
      </>
    );
  }
}

export default App;
