import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loding";
import "./styles.css";

class App extends React.Component {
  state = {
    lat: null,
    errorMessage: ""
  };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <h1> Error: {this.state.errorMessage}</h1>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Loading message="Please accept location request" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}
export default App;
