import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outlined"
      color="inherit"
      startIcon={<ArrowBackIcon />}
      onClick={() => navigate(-1)}
      sx={{ margin: 1 }}
    >
      Back
    </Button>
  );
};

export default BackButton;
