import React, { Component } from "react";
import { connect } from "react-redux";
import { getAll } from "../redux/actions/actions";

import TodoTable from "./TodoTable";
import TodosCreate from "../createTodo/TodosCreate";

function TodosLister(props) {
  return (
    <div id="divTodosLister">
      <TodosCreate tittle="Create a new todo" parentId={0}></TodosCreate>
      <TodoTable></TodoTable>
    </div>
  );
}

export default TodosLister;
