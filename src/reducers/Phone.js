import { Types } from "../actions/Phone";

const initialState = {
    phone: ''
};

export default function Phone(state = initialState, action) {
    switch (action.type) {
        case Types.SET_PHONE_SUCCESS:
            return Object.assign({}, state, {
                phone:action.phone
            });
        default:
            return state;
    }
}
