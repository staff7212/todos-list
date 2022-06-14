
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

import './todosAddForm.scss';

const TodosAddForm = ({onAdd, hideTodosList, visibleList}) => {

  const [task, setTask] = useState('');

  const onTaskChange = (e) => {
    setTask(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (task.trim().length <= 0) return;

    const id = uuidv4()
    onAdd(id,task);
    setTask('');
  }

  return (
    <div className='app-add-form'>
      <div className='wrap' onClick={hideTodosList}>
        <div className={`arrow ${visibleList ? '' : 'active'}`}></div>
      </div>
      <form className='add-form' onSubmit={onSubmit}>
        <input 
          type='text' 
          placeholder='What needs to be done?'
          value={task}
          onChange={onTaskChange}/>
      </form>
    </div>
  )
};

export default TodosAddForm;