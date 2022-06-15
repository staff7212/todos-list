import {memo} from 'react';

import './filters.scss';

const Filters = ({filter, onUpdateFilter}) => {

  const buttonsData = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'completed', label: 'Completed'},
  ];

  const buttons = buttonsData.map(({name, label}) => {
    const active = filter === name;
    const clazz = active ? 'active' : '';
    return (
      <button 
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => onUpdateFilter(name)}>
          {label}
      </button>
    )
  });

  console.log('filter');
  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
};

export default memo(Filters);