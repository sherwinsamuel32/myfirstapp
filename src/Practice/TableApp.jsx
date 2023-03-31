import React, { Component } from 'react'
import JSON from  './task.json'

export default class TableApp extends Component {
    constructor()
    {
        super()
        this.state={
            taskData: JSON
        }
    }
  render() {
    return (
      <>
       <table border={"1px"}>
        <tr>
            <th>empid</th>
            <th>empname</th>
            <th>empcompany</th>
            <th>empskill</th>
        </tr>
        {this.state.taskData.map((x)=>{
            return(
                <tr>
                    <td>{x.empid}</td>
                    <td>{x.empname}</td>
                    <td>{x.empcompany}</td>
                    <td>{x.empskill.map((y)=>
                    { return(
                        <li>{y}</li>
                    )

                    })}</td>
                </tr>
            )
        }
        )
    
        }
        </table> 
      </>
    )
  }
}
