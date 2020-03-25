import { createStore } from "redux";
import todosReducer from "../reducer/reducer";

const store = createStore(todosReducer);

export default store;
