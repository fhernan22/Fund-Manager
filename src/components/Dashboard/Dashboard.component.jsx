import React from "react";
import Button from "@material-ui/core/Button";
import { auth } from "../../firebase/firebase.utils";

const Dashboard = () => {
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => {
        auth.signOut();
      }}
    >
      Secondary
    </Button>
  );
};

export default Dashboard;
