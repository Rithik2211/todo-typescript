import React, { useState } from 'react';
import './styles.css';

const InputField : React.FC = () => {
    const [task, setTask] = useState<string>('');

    const handleOnSubmit = (e : React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault();
        console.log(task);
        setTask('');
    }
  return (
    <form className='input' onSubmit={handleOnSubmit}>
        <input 
            type="input" 
            placeholder='Enter a task'
            className='input_field'
            value={task}
            onChange={(e) => setTask(e.target.value)}
        />
        <button className='input_Submit' type='submit'> Go </button>
    </form>
  )
}

export default InputField
