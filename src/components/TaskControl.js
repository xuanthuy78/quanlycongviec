import React, { Component } from 'react'
import TaskSortControl from './TaskSortControl';
import TaskSearchControl from './TaskSearchControl';

class TaskControl extends Component {
    render() {
        return (
            <div className="row mt-15">
                <TaskSearchControl />
                <TaskSortControl />
            </div>
        ) 
    }
}

export default TaskControl;