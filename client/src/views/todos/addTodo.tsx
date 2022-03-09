import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@material-ui/core/styles";

import AssignmentIconAvatar from "../../components/avatar/assignmentIcon";
import { LooseObject } from "../../interfaces/LooseObject";
import CloseButton from "../../components/buttons/closeButton";
import SaveButton from "../../components/buttons/saveButton";
import { addNewTodo } from "../../models/todoApis";

const useStyles = makeStyles((theme) => ({
  divider: {
    // Theme Color, or use css color in quote
    background: "#B0B0B0",
  },
  textfield: {
    margin: "1px 2px 5px 20px",
  },
}));

interface AddTodoInterface {
  onClose: (value: boolean) => void;
}

const emptyObject: LooseObject = {};

const AddTodo = (props: AddTodoInterface) => {
  const [formState, setFormState] = useState({
    values: emptyObject,
  });

  const classes = useStyles();

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // *event.persist(), which will remove the synthetic event from the pool and allow references to the event to be retained by user code.
    event.persist();
    // * set the variable value in values and touched status
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let newTodoItem = {
      todo: formState.values.todo,
      description: formState.values.description,
      status: "Pending",
    };

    const todoAdded = await addNewTodo(newTodoItem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card sx={{ minWidth: 525 }}>
        <CardHeader avatar={<AssignmentIconAvatar />} title="Add Todo" />

        <Divider className={classes.divider} />
        <CardContent>
          <TextField
            className={classes.textfield}
            id="todo"
            label="Todo"
            variant="outlined"
            name="todo"
            onChange={handleChange}
            type="text"
            value={formState.values.todo || ""}
          />
          <TextField
            className={classes.textfield}
            id="todo-description"
            label="Description"
            variant="outlined"
            name="description"
            onChange={handleChange}
            type="text"
            value={formState.values.description || ""}
          />
        </CardContent>
        <Divider classes={{ root: classes.divider }} />
        <CardActions>
          <SaveButton onClose={props.onClose} />
          <CloseButton onClose={props.onClose} />
        </CardActions>
      </Card>
    </form>
  );
};

export default AddTodo;
