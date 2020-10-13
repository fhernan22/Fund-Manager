import React, { useContext } from "react";
import { Redirect } from "react-router";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as GoogleLogo } from "../../assets/google-logo.svg";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { AuthContext } from "../../contexts/authContext";

const useStyles = makeStyles({
  paper: {
    backgroundColor: "#f7fafc",
  },
  logoButton: {
    width: "50%",
    margin: "5% auto",
    padding: "8px",
    background: "#4285f4",
  },
  logoContainer: {
    width: "25%",
    height: "95%",
    position: "absolute",
    top: "3%",
    left: 1,
    backgroundColor: "#ffffff",
    borderradius: "5px 0 0 5px",
  },
  dialogContent: {
    padding: "20px",
  },
});

const LoginModal = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (currentUser) {
    return <Redirect to="/admin" />;
  }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className="login"
        style={{ background: "none", boxShadow: "none" }}
        onClick={handleClickOpen}
      >
        Login
      </Button>
      <Dialog
        classes={{
          paper: classes.paper,
        }}
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DonutLargeIcon
          style={{
            margin: "0 auto",
            padding: "20px",
            fontSize: "7rem",
            color: "#5e72e4",
          }}
        />
        <DialogContentText
          id="alert-dialog-slide-description"
          align="center"
          className={classes.dialogContent}
        >
          Please sign in to use our services. We won't post anything anywhere :)
        </DialogContentText>

        <Button
          className={classes.logoButton}
          onClick={() => {
            signInWithGoogle();
            handleClose();
          }}
          variant="contained"
          size="large"
          color="primary"
        >
          <div className={classes.logoContainer}>
            <GoogleLogo
              width="20"
              style={{ position: "relative", top: "5" }}
              borderradius={8}
            />
          </div>
          <span style={{ marginLeft: "20%" }}>Google</span>
        </Button>
      </Dialog>
    </div>
  );
};

export default LoginModal;
