import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "iqbal",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ name: "John" });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.name}</p>
          <button onClick={this.handleClick}>Click me to change name</button>
        </header>
      </div>
    );
  }
}

export default App;
