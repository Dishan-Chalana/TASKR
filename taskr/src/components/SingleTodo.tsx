import React from 'react'
import { Todo } from '../model'
import {AiFillEdit ,AiFillDelete,} from 'react-icons/ai';
import {MdDoneOutline} from 'react-icons/md';

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
};


const SingleTodo = ({todo,todos,setTodos} : Props) => {
  return (
    <form className='todos-single'>
        <span className='todos-single-text'> {todo.todo} </span>

        <div> 
            <span className='icon'> <AiFillEdit/> </span>
            <span className='icon'><AiFillDelete/></span>
            <span className='icon'> <MdDoneOutline/></span>

        </div>
    </form>
  )
}

export default SingleTodo