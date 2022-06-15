
import TodosListItem from '../todosListItem/TodosListItem'

import './todosList.scss'

const TodosList = ({data, onToggleCompleted}) => {

  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      <TodosListItem 
        key={id} 
        onToggleCompleted={() => onToggleCompleted(id)}
        {...itemProps}/>
    )
  })

  console.log('list');
  return (
    <ul>
      {elements}
    </ul>
  );
};

export default TodosList;