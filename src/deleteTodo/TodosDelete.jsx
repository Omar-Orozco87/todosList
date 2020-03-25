import React, { Component } from "react";

import { connect } from "react-redux";
import { remove } from "../redux/actions/actions";

function TodosDelete(props) {
  const { todo, tittle } = props;

  function remove() {
    props.deleteTodo(todo.id);
  }

  return (
    <div id={"deleteTodo" + todo.id} className="d-flex justify-content-start">
      <button data-target={"#deleteTodoModal" + todo.id} data-toggle="modal">
        <div className="d-inline-flex align-items-center">
          <span className="material-icons">delete</span>
        </div>
      </button>

      <div
        className="modal fade"
        id={"deleteTodoModal" + todo.id}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {tittle}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h2>Please confirm to delete</h2>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={remove}
              >
                Confirm to delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapDispatchStateToProps = dispatch => {
  return {
    deleteTodo: id => dispatch(remove(id))
  };
};

export default connect(null, mapDispatchStateToProps)(TodosDelete);
