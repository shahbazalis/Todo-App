import { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { LinearProgress } from "@material-ui/core";
import { makeStyles, styled } from "@material-ui/core/styles";
import Dialog from "@mui/material/Dialog";

import { getTodos } from "../../models/todoApis";
import { TodoItem } from "../../interfaces/TodoItem";
import AddButton from "../../components/buttons/addButton";

const useStyles = makeStyles({
  bold: {
    fontWeight: 600,
  },
  inline: {
    textDecorationLine: "line-through",
  },
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Todos = () => {
  const [todos, setTodos] = useState<TodoItem[] | undefined>([]);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  const getTodoList = async () => {
    try {
      setLoading(true);
      const todosList = await getTodos();
      setTodos(todosList);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const handleAddTodoItem = async () => {
    let todoItem = {
      todo: "Write an email",
      status: "Pending",
      description: "To the friend",
    };

    // let todoItemAdded = await addTodoItem(todoItem);
    //setTodo(todo.concat([todoItemAdded.data]));
  };

  return (
    <div>
      {loading && <LinearProgress />}

      <AddButton addTodoItem={handleAddTodoItem} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="medium">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography
                  variant="body1"
                  component="div"
                  className={classes.bold}
                >
                  Todos
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="body1"
                  component="div"
                  className={classes.bold}
                >
                  Description
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="body1"
                  component="div"
                  className={classes.bold}
                >
                  Status
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos &&
              todos.map((row: TodoItem) => (
                <StyledTableRow key={row._id}>
                  {row.status === "Pending" ? (
                    <TableCell component="th" scope="row" width="30%">
                      {row.todo}
                    </TableCell>
                  ) : (
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.inline}
                    >
                      {row.todo}
                    </TableCell>
                  )}
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Dialog></Dialog> */}
    </div>
  );
};

export default Todos;
