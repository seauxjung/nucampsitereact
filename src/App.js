import React, { Component } from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from 'react-router-dom';
import "./App.css";

class App extends Component {
  //There was a constructor here, but we deleted it because it's now in the MainComponent and therefore not needed.
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

/*so in the div with the Main being called, I just moved all of the visual content, the presentational content, that was 
originally in there, to MainComponent.js We no longer need to import Navbar or Navbar components up top.*/
