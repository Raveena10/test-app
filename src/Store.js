import { createStore } from "redux";

import RootReducer from "./Redux/Reducer/Rootreducer";

const store = createStore(RootReducer);

export default store;
