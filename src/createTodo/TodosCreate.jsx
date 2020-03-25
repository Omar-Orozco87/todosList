import React, { Component } from "react";

import { connect } from "react-redux";
import { add } from "../redux/actions/actions";

class TodosCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: ""
    };
    this.handleSaveChanges = this.handleSaveChanges.bind(this);
  }

  getLastId = (parentId = 0) => {
    const ids = [];
    if (parentId === 0) {
      [...this.props.todos].map(i => {
        ids.push(i.id);
      });
    } else {
      [...this.props.todos].map(i => {
        if (i.id === parentId) {
          ids.push(i.id);
        }
      });
    }
    return Math.max(...ids);
  };

  handleSaveChanges = () => {
    const { parentId } = this.props;
    const { name, description } = this.state;

    if (parentId === 0) {
      const newTodo = [
        {
          id: this.getLastId() + 1,
          name: name,
          description: description,
          subtodos: []
        }
      ];
      this.props.addTodo(...newTodo);
    } else {
      const parentId = this.getLastId(this.props.parentId).toString();
      const newTodo = [
        {
          id: parseInt(parentId + 1),
          name: name,
          description: description,
          subtodos: []
        }
      ];
      this.props.addTodo(...newTodo, parentId);
    }
  };

  descriptionChanged = e => {
    this.setState({
      ...this.state,
      description: e.target.value
    });
  };

  nameChanged = e => {
    this.setState({
      ...this.state,
      name: e.target.value
    });
  };

  render() {
    const { parentId } = this.props;
    return (
      <div
        id={"createTodo" + parentId}
        className="d-flex justify-content-start"
      >
        <button data-target={"#addTodoModal" + parentId} data-toggle="modal">
          <div className="d-inline-flex align-items-center">
            <div className="material-icons">add_box</div>
            New todo
          </div>
        </button>

        <div
          className="modal fade"
          id={"addTodoModal" + parentId}
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
                  <div className="form-group">
                    <label htmlFor="todoName">Todo name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="todoName"
                      onChange={this.nameChanged}
                    ></input>
                    <label htmlFor="todoDescription">Todo description:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="todoDescription"
                      onChange={this.descriptionChanged}
                    ></input>
                  </div>
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
    addTodo: (newItem, parentId = 0) => dispatch(add(newItem, parentId))
  };
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, mapDispatchStateToProps)(TodosCreate);
