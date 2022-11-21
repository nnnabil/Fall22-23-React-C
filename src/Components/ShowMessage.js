import React, { Component } from "react";

class ShowMessage extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Welcome to React'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thanks'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Click</button>
            </div>
        )
    }

}

export default ShowMessage;  