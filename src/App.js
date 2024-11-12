import React, {Component} from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      todos:[],
    };
  }

  addTodo = (todo)=>{
    this.setState((prevState) => ({
      todos:[...prevState.todos,todo],
    }));
  };

  removeTodo=(index)=>{
    this.setState((prevState)=>({
      todos: prevState.todos.filter((_, i)=>i !==index),
    }));
  };

  componentDidMount(){
    console.log("App component has been mounted");
  }

  render(){
    return(
      <div className='="App'>
        <h1>Cosas por hacer!!!</h1>
        <AddTodo addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos}removeTodo={this.removeTodo}/>
      </div>
    );
  }
}

export default App;
