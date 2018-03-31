import React, { Component } from 'react';
import Svgdisplay from './components/svg';
import Description from './components/desc';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Alert } from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleData = this.handleData.bind(this);
    this.state = {
      fromChild: ''
    };
  }


handleData(data){
    this.setState({
       fromChild: data
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="display-3"> How to ghetto map layout! </h1>

        <div className="svgDiv">
          <Svgdisplay handlerFromParent={this.handleData}/>
        </div>
        <div className="descDiv">
          <h5>Received by parent:<br />{this.state.fromChild}</h5>
        </div>
      </div>
    );
  }
}

export default App;
