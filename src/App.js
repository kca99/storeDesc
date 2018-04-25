import React, { Component } from 'react';
import Svgdisplay from './components/svg';
import Description from './components/desc';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import deadmeme from'./click.png';

var obj = require("./data.json");


console.log(obj);
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

  descRender(data){
    console.log(this.state.fromChild);
    console.log(obj.hasOwnProperty(data));
    if(this.state.fromChild == ""){
      console.log('none clicked');
      return<div>
        <h5>Click on a location to begin.</h5>
        <img src={deadmeme} style={{ width: '100%', height: '100%'}} />
      </div>
    }
    if(obj.hasOwnProperty(data)){

        var yes = obj[data].items;
        console.log(yes);
        var str = yes.join(', ');
        return<div>
          <h5>Location: {this.state.fromChild}</h5>
          <p>Location Name: {obj[data].name}</p>
          <p>Items found here: {str}</p>

        </div>
    }
    else if(this.state.fromChild != ""){
      console.log('something was clicked');
      return<div>
        <h5>Location: {this.state.fromChild}</h5>
      </div>
    }
  }

  render() {
    return (

      <div className="container-fluid" id="box">
        <div className="row justify-content-center">
          <h1 className="display-4 "> Kevin Can Actually Code? </h1>
        </div>
        <div className="row justify-content-center h-100">
          <div className="h-100 col-4" id="left">
            <Svgdisplay handlerFromParent={this.handleData}/>
          </div>
          <div className="col-4" id="right">
            {this.descRender(this.state.fromChild)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
