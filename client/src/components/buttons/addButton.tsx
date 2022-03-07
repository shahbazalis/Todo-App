import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddBoxIcon from "@mui/icons-material/AddBox";

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
    <Button
      data-testid="btn-add-todo"
      variant="contained"
      color="primary"
      onClick={props.handleOpen}
      className={classes.button}
      startIcon={<AddBoxIcon />}
    >
      Todo
    </Button>
  );
};

export default AddButton;
