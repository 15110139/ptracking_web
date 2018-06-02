import {
    applyMiddleware,
    compose,
    createStore as createReduxStore
} from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"

import makeRootReducer from "../reducers/index"

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose


const createStore = (initialState = {}, history) => {
    const middleware = [thunk, logger]

    const enhancers = []

    const store = createReduxStore(
        makeRootReducer,
        initialState,
        composeSetup(applyMiddleware(...middleware), ...enhancers)
    )

    store.asyncReducers = {}

    return store
}

export default createStore
