import { makeStyles, styled } from "@material-ui/core/styles";
import TableRow from "@mui/material/TableRow";

export const useStyles = makeStyles({
  bold: {
    fontWeight: 600,
  },
});

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
