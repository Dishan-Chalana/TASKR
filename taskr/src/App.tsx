import React, {useRef, useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';





const App:React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) =>{ //create todo
    e.preventDefault();

    if(todo) {
      setTodos([...todos, {id:Date.now(),todo,isDone:false}]);
      setTodo(""); //empty text field after enter new todo
    }
  };

  console.log(todos);
  

  return (
    <div className="App">
      <span className='heading'> Taskr</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>

      
    </div>
  );
}

export default App;
