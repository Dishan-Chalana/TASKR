import React from 'react'
import "./styles.css"

interface Props {
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({todo, setTodo}) => {
  return (
    <form className='input'>
    
        <input type="input"
        valye = {todo}
        onChange={
            (e) =>setTodo(e.target.value)
        }
        
        placeholder='Enter new task' className='input-box'></input>
        <button className='input-btn' type='submit'> Add</button>
    </form>
  )
}

export default InputField