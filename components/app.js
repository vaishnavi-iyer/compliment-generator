import React, { Component } from 'react'

class ComplimentMachine extends Component{

  constructor(props){
    super(props)
    this.state = {
      name:'',
      random: Math.floor(Math.random()*10)
    };
  }

  handleChange (e) {
    this.setState({
      name: e.target.value,
      random: Math.floor(Math.random()*10)
    })
  };

  render () {
    return(
      <div>
        <h1> Whats your name? </h1>
        <input type="text" onBlur={this.handleChange.bind(this)} />
        <p>{this.props.compliment[this.state.random]}, {this.state.name} </p>
      </div>
    )
  };
}
export default ComplimentMachine;
