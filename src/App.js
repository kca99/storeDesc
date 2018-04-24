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

      <div className="container-fluid" id="box">
        <div class="row justify-content-center">
          <h1 className="display-4 "> Kevin Can Actually Code? </h1>
        </div>
        <div class="row justify-content-center h-100">
          <div class="h-100 col-4" id="left">
            <Svgdisplay handlerFromParent={this.handleData}/>
          </div>
          <div class="col-4" id="right">
            <h5>Received by Parent:<br />{this.state.fromChild}</h5>
            This is a test!
          </div>
        </div>
      </div>
    );
  }
}

export default App;
