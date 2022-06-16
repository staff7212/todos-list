
import {memo} from 'react'
import Filters from '../filters/Filters'

import './toolbar.scss';

const Toolbar = ({activeTasks, filter, onUpdateFilter, onDeleteCompleted}) => {

  return (
    <div className='toolbar'>
      <div className='left-items'>{activeTasks} items left</div>
      <div className="filters">
        <Filters onUpdateFilter={onUpdateFilter} filter={filter}/>
      </div>
      <div className='clear' onClick={onDeleteCompleted}>Clear Completed</div>
    </div>
  )
};

export default memo(Toolbar);