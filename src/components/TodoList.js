import React from 'react';
import {Todo} from "./Todo";
import { AddTodo } from './AddTodo';


export class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state={todoList:this.props.todoList};
        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleAddTask(newItem){
        this.setState({todoList:this.state.todoList.concat(newItem)});
    }

    render(){
        const list = this.state.todoList.map((todo,i)=>
        <Todo key={i}
            text={todo.text}
            priority={todo.priority}
            dueDate={todo.dueDate}/>
             
              
        );

        return(
                <table>
                <thead>
                    <th>Name</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                </thead>
                <tbody>   
                    {list}
                    
                    <AddTodo addTask={this.handleAddTask}/>
                </tbody>
            </table>

        );
    }
}