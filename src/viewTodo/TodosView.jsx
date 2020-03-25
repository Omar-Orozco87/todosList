import React, { Component } from "react";

function TodosView(props) {
  const { todo, tittle } = props;
  const hasSubs =
    todo !== null &&
    todo !== null &&
    todo.subtodos !== null &&
    todo.subtodos.length > 0;

  return (
    <div id={"viewTodo" + todo.id} className="d-flex justify-content-start">
      <button data-target={"#viewTodoModal" + todo.id} data-toggle="modal">
        <div className="d-inline-flex align-items-center">
          <span className="material-icons">visibility</span>
        </div>
      </button>

      <div
        className="modal fade"
        id={"viewTodoModal" + todo.id}
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
              <form>
                <div className="form-group row">
                  <label htmlFor="todoName" className="col-sm-2 col-form-label">
                    Todo name:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="todoName"
                      value={todo.name}
                      disabled
                    ></input>
                  </div>
                  <label
                    htmlFor="todoDescription"
                    className="col-sm-2 col-form-label"
                  >
                    Todo description:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="todoDescription"
                      value={todo.description}
                      disabled
                    ></input>
                  </div>
                </div>
              </form>
              {hasSubs && <h5>Sub todos:</h5>}
              {Object.keys(todo.subtodos).map(i => (
                <form>
                  <div className="form-group row">
                    <label
                      htmlFor="todoName"
                      className="col-sm-2 col-form-label"
                    >
                      Todo name:
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="todoName"
                        value={todo.subtodos[i].name}
                        disabled
                      ></input>
                    </div>
                    <label
                      htmlFor="todoDescription"
                      className="col-sm-2 col-form-label"
                    >
                      Todo description:
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="todoDescription"
                        value={todo.subtodos[i].description}
                        disabled
                      ></input>
                    </div>
                  </div>
                </form>
              ))}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodosView;
