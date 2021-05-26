import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import reduxThunkMiddleware from "redux-thunk";

const logger = (storeAPI) => (next) => (action) => {
    console.log("Store before action dispatch", storeAPI.getState());
    console.log("Action Dispatch", action);
    const result = next(action);
    console.log("Store before action dispatch", storeAPI.getState());
    return result;
};

const middlewares = applyMiddleware(logger, reduxThunkMiddleware);
const store = createStore(reducer, middlewares);
export default store;
