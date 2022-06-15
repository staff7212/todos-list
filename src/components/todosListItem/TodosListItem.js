
import './todosListItem.scss';

const TodosListItem = ({task, completed, onToggleCompleted}) => {

  let clazz = completed ? 'completed' : null;

  console.log('item');
  return (
    <li className={`todos-list-item ${clazz}`} onClick={onToggleCompleted}>
      <div className='checkbox-wrapper'>
        <div className='checkbox-box'></div>
        <div className='mark'></div>
      </div>
      <span className='task'>{task}</span>
    </li>
  )
};

export default TodosListItem;