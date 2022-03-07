import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "20px 0px 20px 10px",
  },
});

interface addButtonProps {
  handleOpen: () => void;
}

const AddButton = (props: addButtonProps) => {
  const classes = useStyles();

  return (
    <div>
      <Button
        data-testid="btn-add-todo"
        variant="outlined"
        color="primary"
        onClick={props.handleOpen}
        className={classes.button}
      >
        Add Todo
      </Button>
    </div>
  );
};

export default AddButton;
