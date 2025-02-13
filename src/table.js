import React from "react";

function Thead(){
    return( 
    <thead class="table-secondary">
        <tr class="table-secondary">
            <th>Name</th>
            <th>Rollno</th>
        </tr>
    </thead>
    )
}
function Tbody(csd2){
    let tableBody=csd2.csd1.csd.map(element=> {
        return <tr>
            <td>{element.name}</td>
            <td>{element.marks}</td>
        </tr>
    })   
   
    return( 
           <tbody>{tableBody} </tbody>
    )
}
export default class Table extends React.Component{
    render(){

        return(
            <table class="table-secondary">
                <Thead/>
                <Tbody csd1={this.props}/>  
            </table>
        )  
    }
}
