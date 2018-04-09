import React from 'react';
import List from './List';

class Board extends React.Component {
    render() {
        debugger
        const lists = this.props.lists.map((list) => (
            <List 
             name= {list.name}
             tasks={list.tasks}
            />
        ));
        return (
            <div className='dashBaords'>
                <h1>{this.props.name}</h1>
                {lists}
            </div>
        );
    }
}
export default Board;