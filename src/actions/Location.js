import { loadDB } from '../lib/db.js';
export const Types = {
    GET_LOCATION_REQUEST: "GET_LOCATION_REQUEST",
    GET_LOCATION_SUCCESS: "GET_LOCATION_SUCCESS",
    GET_LOCATION_FAILURE: "GET_LOCATION_FAILURE"
};
export const getlocation = (value) => async dispatch => {
    dispatch({ type: Types.GET_LOCATION_REQUEST })
    const db = await loadDB();
    var location = {}
    db.firestore().collection("locations").where("user.phoneNumber", "==", value)
        .onSnapshot(snapshot => {
            var max = 0
            snapshot.forEach((doc) => {
                if (doc.data().timestamp > max) {
                    max = doc.data().timestamp
                    location = { lat: doc.data().latitude, lng: doc.data().longitude }
                }
            });
            dispatch({ type: Types.GET_LOCATION_SUCCESS, location })
        });
}; 
