import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Dashboard';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  state = {
    boards: [
      {
        name: 'Practice squat',
        id: 1,
        lists: [
          {
            name: "TaskList1",
            tasks: [
              {
                name:"task1"
              },{
                name:"task2"
              },{
                name:"task3"
              }
            ]
        }
        ]
      },
      {
        name: 'Bake squash',
        id: 2,
        lists: [
          {
            name: "TaskList1",
            tasks: [
              {
                name:"task1"
              },{
                name:"task2"
              },{
                name:"task3"
              }
            ]
        }
        ]
      }
    ],
};
  render() {
    return (
      <div className="App">
        <AppBar
          title="KANBAN DASHBOARD"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        {
          this.state.boards.map((board) => (
          <Board
            lists={board.lists}
            name={board.name}
          />
          ))
        }
      </div>
    );
  }
}

export default App;
