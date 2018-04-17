export default (state = [], payload) => {
    switch (payload.type) {
        case 'add_task':
            return [...state, payload.item];

        case 'delete_task':
            return [...state, payload.item];

        case 'update_task':
            return [...state, payload.item];

        case 'add_list':
            return [...state, payload.item];

        case 'delete_list':
            return [...state, payload.item];

        case 'update_list':
            return [...state, payload.item];

        case 'add_board':
            return [...state, payload.item];

        case 'update_board':
            return [...state, payload.item];
            
        case 'delete_board':
            return [...state, payload.item];

        default:
            return state;
    }
};