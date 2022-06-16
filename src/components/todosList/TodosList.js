
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

  return (
    <ul>
      {elements}
    </ul>
  );
};

export default TodosList;