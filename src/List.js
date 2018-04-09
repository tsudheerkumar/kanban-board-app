import React from 'react';
import Task from './Task';

class List extends React.Component {
    render() {
        debugger
        const tasks = this.props.tasks.map((task) => (
            <Task
             name= {task.name}
            />
        ));
        return (
            <div className='Tasks'>
                <h3>{this.props.name}</h3>
                {tasks}
            </div>
        );
    }
}
export default List;