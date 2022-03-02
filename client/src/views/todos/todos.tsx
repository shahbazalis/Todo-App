import { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { LinearProgress } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { useStyles, StyledTableRow } from "./styles";

import { getTodos } from "../../models/todoApis";
import { TodoItem } from "../../interfaces/TodoItem";

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

  return (
    <div>
      {loading && <LinearProgress />}

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
                      style={{ textDecorationLine: "line-through" }}
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
    </div>
  );
};

export default Todos;
