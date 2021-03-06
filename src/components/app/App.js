
import {useState, useCallback} from 'react';

import Card from '../card/Card';
import TodosAddForm from '../todosAddForm/TodosAddForm';
import TodoList from '../todosList/TodosList';
import Toolbar from '../toolbar/Toolbar';
import './app.scss'

function App() {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('all');
  const [visibleList, setVisibleList] = useState(true);

  const onAddTask = useCallback((id, task) => {
    const newTask = {id, task, completed: false};

    setVisibleList(true);
    setFilter('all');
    setData([...data, newTask]);
  }, [data]);

  const onToggleCompleted = (id) => {
    const updateData = data.map(item => {
      if (item.id !== id) return item;
      return {...item, completed: !item.completed};
    });

    setData(updateData);
  };

  const onUpdateFilter = useCallback((filter) => {
    setVisibleList(true);
    setFilter(filter);
  }, [])

  const onFilter = (items, filter) => {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter(item => !item.completed);
      case 'completed':
          return items.filter(item => item.completed);
      default: 
        return items;
    }
  }
  const visibleData = onFilter(data, filter);

  const hideTodosList = useCallback(() => {
    setVisibleList(!visibleList);
  }, [visibleList]);

  const onDeleteCompleted = useCallback(() => {
    const updateData = data.filter(item => !item.completed);
    
    setData(updateData);
  }, [data]);

  const activeTasks = data.filter(item => !item.completed).length;

  return (
    <div className="app">
      <div className="app-header">
        <h1 className='app-title'>todos</h1>
      </div>
      <Card>
        <TodosAddForm onAdd={onAddTask} hideTodosList={hideTodosList} visibleList={visibleList}/>
        {visibleList ? <TodoList data={visibleData} onToggleCompleted={onToggleCompleted}/> : null}
        <Toolbar onUpdateFilter={onUpdateFilter} filter={filter} onDeleteCompleted={onDeleteCompleted} activeTasks={activeTasks}/>
      </Card>
    </div>
  );
}

export default App;
