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

const TodoList: React.FC<Props> = ({ todos, setTodos,compleatedTodos,setcompleatedTodos }: Props) => {
    return (

        <div className='todo-container'>
            {/* dropable zone */}
            <Droppable droppableId='TodosList'>
                {
                    (provided) => (
                        // active todo section
                        <div className='todos' ref={provided.innerRef} {...provided.droppableProps}>
                            <span className="todos-heading"> Active tasks </span>
                            {todos.map((todo,index) => (
                                <SingleTodo
                                    index={index}
                                    todo={todo}
                                    todos={todos}
                                    key={todo.id}
                                    setTodos={setTodos}
                                />
                            ))}
                            {/* to provide space draggged tasks in compleated zone */}
                            {provided.placeholder}
                        </div>

                    )}
            </Droppable >

            <Droppable droppableId='TodosList-finished'>
                {
                    (provided) => (
                        < div className='todos finished' ref={provided.innerRef} {...provided.droppableProps} >
                            <span className="todos-heading"> Completed tasks </span>
                            {compleatedTodos.map((todo, index) => (
                                <SingleTodo
                                    index={index}
                                    todo={todo}
                                    todos={compleatedTodos}
                                    key={todo.id}
                                    setTodos={setcompleatedTodos} />
                            ))}
                            {provided.placeholder}

                        </div>
                    )}
            </Droppable>

        </div >
    )
}

export default TodoList