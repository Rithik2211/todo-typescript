import React, { useState } from 'react';
import './App.css';
import InputField from './components/inputField';
import {Todo} from './model';

const App: React.FC = () =>  {

  const [todo, setTodo] = useState<string>('');
  const [todoData, setToDoData] = useState<Todo[]>([]);

  const handleAddTask = (e : React.FormEvent) : void => {
    e.preventDefault();
    if(todo){
      setToDoData([...todoData, {
        id: Date.now(),
        todo,
        isDone : false
      }])
      setTodo('');
    }
    console.log(todoData);
  }

  return (
    <div className='App'>
      <span className='heading'>
        Taskify
      </span>  
      <InputField todo={todo} setTodo={setTodo} handleAddTask={handleAddTask}/>
    </div>
  )
}

export default App;
