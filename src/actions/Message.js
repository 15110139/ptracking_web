import { loadDB } from '../lib/db.js';
export const Types = {
    GET_MESSAGE_REQUEST: "GET_MESSAGE_REQUEST",
    GET_MESSAGE_USE_SUCCESS: " GET_MESSAGE_USE_SUCCESS",
    GET_MESSAGE_ADMIN_SUCCESS: "GET_MESSAGE_ADMIN_SUCCESS",
    GET_MESSAGE_FAILURE: "GET_MESSAGE_FAILURE",
};
export const getAllMessages = (value) => async dispatch => {
    dispatch({ type: Types.GET_MESSAGE_REQUEST })
    const db = await loadDB();
    var messagesuser = []
    var messagesadmin = []
    db.firestore().collection("messages").where("from.name", "==", "admin").where("to","==",value)
        .onSnapshot(snapshot => {
            messagesadmin=[]
            snapshot.forEach((doc) => {
                messagesadmin.push(doc.data())
            });
            dispatch({ type: Types.GET_MESSAGE_ADMIN_SUCCESS, messagesadmin })
        });
    db.firestore().collection("messages").where("from.name", "==", value).where("to", "==", "admin")
        .onSnapshot(snapshot => {
            messagesuser=[]
            snapshot.forEach((doc) => {
                messagesuser.push(doc.data())
            });
            dispatch({ type: Types.GET_MESSAGE_USE_SUCCESS, messagesuser })
        });
};  