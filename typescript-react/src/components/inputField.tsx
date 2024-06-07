import React from 'react';
import './styles.css';

interface InputProps {
  todo : string, 
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask : (e: React.FormEvent) => void;
}

const InputField : React.FC<InputProps> = ({todo, setTodo, handleAddTask}) => {

  return (
    <form className='input' onSubmit={handleAddTask}>
        <input 
            type="input" 
            placeholder='Enter a task'
            className='input_field'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />
        <button className='input_Submit' type='submit'> Go </button>
    </form>
  )
}

export default InputField
