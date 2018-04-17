import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Task extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
            open: false,
            name: this.props.name
        };
      }
    handleOpen = () => {
        this.setState({open: true});
    };
    handleClose = () => {
        this.setState({open: false});
    };
    editTask = (args) => {
        this.handleOpen();
    }
    deleteTask = () => {
        alert('delete');
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
              keyboardFocused={true}
              onClick={this.handleClose}
            />,
          ];
        const taskName = this.props.name;
        return (
            <div className='task'>
                <Dialog
                    title="Edit Task"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    >
                    <TextField
                        id="name"
                        label="Name"
                        className="TextFields-textField-389"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        fullWidth
                        />
                </Dialog>
                <Card style={ { display: 'inline-block', margin: '5px'} }>
                    <CardHeader style={ { float: 'left'} }
                        title={taskName}
                    />
                    <IconMenu
                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    >
                    <MenuItem primaryText="Edit"  onClick={this.editTask}/>
                    <MenuItem primaryText="Delete" onClick={this.deleteTask}/>
                    </IconMenu>
                </Card>
            </div>
        );
    }
}
export default Task;