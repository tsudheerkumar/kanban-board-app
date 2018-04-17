import request from 'graphql-request';

const queryUrl = 'http://localhost:8000/graphql';

    const addTask = (item) => {
        return {
            type: 'add_task',
            item
        };
    }
const deleteTask = (item) => {
    return {
        type: 'delete_task',
        item
    };
}
const updateTask = (item) => {
    return {
        type: 'update_task',
        item
    };
}
const addList = (item) => {
    return {
        type: 'add_list',
        item
    };
}
const updateList = (item) => {
    return {
        type: 'update_list',
        item
    };
}
const deleteList = (item) => {
    return {
        type: 'delete_list',
        item
    };
}
const addBoard = (name) => {
    const query = `{
        Movie(title: "Inception") {
          releaseDate
          actors {
            name
          }
        }
      }`

    request(queryUrl, query).then(data => console.log(data))
    return {
        type: 'add_board',
        item: {
            name: data.name,
            _id: data._id
        }
    };
}
const updateBoard = (item) => {
    return {
        type: 'update_board',
        item
    };
}
const deleteBoard = (item) => {
    return {
        type: 'delete_board',
        item
    };
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