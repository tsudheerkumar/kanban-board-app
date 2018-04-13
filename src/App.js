import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      boards: [
        {
          name: 'Board1',
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
                },{
                  name:"task4"
                },{
                  name:"task5"
                },{
                  name:"task6"
                }
              ]
            },
            {
              name: "TaskList2",
              tasks: [
                {
                  name:"task1"
                },{
                  name:"task2"
                },{
                  name:"task3"
                }
              ]
            },
            {
              name: "TaskList3",
              tasks: [
                {
                  name:"task1"
                },{
                  name:"task2"
                },{
                  name:"task3"
                }
              ]
            },
            {
              name: "TaskList3",
              tasks: [
                {
                  name:"task1"
                },{
                  name:"task2"
                },{
                  name:"task3"
                }
              ]
            },
            {
              name: "TaskList3",
              tasks: [
                {
                  name:"task1"
                },{
                  name:"task2"
                },{
                  name:"task3"
                }
              ]
            },
            {
              name: "TaskList3",
              tasks: [
                {
                  name:"task1"
                },{
                  name:"task2"
                },{
                  name:"task3"
                }
              ]
            },
            {
              name: "TaskList3",
              tasks: [
                {
                  name:"task1"
                },{
                  name:"task2"
                },{
                  name:"task3"
                }
              ]
            },
            {
              name: "TaskList3",
              tasks: [
                {
                  name:"task1"
                },{
                  name:"task2"
                },{
                  name:"task3"
                }
              ]
            },
            {
              name: "TaskList3",
              tasks: [
                {
                  name:"task1"
                },{
                  name:"task2"
                },{
                  name:"task3"
                }
              ]
            },
            {
              name: "TaskList3",
              tasks: [
                {
                  name:"task1"
                },{
                  name:"task2"
                },{
                  name:"task3"
                }
              ]
            },
            {
              name: "TaskList3",
              tasks: [
                {
                  name:"task1"
                },{
                  name:"task2"
                },{
                  name:"task3"
                },{
                  name:"task4"
                },{
                  name:"task5"
                },{
                  name:"task6"
                }
              ]
            },
            {
              name: "TaskList3",
              tasks: [
                {
                  name:"task1"
                },{
                  name:"task2"
                },{
                  name:"task3"
                }
              ]
            },
            {
              name: "TaskList3",
              tasks: [
                {
                  name:"task1"
                },{
                  name:"task2"
                },{
                  name:"task3"
                }
              ]
            },
            {
              name: "TaskList3",
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
          name: 'Board2',
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
            },
            {
              name: "TaskList2",
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
  }

  handleToggle = () => this.setState({open: !this.state.open});
  render() {
    return (
      <div className="App">
        <AppBar
          title="KANBAN DASHBOARD"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.handleToggle}
        />
        {/* <Drawer open={this.state.open}>
        <AppBar
          title="BOARDS"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.handleToggle}
        />
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer> */}
        
        {
          this.state.boards.map((board) => (
          <Board
            lists={board.lists}
            name={board.name}
          />
          ))
        }
        <div>
          <FloatingActionButton mini={true} style={ { marginRight: '20px',position:'absolute',bottom:'50px',right:'20px'} }>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

export default App;
