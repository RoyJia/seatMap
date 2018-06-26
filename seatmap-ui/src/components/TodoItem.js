import React from 'react';
import UserName from './UserName';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const completedClass = props.completed ? 'todo__item--completed' : '';
  return <div className={`todo__item ${completedClass}`}>
    <p className='todo__title'>{props.title}</p>
    <div className='todo__assignee'>
      <div className = 'todo__ulabel'>Assigned To:</div>
      <UserName {...props.user} />
    </div>
  </div>
    
}

TodoItem.propTypes = {
  completed: PropTypes.bool,
  title: PropTypes.string,
  user: PropTypes.object
}

export default TodoItem;
