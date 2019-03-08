import React, {Fragment} from 'react';
import TaskListEntry from './tasklistentry.js';

const TaskList = (props) => {
  return (
    <Fragment>
    {
      props.tasks.map((task) => 
        <TaskListEntry handleClick={props.handleClick} task={task}/>
      )
    }
    </Fragment>
  )
}
export default TaskList;