import { Button } from "@material-ui/core";
import SaveIcon from "@mui/icons-material/Save";

interface SaveButtonProps {
  onClose: (value: boolean) => void;
}

const SaveButton = (props: SaveButtonProps) => {
  return (
    <Button
      size="small"
      variant="contained"
      type="submit"
      color="primary"
      onClick={() => props.onClose(false)}
      startIcon={<SaveIcon />}
    >
      Save
    </Button>
  );
};

export default SaveButton;
