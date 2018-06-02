import { loadDB } from '../lib/db.js';
export const Types = {
    SET_PHONE_SUCCESS: "SET_PHONE_SUCCESS",
};
export const setPhone = (phone) => async dispatch => {
     dispatch({ type: Types.SET_PHONE_SUCCESS, phone})
}; 
