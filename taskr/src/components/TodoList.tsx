import React from 'react'
import './styles.css';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';



interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    compleatedTodos: Todo[];
    setcompleatedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
    return (

        <div className='todo-container'>
            {/* dropable zone */}
            <Droppable droppableId='TodosList'> 
                {
                    (provided) => (
                        // active todo section
                        <div className='todos' ref={provided.innerRef} {...provided.droppableProps}>
                            <span className="todos-heading"> Active tasks </span>
                            {todos.map((todo) => (
                            <SingleTodo
                                todo={todo}
                                todos={todos}
                                key={todo.id}
                                setTodos={setTodos}
                             />
                            ))}
                        </div>

                )}
            </Droppable >


    
    < div className = 'todos finished' >
        <span className="todos-heading">
            Completed tasks
        </span>
{
    todos.map((todo) => (
        <SingleTodo
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos} />
    ))
}
            </ >
        </div >
    )
}

export default TodoList