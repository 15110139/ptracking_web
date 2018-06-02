import { Types } from "../actions/Location";

const initialState = {
    isFetching: false,
    location:{},
    isMarkerShown:false
};

export default function Locations(state = initialState, action) {
    switch (action.type) {
        case Types.GET_LOCATION_REQUEST:
            return Object.assign({}, state, {
                isFetching: false
            });
        case Types.GET_LOCATION_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                isMarkerShown: true,
                location: action.location,
            });
        case Types.GET_LOCATION_FAILURE:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }
}
