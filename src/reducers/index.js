export default(state = [], payload) => {
    switch (payload.type) {
        case 'add_task':
            return [...state, payload.item];
            
        default:
            return state;
    }
};