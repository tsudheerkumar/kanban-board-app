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
    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
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
                    actions={actions}
                    modal={true}
                    open={this.state.listOpen}
                    onRequestClose={this.handleClose}
                    >
                    <TextField
                        id="listName"
                        label="listName"
                        className="TextFields-textField-389"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        fullWidth
                    />
                </Dialog>
                <Dialog
                    title="Add New Task"
                    actions={actions}
                    modal={true}
                    open={this.state.taskOpen}
                    onChange={this.handleChange('name')}
                    onRequestClose={this.handleClose}
                    >
                    <TextField
                        id="name"
                        label="Name"
                        className="TextFields-textField-389"
                        margin="normal"
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