import React, { useRef, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'





const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const [compleatedTodos, setcompleatedTodos] = useState<Todo[]>([])  //compleated todo state

  const handleAdd = (e: React.FormEvent) => { //create todo
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo(""); //empty text field after enter new todo
    }
  };

  console.log(todos);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return; //if desitination is null do nothing

    if ( //if destination and source is same do nothing
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    let add,
      active = todos,
      complete = compleatedTodos;

    //remove from source
    if (source.droppableId === 'TodoList') {
      add = active[source.index];
      active.splice(source.index, 1); //if came from TodoList remove from Todolist
    } else {
      add = complete[source.index]; //if came from Compleated remove from compleated
      complete.splice(source.index, 1);
    }



    setcompleatedTodos(complete);
    setTodos(active);

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className='heading'> Taskr</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos}
          compleatedTodos={compleatedTodos}
          setcompleatedTodos={setcompleatedTodos}
        />

      </div>

    </DragDropContext>

  );
}

export default App;
