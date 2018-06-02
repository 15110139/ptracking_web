import { Types } from "../actions/Message";

const initialState = {
    isFetching: false,
    messagesadmin:[],
    messagesuser:[]
};

export default function Messages(state = initialState, action) {
    switch (action.type) {
        case Types.GET_MESSAGE_REQUEST:
            return Object.assign({}, state, {
                isFetching: false
            });
        case Types.GET_MESSAGE_ADMIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                messagesadmin: action.messagesadmin,
            });
        case Types.GET_MESSAGE_USE_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                messagesuser: action.messagesuser,
            });
        case Types.GET_MESSAGE_FAILURE:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }
}
