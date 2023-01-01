import React, { useEffect, useState } from "react";
import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    width: "560px",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function MyPage(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const { loaded, error, formCreated } = useHubspotForm(
  //   open
  //     ? {
  //         portalId: "23633466",
  //         formId: "5641b914-ab3b-4e0d-a6de-a1869c557d6c",
  //         target: "#my-hubspot-form",
  //       }
  //     : null,
  // );
  // const [show, setShow] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    if (open) {
      script.addEventListener("load", () => {
        // @TS-ignore
        if (window.hbspt) {
          // @TS-ignore
          window.hbspt.forms.create({
            portalId: "6485032",
            formId: "9fc93abc-a8c7-48de-a6d5-2a3c1583e64f",
            target: "#my-hubspot-form",
          });
        }
      });
    }
  }, [open]);

  return (
    <div style={{ margin: "0px 120px" }}>
      <h1 style={{ color: "#ff7a59" }}>Hubspot Form</h1>
      {/* <button
        style={{
          color: "#ff7a59",
          backgroundColor: "white",
          borderRadius: "14px",
        }}
        onClick={() => setShow(true)}
      >
        FORM
      </button> */}
      {/* <div id="my-hubspot-form"></div> */}

      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        style={{
          color: "#ff7a59",
          backgroundColor: "white",
          borderRadius: "14px",
        }}
      >
        FORM
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          GST Verification Purpose
        </DialogTitle>
        <DialogContent>
          <div id="my-hubspot-form"></div>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

export default MyPage;
