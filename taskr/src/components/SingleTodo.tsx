import React, { useState ,useRef,useEffect } from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete, } from 'react-icons/ai';
import { MdDoneOutline } from 'react-icons/md';
import "./styles.css"
import TodoList from './TodoList';
import { Draggable } from 'react-beautiful-dnd';



type Props = {
    index:number;
    todo: Todo;
    todos: Todo[];
    
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
};


const SingleTodo = ({index, todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false);  //keep track of text and edit state of todos
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id: number) => { //done function
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ))
    };

    const handleDelete = (id: number) => { //delete function
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (e:React.FormEvent, id:number) => { //edit function
        e.preventDefault();

        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, todo:editTodo } : todo
        ));

        setEdit(false);
    };

    const inputRef = useRef<HTMLInputElement>(null); //automatic focus to edit text box

    useEffect(() => {
      inputRef.current?.focus();
    },[edit]);
    

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            
            {
                (provided) => (
                    <form className='todos-single' 
                    onSubmit={(e)=> handleEdit(e,todo.id)}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    >
                    {edit ? (
                            <input 
                            ref = {inputRef}
                            className='todos-single-text' 
                            value={editTodo} 
                            onChange={(e)=> setEditTodo(e.target.value)}/>
                        ) : todo.isDone ? (
                            <s className='todos-single-text'> {todo.todo} </s>
                        ) : (
                            <span className='todos-single-text'> {todo.todo} </span>
                        )}
                    
        
        
                    <div>
                        <span className='icon'
                            onClick={() => {
                                if (!edit && !todo.isDone) { //only can edit when isDone is false
                                    setEdit(!edit)
                                }
                            }}
                        >
                            <AiFillEdit /> </span>
                        <span className='icon' onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
                        <span className='icon' onClick={() => handleDone(todo.id)}> <MdDoneOutline /></span>
        
                    </div>
                </form>

                )
            }


        </Draggable>
        
    )
}

export default SingleTodo