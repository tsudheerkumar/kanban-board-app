import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store();
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
              id: 1,
              tasks: [
                {
                  id: 1,
                  name:"task1"
                },{
                  id: 2,
                  name:"task2"
                },{
                  id: 3,
                  name:"task3"
                },{
                  id: 4,
                  name:"task4"
                },{
                  id: 5,
                  name:"task5"
                },{
                  id: 6,
                  name:"task6"
                }
              ]
            }
          ]
        }
      ]
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleOpen = () => {
    this.setState({open: true});
  };
  handleClose = () => {
      this.setState({open: false});
  };
  handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };
  addBoard = (args) => {
      this.handleOpen();
  }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleClose}
      />,
    ];
    return (
      <div className="App">
        <Dialog
          title="Add Board"
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          >
            <TextField
              id="boardName"
              label="baordName"
              className="TextFields-textField-389"
              onChange={this.handleChange('name')}
              margin="normal"
              fullWidth
            />
          </Dialog>
        <AppBar
          title="KANBAN DASHBOARD"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          // onLeftIconButtonClick={this.handleToggle}
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
            id={board.id}
          />
          ))
        }
        <div>
          <FloatingActionButton mini={true} style={ { marginRight: '20px',position:'absolute',bottom:'50px',right:'20px'} } onClick={this.addBoard}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

export default App;
