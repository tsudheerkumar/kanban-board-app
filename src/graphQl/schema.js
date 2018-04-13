const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
const Board = require('../db/schema')

let schema = buildSchema(`
  input AddListInput {
    boardId: String
    listName: String
  }
  input AddTaskInput {
    boardId: String,
    taskId: String,
    taskName: String
  }
  type Query {
    getBoards: [Board]
  }
  type Mutation {
    addBoard(name: String): Board,
    addList(input: AddListInput): Board,
    addTask(name: String): Task,
    updateList(name: String): List,
    updateTask(name: String): Task,
    deleteList(name: String): List,
    deleteTask(name: String): Task
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
          _id:input.boardId},
          {$push: {"lists": {name: input.listName}}
        },(err, board) => {
        if(err) reject(err);
        resolve(board);
      });
    });
  },
  addTask: () => {
    return { name: 'Task1' };
  },
  updateList: () => {
    return { name: 'List1' };
  },
  updateTask: () => {
    return { name: 'Task1' };
  },
  deleteList: () => {
    return { name: 'List1' };
  },
  deleteTask: () => {
    return { name: 'Task1' };
  }
};

var schema_gql = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true 
});

module.exports = schema_gql;