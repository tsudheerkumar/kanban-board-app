import React from 'react';

class Task extends React.Component {
    render() {
        debugger
        const taskName = this.props.name;
        return (
            <div className='task'>
                {taskName}
            </div>
        );
    }
}
export default Task;