import React, { Component } from "react";

import { connect } from "react-redux";
import { modify } from "../redux/actions/actions";

class TodosEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: props.todo
    };
  }

  handleSaveChanges = () => {
    this.props.editTodo(this.state.todo);
  };

  handleChange = e => {
    const { value, id } = e.target;
    const todoCpy = this.state.todo;
    let idModified = 0;

    if (id.includes("todoName")) {
      todoCpy.name = value;
    } else if (id.includes("todoDescription")) {
      todoCpy.description = value;
    } else if (id.includes("todoSubName")) {
      idModified = id.substring(11, id.length);
      todoCpy.subtodos.map(sub => {
        if (idModified === sub.id.toString()) {
          sub.name = value;
        }
      });
    } else {
      idModified = id.substring(18, id.length);
      todoCpy.subtodos.map(sub => {
        if (idModified === sub.id.toString()) {
          sub.description = value;
        }
      });
    }

    this.setState({
      todo: todoCpy
    });
  };

  render() {
    const { todo } = this.props;
    const hasSubs =
      todo !== null &&
      todo !== null &&
      todo.subtodos !== null &&
      todo.subtodos.length > 0;
    return (
      <div id={"editTodo" + todo.id} className="d-flex justify-content-start">
        <button data-target={"#editTodoModal" + todo.id} data-toggle="modal">
          <div className="d-inline-flex align-items-center">
            <span className="material-icons">edit</span>
          </div>
        </button>

        <div
          className="modal fade"
          id={"editTodoModal" + todo.id}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {this.props.tittle}
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
                        id={"todoName" + todo.id}
                        value={todo.name}
                        onChange={e => {
                          this.handleChange(e);
                        }}
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
                        id={"todoDescription" + todo.id}
                        value={todo.description}
                        onChange={e => {
                          this.handleChange(e);
                        }}
                      ></input>
                    </div>
                  </div>
                  {hasSubs && <h5>Sub todos:</h5>}
                  {Object.keys(todo.subtodos).map(i => (
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
                          id={"todoSubName" + todo.subtodos[i].id}
                          value={todo.subtodos[i].name}
                          onChange={e => {
                            this.handleChange(e);
                          }}
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
                          id={"todoSubDescription" + todo.subtodos[i].id}
                          value={todo.subtodos[i].description}
                          onChange={e => {
                            this.handleChange(e);
                          }}
                        ></input>
                      </div>
                    </div>
                  ))}
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ backgroundColor: "black", borderColor: "black" }}
                  onClick={this.handleSaveChanges}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchStateToProps = dispatch => {
  return {
    editTodo: todoModified => dispatch(modify(todoModified))
  };
};

export default connect(null, mapDispatchStateToProps)(TodosEdit);
