import { Component } from "react";

class Update extends Component{
    constructor()
    {
        super()
        this.state={username: "SAM"}
    }
    handleChange=()=>{
        this.setState({username: "Priya"})
    }
    render(){
        return(
            <div>
                <h1>{this.state.username}</h1>
                <button onClick={this.handleChange}>change button</button>
            </div>
        )
    }
}
export default Update