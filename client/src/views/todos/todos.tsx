import { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import { LinearProgress } from "@material-ui/core";
import { makeStyles, styled } from "@material-ui/core/styles";
import Dialog from "@mui/material/Dialog";

import { getTodos, deleteTodo } from "../../models/todoApis";
import { TodoItem } from "../../interfaces/TodoItem";
import AddButton from "../../components/buttons/addButton";
import AddTodo from "./addTodo";
import UpdateTodo from "./updateTodo";

const useStyles = makeStyles({
  bold: {
    fontWeight: 600,
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
  const [open, setOpen] = useState(false);
  const [todoDetails, setTodoDetails] = useState<TodoItem>();
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);

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

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleDelete = async (id: String) => {
    await deleteTodo(id);
  };

  const handleUpdate = async (todo: TodoItem) => {
    setOpenUpdateDialog(true);
    setTodoDetails(todo);
  };

  const handleUpdateDialogClose = () => {
    setOpenUpdateDialog(false);
  };

  return (
    <div>
      {loading && <LinearProgress />}

      <AddButton handleOpen={handleDialogOpen} />

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
              <TableCell>
                <Typography
                  variant="body1"
                  component="div"
                  className={classes.bold}
                >
                  Actions
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos &&
              todos.map((row: TodoItem) => (
                <StyledTableRow key={row._id}>
                  <TableCell component="th" scope="row">
                    {row.todo}
                  </TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <Tooltip title="Edit">
                      <EditIcon
                        color="primary"
                        onClick={() => handleUpdate(row)}
                      />
                    </Tooltip>
                    <Tooltip title="Delete">
                      <DeleteIcon
                        htmlColor="#FF3368"
                        onClick={() => handleDelete(row._id)}
                      />
                    </Tooltip>
                  </TableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleDialogClose}>
        <AddTodo onClose={handleDialogClose} />
      </Dialog>
      <Dialog open={openUpdateDialog} onClose={handleUpdateDialogClose}>
        <UpdateTodo
          onClose={handleUpdateDialogClose}
          todoDetails={todoDetails}
        />
      </Dialog>
    </div>
  );
};

export default Todos;
