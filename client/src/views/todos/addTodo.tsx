import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";

interface AddTodoInterface {
  onClose: (value: boolean) => void;
}

const AddTodo = (props: AddTodoInterface) => {
  return (
    <Card sx={{ minWidth: 475 }}>
      <CardHeader title="Add Todo" />
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
          <TextField id="todo" label="Todo" variant="outlined" fullWidth />
          <TextField
            id="todo-description"
            label="Description"
            variant="outlined"
            fullWidth
          />
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          onClick={() => props.onClose(false)}
        >
          Save
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={() => props.onClose(false)}
        >
          Close
        </Button>
      </CardActions>
    </Card>
  );
};

export default AddTodo;
