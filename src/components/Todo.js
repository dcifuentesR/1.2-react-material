import React from 'react';
import './css/Todo.css';

export class Todo extends React.Component {
    constructor(props){
        super(props);
        
    }

    render(){
        return(
                <tr>
                    <td>{this.props.text}</td>
                    <td>{this.props.priority}</td>
                    <td>{""+this.props.dueDate}</td>
                </tr>
                    
            
        );
    }
}