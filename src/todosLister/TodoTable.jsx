import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import TodosCreate from "../createTodo/TodosCreate";
import TodosView from "../viewTodo/TodosView";
import TodosDelete from "../deleteTodo/TodosDelete";
import TodosEdit from "../editTodo/TodosEdit";
import { connect } from "react-redux";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

function TodoTable(props) {
  const classes = useStyles();
  function displayEditModal() {}

  function displayRemoveModal() {}

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Add</StyledTableCell>
            <StyledTableCell align="left">Detail</StyledTableCell>
            <StyledTableCell align="left">Edit</StyledTableCell>
            <StyledTableCell align="left">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.todos.map(todo => (
            <StyledTableRow key={todo.id}>
              <StyledTableCell component="th" scope="row">
                {todo.name}
              </StyledTableCell>
              <StyledTableCell align="center">
                <TodosCreate
                  key={"todosCreate" + todo.id}
                  tittle="Create a new todo"
                  parentId={todo.id}
                ></TodosCreate>
              </StyledTableCell>
              <StyledTableCell align="center">
                <TodosView
                  key={"todosView" + todo.id}
                  tittle="View todo"
                  todo={todo}
                ></TodosView>
              </StyledTableCell>
              <StyledTableCell align="center">
                <TodosEdit
                  key={"todosEdit" + todo.id}
                  tittle="Edit todo"
                  todo={todo}
                ></TodosEdit>
              </StyledTableCell>
              <StyledTableCell align="center">
                <TodosDelete
                  key={"todosDelete" + todo.id}
                  tittle="Delete todo"
                  todo={todo}
                ></TodosDelete>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoTable);
