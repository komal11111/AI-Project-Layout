import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  modalTitle: {
    margin: 0,
    padding: theme.spacing(2),
    "& h6": {
      fontWeight: 700,
    },
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));
