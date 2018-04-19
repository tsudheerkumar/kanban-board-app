import request from 'graphql-request';

const queryUrl = 'http://localhost:3000/graphql';

const getBoards = () => {

    return (dispatch) => {
        const query = `query{
            getBoards{
              _id
              name
              lists {
                _id
                name
                tasks {
                  _id
                  name
                }
              }
            }
          }`

        request(queryUrl, query).then((data) => {
            dispatch({
                type: 'get_boards',
                boards: data.getBoards
            })
        })
    }
}

const addTask = (inputData) => {
    return (dispatch) => {
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
            dispatch({
                type: 'add_task',
                item: {
                    name: data.name,
                    _id: data._id
                }
            })
        })
    }
}
const deleteTask = (inputData) => {
    return (dispatch) => {
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
            dispatch({
                type: 'delete_task',
                item: {
                    name: data.name,
                    _id: data._id
                }
            })
        })
    }
}
const updateTask = (inputData) => {
    return (dispatch) => {
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
            dispatch({
                type: 'update_task',
                item: {
                    name: data.name,
                    _id: data._id
                }
            })
        })
    }
}
const addList = (inputData) => {
    return (dispatch) => {
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
            dispatch({
                type: 'add_list',
                item: {
                    name: data.name,
                    _id: data._id
                }
            })
        })
    }
}
const updateList = (inputData) => {
    return (dispatch) => {
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
            dispatch({
                type: 'update_list',
                item: {
                    name: data.name,
                    _id: data._id
                }
            })
        })
    }
}
const deleteList = (inputData) => {
    return (dispatch) => {
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
            dispatch({
                type: 'delete_list',
                item: {
                    name: data.name,
                    _id: data._id
                }
            })
        })
    }
}
const addBoard = (inputData) => {
    return (dispatch) => {
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
            dispatch({
                type: 'add_board',
                item: {
                    name: data.name,
                    _id: data._id
                }
            })
        })
    }
}
const updateBoard = (inputData) => {
    return (dispatch) => {
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
            dispatch({
                type: 'add_board',
                item: {
                    name: data.name,
                    _id: data._id
                }
            })
        })
    }
}
const deleteBoard = (inputData) => {
    return (dispatch) => {
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
            dispatch({
                type: 'delete_board',
                item: {
                    name: data.name,
                    _id: data._id
                }
            })
        })
    }
}

export {
    addTask,
    deleteTask,
    updateTask,
    addList,
    updateList,
    deleteList,
    addBoard,
    updateBoard,
    deleteBoard,
    getBoards
};