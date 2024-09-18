import React from "react";
import { Typography, Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Box textAlign="center" my={4}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ color: "text", margin: "1rem", fontWeight: 'bold' }}
      >
        <br></br>Welcome to BCC
      </Typography>
      <Typography
        variant="h5"
        paragraph
        style={{ color: "#888", margin: "1rem" }}
      >
        Join us for worship and fellowship.
      </Typography>
      <Button
        style={{ margin: "0 1rem" }}
        variant="contained"
        color="secondary"
        component={Link}
        to="/about"
      >
        Learn More
      </Button>
    </Box>
  );
};

export default Banner;
