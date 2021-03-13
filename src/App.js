import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      global: {},
      countries: []
    };
  }

  controller = new AbortController();

  componentDidMount() {
    fetch("https://api.covid19api.com/summary", { signal: this.controller.signal })
      .then((response) => response.json())
      .then((summary) => this.setState({ global: summary.Global, countries: summary.Countries }))
      .catch(err => window.alert("oops! Server not Working. Try again or Come later🙂"))
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  render() {
    const { countries } = this.state;

    return (
      <div className="App">
        <h1>COVID-19 CORONAVIRUS PANDEMIC</h1>
        <CardList countries={countries} />
      </div>
    );
  }
}

export default App;
