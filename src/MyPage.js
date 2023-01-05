import React, { useEffect, useState } from "react";
import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
  // paper: {
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography
        style={{
          fontSize: "26px",
          margin: "0px 0px 14px 0px",
          textAlign: "center",
        }}
      >
        {children}
      </Typography>
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
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: "6485032",
            formId: "2881a6f9-e0a0-44c1-8eba-c50665170bc9",
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

      {/* CTA */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "auto",
          background: "linear-gradient(to right,#cee7ef,#97dafc,#4472c4)",
          height: "57%",
          marginTop: "20px",
          padding: "40px",
        }}
      >
        <div>
          <h2 style={{ color: "black" }}>
            Run GST Verification Checks in Bulk. Try Bulk Upload.
          </h2>
        </div>
        <div>
          <Button
            variant="contained"
            // color="primary"
            onClick={handleClickOpen}
            style={{
              color: "white",
              backgroundColor: "#003d8e",
              fontSize: "14px",
              margin: "15px 0px",
              // borderRadius: "14px",
            }}
          >
            Request a quote
          </Button>
        </div>
      </div>
      {/* Second CTA */}
      <div
        style={{
          background: "linear-gradient(to right,#cee7ef,#97dafc,#4472c4)",
          marginTop: "54px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "auto",
            height: "57%",
            marginTop: "20px",
            padding: "40px",
          }}
        >
          <div>
            <h3 style={{ color: "black" }}>
              Run Complete Due Diligence Risk Checks.
            </h3>
          </div>
          <div>
            <Button
              variant="contained"
              // color="primary"
              onClick={handleClickOpen}
              style={{
                color: "white",
                backgroundColor: "#003d8e",
                fontSize: "14px",
                margin: "5px 0px",
                // borderRadius: "14px",
              }}
            >
              Request a quote
            </Button>
          </div>
        </div>
        <Grid container spacing={1} style={{ padding: "0px 0px 25px 26px" }}>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
              <Paper
                style={{
                  background: "rgb(0, 61, 142)",
                  color: "white",
                  padding: "10px 0px",
                  textAlign: "left",
                }}
              >
                <ul>
                  <li>Financial Health Checks</li>
                  <li>Adverse Litigation Checks</li>
                  <li>Adverse Media Checks</li>
                  <li>Promoter Background Checks</li>
                  <li>Business Registration & Essential Checks</li>
                  <li>FCPA ( Foreign Corrupt Practices Act)</li>
                  <li>ESG Checks</li>
                </ul>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                style={{
                  background: "rgb(0, 61, 142)",
                  color: "white",
                  padding: "10px 0px",
                  textAlign: "left",
                }}
              >
                <ul>
                  <li>GST Compliance Checks</li>
                  <li>Financial Quality & Credit Checks</li>
                  <li>Historic Financial Checks</li>
                  <li>Headcount Checks</li>
                  <li>Corporate Governance Checks</li>
                  <li>Anti-bribery and corruption (ABC) Checks</li>
                  <li>UK Bribery Act Checks</li>
                </ul>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                style={{
                  background: "rgb(0, 61, 142)",
                  color: "white",
                  padding: "10px 0px",
                  textAlign: "left",
                }}
              >
                <ul>
                  <li>AML, Sanctions Lists & PEP Checks</li>
                  <li>Ultimate Beneficiary Analysis</li>
                  <li>Reputation Checks</li>
                  <li>Customer Sentiment Analysis</li>
                  <li>Regulatory & Economic Default Checks</li>
                  <li>GRC Mandates</li>
                  <li>Modern Slavery Checks</li>
                </ul>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Let us know your requirements
        </DialogTitle>
        <DialogContent>
          <div id="my-hubspot-form"></div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MyPage;
