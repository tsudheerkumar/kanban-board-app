import React from 'react';
import Task from './Task';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import store from '../store';
import { addTask } from '../actions/index';

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
            open: false,
            taskOpen: false,
            name: this.props.name
        };
      }
    handleOpen = () => {
        this.setState({listOpen: true});
    };
    handleClose = () => {
        this.setState({listOpen: false,taskOpen: false});
    };
    editList = () => {
        this.handleOpen();
    }
    deleteList = () => {
        alert('delete');
    }
    addTaskList = () => {
        this.setState({taskOpen: true});
    }
    handleTaskChange = (event) => {
        this.setState({
          taskName: event.target.value,
        });
      };
      handleTaskSubmit = () => {
        this.setState({taskOpen: false});
        store.dispatch(addTask({
            boardId:this.props.boardId,
            listId:this.props.listId,
            name: this.state.taskName
        }));
    
    };
    render() {
        const actionsTask = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              onClick={this.handleTaskSubmit}
            />,
          ];
        const actionsList = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              onClick={this.handleListSubmit}
            />,
          ];
        const tasks = this.props.tasks.map((task) => (
            <Task
             name= {task.name}
             id={task._id}
            />
        ));
        return (
            <div className='list' style={ { display: 'inline-block'} }>
                <Dialog
                    title="Edit List"
                    actions={actionsList}
                    modal={true}
                    open={this.state.listOpen}
                    onRequestClose={this.handleClose}
                    ref="dialog"
                    >
                    <TextField
                        id="listName"
                        label="listName"
                        className="TextFields-textField-389"
                        value={this.state.name}
                        onChange={this.handleListChange}
                        margin="normal"
                        fullWidth
                    />
                </Dialog>
                <Dialog
                    title="Add New Task"
                    actions={actionsTask}
                    modal={true}
                    open={this.state.taskOpen}
                    onChange={this.handleChange}
                    onRequestClose={this.handleClose}
                    ref="dialog2"
                    >
                    <TextField
                        id="name"
                        label="Name"
                        className="TextFields-textField-389"
                        margin="normal"
                        onChange={this.handleTaskChange}
                        fullWidth
                        />
                </Dialog>
                <Card style={ { display: 'inline-block', padding: '15px',margin: '15px' } }>
                    <CardHeader
                        style={ { float: 'left'} }
                        title={this.props.name}
                    />
                    <IconMenu
                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    >
                        <MenuItem primaryText="Edit List"  onClick={this.editList}/>
                        <MenuItem primaryText="Delete List" onClick={this.deleteList}/>
                    </IconMenu>
                    <CardText>
                    <div className='list' style={ { height: '180px',overflowX: 'scroll'}}>
                        {tasks}
                    </div>
                    </CardText>
                    <FlatButton label="Add Task" primary={true} onClick={this.addTaskList}/>
                </Card>
            </div>
        );
    }
}
export default List;