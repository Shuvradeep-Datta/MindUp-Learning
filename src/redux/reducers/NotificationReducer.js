
const initialState = {
    notifications: []
};

export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "notify/Add":
            return {
                ...state,
                notifications: [...state.notifications, action.payload]
            };
        default:
            return state;
    }
}

export default notificationReducer;