import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    return (
      <div>
        <SeasonDisplay />
        <h1>Latitude: {this.state.lat} </h1>{" "}
        <h1>error: {this.state.errorMessage}</h1>
      </div>
    );
  }
}
export default App;
