import Avatar from "@mui/material/Avatar";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { green } from "@mui/material/colors";

const AssignmentIconAvatar = () => {
  return (
    <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
      <AssignmentIcon />
    </Avatar>
  );
};

export default AssignmentIconAvatar;
