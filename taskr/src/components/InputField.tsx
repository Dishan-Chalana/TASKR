import React, { useRef } from 'react'
import "./styles.css"

interface Props { //todo interface
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur();
      }}>

    
        <input type="input"
        ref={inputRef}
        value = {todo}
        onChange={
            (e) =>setTodo(e.target.value)
        }
        
        placeholder='Enter new task' className='input-box'></input>
        <button className='input-btn' type='submit'> Add</button>
    </form>
  )
}

export default InputField