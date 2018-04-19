const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
const Board = require('../db/schema')

let schema = buildSchema(`
  input AddListInput {
    boardId: String
    listName: String
  }
  input DeleteListInput {
    boardId: String
    listId: String
  }
  input AddTaskInput {
    boardId: String,
    listId: String,
    taskName: String
  }
  input DeleteTaskInput {
    boardId: String,
    listId: String,
    taskId: String
  }
  input UpdateListInput {
    boardId: String,
    listId: String,
    listName: String
  }
  input UpdateTaskInput {
    boardId: String,
    listId: String,
    taskId:String
    taskName: String
  }

  type Query {
    getBoards: [Board]
  }
  
  type Mutation {
    addBoard(name: String): Board,
    deleteBoard(id: String): Board,
    addList(input: AddListInput): List,
    addTask(input: AddTaskInput): List,
    updateList(input: UpdateListInput): List,
    updateTask(input: UpdateTaskInput): List,
    deleteList(input: DeleteListInput): List,
    deleteTask(input: DeleteTaskInput): Task
  }
  type Board {
    _id: String,
    name: String,
    lists:[List]
  }
  type List {
    _id: String,
    name: String,
    tasks: [Task]
  }
  type Task {
    _id: String,
    name: String
  }
`);

let root = {
  getBoards: () => {
    return new Promise ((resolve, reject) => {
      Board.find((err, boards)=> {
        if(err) reject(err);
        resolve(boards);
      });
    });
  },
  addBoard: ({ name }) => {
    var boardModel = new Board({ name });
    return new Promise((resolve, reject) => {
      boardModel.save((err, board) => {
        if(err) reject(err);
        resolve(board);
      });
    });
  },
  addList: ({input}) => {
    return new Promise((resolve, reject) => {
      Board.findOneAndUpdate(
        {
          _id:input.boardId
        },
        {$push: {"lists": {name: input.listName}}},
        { new: true }
        ,(err, board) => {
        if(err) reject(err);
        resolve(board.lists.filter( list => list.name === input.listName )[0]);
      });
    });
  },
  addTask: ({input}) => {
    return new Promise((resolve, reject) => {
      Board.findOneAndUpdate(
        {
          "_id":input.boardId,
          "lists._id":input.listId
        },
        {$push: {'lists.$.tasks': {name: input.taskName}}},
        { new: true }
        ,(err, board) => {
        if(err) reject(err);
        let currentList = board.lists.filter( list => list.id === input.listId )[0];
        resolve(currentList.tasks.filter(task => task.name === input.taskName)[0]);
      });
    });
  },
  updateList: ({input}) => {
    return new Promise((resolve, reject) => {
      Board.findOneAndUpdate(
        {
          "_id":input.boardId,
          "lists._id":input.listId
        },
        {$set: {'lists.$.name': input.listName}},
        { new: true }
        ,(err, board) => {
        if(err) reject(err);
        resolve(board.lists.filter( list => list.id === input.listId )[0]);
      });
    });
  },
  updateTask: ({input}) => {
    return new Promise((resolve, reject) => {
      Board.findOneAndUpdate(
        {
          "_id":input.boardId,
          "lists._id":input.listId,
          "tasks._id":input.taskId
        },
        {$set: {'tasks.$.name': input.taskName}},
        { new: true }
        ,(err, board) => {
        if(err) reject(err);
        resolve(board.lists.filter( list => list.id === input.listId )[0]);
      });
    });
  },
  deleteBoard: ({ id }) => {
    return new Promise((resolve, reject) => {
      Board.findOneAndRemove(
        {
          "_id":input.id
        }
        ,(err, board) => {
        if(err) reject(err);
        resolve(board);
      });
    });
  },
  deleteList: ({input}) => {
    return new Promise((resolve, reject) => {
      Board.findOneAndRemove(
        {
          "_id":input.boardId,
          "lists._id":input.listId,
        }
        ,(err, board) => {
        if(err) reject(err);
        resolve(board.lists);
      });
    });
  },
  deleteTask: ({input}) => {
    return new Promise((resolve, reject) => {
      Board.findOneAndRemove(
        {
          "_id":input.boardId,
          "lists._id":input.listId,
          "tasks._id":input.taskId
        }
        ,(err, board) => {
        if(err) reject(err);
        resolve(board.lists.filter( list => list.id === input.listId )[0]);
      });
    });
  }
};

var schema_gql = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true 
});

module.exports = schema_gql;