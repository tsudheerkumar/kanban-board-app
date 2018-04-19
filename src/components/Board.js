import React from 'react';
import List from './List';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import store from '../store';
import { addList } from '../actions/index';
class Board extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.test = "2131";
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
    handleSubmit = () => {
        this.setState({open: false});
        console.log('boardId',this.props.boardId);
        console.log('boardname',this.state.name);
        store.dispatch(addList({
            boardId:this.props.boardId,
            name: this.state.name
        }));
    
    };
    handleChange = (event) => {
        this.setState({
          name: event.target.value,
        });
    }
    addList = (args) => {
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
              onClick={this.handleSubmit}
            />,
          ];
          let lists;
        if (this.props.lists) {
            lists = this.props.lists.map((list) => (
            <List 
             name= {list.name}
             tasks={list.tasks}
             listId={list._id}
             boardId={this.props.boardId}
            />
        )) } else {
            lists = [];
        };
        return (
            <div className='board'>
                <h1>{this.props.name}</h1>
                <Dialog
                    title="Add List"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    >
                    <TextField
                        id="name"
                        label="Name"
                        className="TextFields-textField-389"
                        onChange={this.handleChange}
                        margin="normal"
                        fullWidth
                        />
                </Dialog>
                <div className='listsContainer' style={ { height: '350px', overflow:'auto', whiteSpace:'nowrap'} }>
                    {lists}
                    <div className='list' style={ { display: 'inline-block', marginTop: '150px',verticalAlign:'top'} }>
                        <Card style={ { display: 'inline-block', margin: '5px'} }>
                            <FlatButton label="Add List" primary={true} onClick={this.addList}/>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}
export default Board;