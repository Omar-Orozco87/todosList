import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";

import logo from "./logo.svg";
import "./App.css";

import TodosLister from "./todosLister/TodosLister";
import TodoTable from "./todosLister/TodoTable";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Welcome to the todos app</h1>
        <TodosLister />
      </div>
    </Provider>
  );
}

export default App;
