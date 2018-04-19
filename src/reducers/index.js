export default (state = {}, payload) => {
    switch (payload.type) {

        case 'get_boards':
            return Object.assign({}, {
                boards: payload.boards
            });

        case 'add_task':
            let currentTaskBoard = state.boards.filter(board => board._id === payload.data.boardId)[0];
            let currentTaskList = currentTaskBoard.lists.filter(list => list._id === payload.data.listId)[0];
            currentTaskList.tasks.push({
                _id: payload.data._id,
                name: payload.data.name
            })
            currentTaskBoard.lists = [...currentTaskBoard.lists.filter(list => list._id !== payload.data.listId), currentTaskList];
            return Object.assign({}, state, {
                boards: [...state.boards.filter(board => board._id !== payload.data.boardId), currentTaskBoard]
            });

        case 'delete_task':
            let currentBoard = state.boards.filter(board => board.name === payload.data.boardName)[0].lists;
            let currentList = currentBoard.lists.filter(list => list.name === payload.data.listName)[0];
            currentList.tasks = currentList.tasks.filter(task => task.content !== payload.data.content);
            currentBoard.lists = [...currentBoard.lists.filter(list => list.name !== payload.data.listName), currentList];
            return Object.assign({}, state, {
                boards: [...state.boards.filter(board => board.name !== payload.data.boardName), currentBoard]
            });

        case 'update_task':
            return state;

        case 'add_list':
            let currentListBoard = state.boards.filter(board => board._id === payload.data.boardId)[0];
            currentListBoard.lists.push({
                _id: payload.data._id,
                name: payload.data.name,
                tasks: []
            });
            return Object.assign({}, state, {
                boards: [...state.boards.filter(board => board.name !== payload.data.boardName), currentListBoard]
            });

        case 'delete_list':
            let currentBoardList = state.boards.filter(board => board.name === payload.data.boardName)[0];
            currentBoardList.lists = currentBoardList.lists.filter(list => list.name !== payload.data.name);
            return Object.assign({}, state, {
                boards: [...state.boards.filter(board => board.name !== payload.data.boardName), currentBoardList]
            });

        case 'update_list':
            return state;

        case 'add_board':
            return Object.assign({}, state, {
                boards: [...state.boards, payload.data]
            });

        case 'update_board':
            return state;

        case 'delete_board':
            return Object.assign({}, state, {
                boards: [...state.boards.filter(board => board.name !== payload.data.name)]
            });

        default:
            return state;
    }
};