import React, {Component} from "react";

class AddTodo extends Component{
    constructor(props){
        super(props);
        this.state={task:''};
    }

    handleChange=(e)=>{
        this.setState({task:e.target.value});
    };

    handleSubmit = (e) =>{
        e.preventDefault();
        if (this.state.task.trim()){
            this.props.addTodo(this.state.task);
            this.setState({task:''});
        }
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Agrega nueva tarea"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button type="submit">Agregar</button>
            </form>
        );
    }
}

export default AddTodo;