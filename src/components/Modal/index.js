import React from "react";
import {
  DialogContent,
  Dialog,
  DialogTitle,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close";

import styles from "./style";

const Modal = (props) => {
  const { open, onClose, title, children } = props;
  const classes = styles();

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      <Dialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        scroll="body"
        disableBackdropClick
        disableEscapeKeyDown
        disableEscapeKeyDown
        fullWidth
      >
        <DialogTitle className={classes.modalTitle} id="dialog-title">
          {onClose && (
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>
          )}
          <Typography align="center" variant="h6">
            {title}
          </Typography>
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </div>
  );
};
export default Modal;
