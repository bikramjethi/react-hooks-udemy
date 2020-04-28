import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
    isOn: false,
    x: null,
    y: null
  }

  incrementCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  toggleLight = () => {
    this.setState(prevState => ({ isOn: !prevState.isOn }));
  }

  componentDidMount() {
    document.title = `You have been clicked ${this.state.count} times`;
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentDidUpdate() {
    document.title = `You have been clicked ${this.state.count} times`;
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = event => {
    this.setState({
      x: event.pageX,
      y: event.pageY
    })
  }

  render() {
    const { isOn, count, x, y } = this.state;
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

        <h2>Mouse position</h2>
        <p>x position: {x} y position:{y}</p>
      </>
    );
  }
}

export default App;
