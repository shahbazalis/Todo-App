import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";

import AssignmentIconAvatar from "../../components/avatar/assignmentIcon";
import CloseButton from "../../components/buttons/closeButton";
import SaveButton from "../../components/buttons/saveButton";
import { updateTodo } from "../../models/todoApis";
import { TodoItem } from "../../interfaces/TodoItem";

const useStyles = makeStyles((theme) => ({
  divider: {
    // Theme Color, or use css color in quote
    background: "#B0B0B0",
  },
  rootMenuItem: {
    "&:hover": {
      backgroundColor: "blue",
    },
  },
}));

interface UpdateTodoInterface {
  onClose: (value: boolean) => void;
  todoDetails: TodoItem | undefined;
}

const UpdateTodo = (props: UpdateTodoInterface) => {
  const [status, setStatus] = useState<String | undefined>(
    props.todoDetails?.status
  );

  const classes = useStyles();

  const handleChange = async (event: SelectChangeEvent<string>) => {
    setStatus(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let updatedStatus = status;

    await updateTodo(props.todoDetails?._id, updatedStatus);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card sx={{ minWidth: 525 }}>
        <CardHeader avatar={<AssignmentIconAvatar />} title="Todo Details" />

        <Divider className={classes.divider} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="todo"
                label="Todo"
                variant="outlined"
                type="text"
                value={props.todoDetails?.todo}
                disabled
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="todo-description"
                label="Description"
                variant="outlined"
                type="text"
                value={props.todoDetails?.description}
                disabled
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ minWidth: 222 }}>
                <InputLabel id="simple-select-label">Status</InputLabel>
                <Select
                  native
                  id="simple-select"
                  defaultValue={props.todoDetails?.status}
                  label="Status"
                  onChange={handleChange}
                >
                  <option value="Pending">Pending</option>
                  <option value="Done">Done</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider className={classes.divider} />
        <CardActions>
          <SaveButton onClose={props.onClose} />
          <CloseButton onClose={props.onClose} />
        </CardActions>
      </Card>
    </form>
  );
};

export default UpdateTodo;
