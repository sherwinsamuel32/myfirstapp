import React, { Component } from 'react';
import "./global.css" 

export default class Counterapplication extends Component {
           constructor(){
            super()
            this.state={
                count:0
            }
           }
           handleIncrement=()=>{
          this.setState({count : this.state.count +1})
           }
           handleDecrement=()=>{
            this.setState({count : this.state.count -1})
           }
           handleReset=()=>{  
            this.setState({count : 0})
           }

           render() {
    return (
      <div className='MainDiv'>
        <div>{this.state.count}</div>
         <br></br>
        <button onClick={this.handleIncrement}>+ increment</button>
        <button onClick={this.handleDecrement}>- increment</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}
