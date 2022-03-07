import React, { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";

import AssignmentIconAvatar from "../../components/avatar/assignmentIcon";
import { LooseObject } from "../../interfaces/LooseObject";
import CloseButton from "../../components/buttons/closeButton";
import SaveButton from "../../components/buttons/saveButton";

interface AddTodoInterface {
  onClose: (value: boolean) => void;
}

const emptyObject: LooseObject = {};

const AddTodo = (props: AddTodoInterface) => {
  const [formState, setFormState] = useState({
    values: emptyObject,
  });

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // *event.persist(), which will remove the synthetic event from the pool and allow references to the event to be retained by user code.
    event.persist();
    console.log(event.target.value);
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

  return (
    <Card sx={{ minWidth: 475 }}>
      <CardHeader avatar={<AssignmentIconAvatar />} title="Add Todo" />

      <Divider />
      <CardContent>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="todo"
            label="Todo"
            variant="outlined"
            name="todo"
            fullWidth
            onChange={handleChange}
            type="text"
            value={formState.values.todo || ""}
          />
          <TextField
            id="todo-description"
            label="Description"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            type="text"
            value={formState.values.description || ""}
          />
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <SaveButton onClose={props.onClose} />
        <CloseButton onClose={props.onClose} />
      </CardActions>
    </Card>
  );
};

export default AddTodo;
