import { Button } from "@material-ui/core";

interface CloseButtonProps {
  onClose: (value: boolean) => void;
}

const CloseButton = (props: CloseButtonProps) => {
  return (
    <Button
      size="small"
      variant="contained"
      color="secondary"
      onClick={() => props.onClose(false)}
    >
      Close
    </Button>
  );
};

export default CloseButton;
