import React from "react";

export  default class State extends React.Component{
   constructor(){
    super()
    this.state={name:'vinod',age:23}
    this.changeName=this.changeName.bind(this)
   }
   changeName(){

    this.setState({name:'annu',age:19})
   }
    render(){
        return(
            <>
            <p>{this.state.name}</p>
            <p>{this.state.age}</p>
            <button onClick={this.changeName}>click here</button>
            </>
        )
    }
}