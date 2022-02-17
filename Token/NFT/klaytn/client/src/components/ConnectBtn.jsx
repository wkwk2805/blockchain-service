import React from "react";
import Button from "@mui/material/Button";

const ConnectBtn = ({ onClick }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      Connect Button
    </Button>
  );
};

export default ConnectBtn;
