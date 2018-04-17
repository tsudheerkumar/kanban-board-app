import request from 'graphql-request';

const queryUrl = 'http://localhost:8000/graphql';

const addTask = (inputData) => {
    const query = `mutation{
        addTask (input: {
          boardId:${inputData.boardId},
          listId: ${inputData.listId},
          taskName: ${inputData.taskName}}){
          name,
          _id
          tasks {
            _id
            name
          }
        }
      }`

    request(queryUrl, query).then((data) => {
        return {
            type: 'add_task',
            item: {
                name: data.name,
                _id: data._id
            }
        }
    });
}
const deleteTask = (item) => {
    const query = `mutation{
        deleteTask (input: {
          boardId:${inputData.boardId},
          listId: ${inputData.listId},
          taskId: ${inputData.taskId}}){
          name,
          _id
          tasks {
            _id
            name
          }
        }
      }`

    request(queryUrl, query).then((data) => {
        return {
            type: 'delete_task',
            item: {
                name: data.name,
                _id: data._id
            }
        }
    });
}
const updateTask = (item) => {
    const query = `mutation{
        updateTask (input: {
          boardId:${inputData.boardId},
          listId: ${inputData.listId},
          taskId: ${inputData.taskId},
          taskName: ${inputData.taskName}}){
          name,
          _id
          tasks {
            _id
            name
          }
        }
      }`

    request(queryUrl, query).then((data) => {
        return {
            type: 'update_task',
            item: {
                name: data.name,
                _id: data._id
            }
        }
    });
}
const addList = (item) => {
    const query = `mutation{
        addList (input: {
          boardId:${inputData.boardId},
          listName: ${inputData.listName}}){
          name,
          _id
          tasks {
            _id
            name
          }
        }
      }`

    request(queryUrl, query).then((data) => {
        return {
            type: 'add_list',
            item: {
                name: data.name,
                _id: data._id
            }
        }
    });
}
const updateList = (item) => {
    const query = `mutation{
        updateList (input: {
          boardId:${inputData.boardId},
          listId: ${inputData.listId},
          listName: ${inputData.listName}}){
          name,
          _id
          tasks {
            _id
            name
          }
        }
      }`

    request(queryUrl, query).then((data) => {
        return {
            type: 'update_list',
            item: {
                name: data.name,
                _id: data._id
            }
        }
    });
}
const deleteList = (item) => {
    const query = `mutation{
        deleteList (input: {
          boardId:${inputData.boardId},
          listId: ${inputData.listId}}){
          name,
          _id
          tasks {
            _id
            name
          }
        }
      }`

    request(queryUrl, query).then((data) => {
        return {
            type: 'delete_list',
            item: {
                name: data.name,
                _id: data._id
            }
        }
    });
}
const addBoard = (name) => {
    const query = `mutation{
        addBoard (input: {
          boardName:${inputData.boardName}}){
          name,
          _id
          tasks {
            _id
            name
          }
        }
      }`

    request(queryUrl, query).then((data) => {
        return {
            type: 'add_board',
            item: {
                name: data.name,
                _id: data._id
            }
        }
    });
}
const updateBoard = (item) => {
    const query = `mutation{
        updateBoard (input: {
          boardId:${inputData.boardId},
          boardName: ${inputData.boardName}}){
          name,
          _id
          tasks {
            _id
            name
          }
        }
      }`

    request(queryUrl, query).then((data) => {
        return {
            type: 'add_board',
            item: {
                name: data.name,
                _id: data._id
            }
        }
    });
}
const deleteBoard = (item) => {
    const query = `mutation{
        deleteBoard (input: {
          boardId:${inputData.boardId}}){
          name,
          _id
          tasks {
            _id
            name
          }
        }
      }`

    request(queryUrl, query).then((data) => {
        return {
            type: 'delete_board',
            item: {
                name: data.name,
                _id: data._id
            }
        }
    });
}

export default {
    addTask,
    deleteTask,
    updateTask,
    addList,
    updateList,
    deleteList,
    addBoard,
    updateBaord,
    deleteBoard
};