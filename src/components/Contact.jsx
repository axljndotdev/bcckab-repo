import React from "react";
import { Container, Typography, Box, IconButton } from "@mui/material";
import {
  Email,
  Phone,
  Facebook,
  Twitter,
  Instagram,
} from "@mui/icons-material";

const Contacts = () => {
  return (
    <Container sx={{ mt: 4, mb: 4, paddingTop: "64px" }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          style={{
            color: "white",
            margin: "1rem 0 2rem 0",
            fontWeight: "bold",
          }}
        >
          Contact Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          You can reach us through various channels:
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            href="mailto:blgministries214@gmail.com"
            aria-label="Email"
          >
            <Email />
          </IconButton>
          <IconButton href="tel:+639568302354" aria-label="Phone">
            <Phone />
          </IconButton>
          <IconButton
            href="https://facebook.com/bcckab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook />
          </IconButton>
          {/* <IconButton href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter />
          </IconButton>
          <IconButton href="https://instagram.com/example" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram />
          </IconButton> */}
        </Box>
      </Box>
    </Container>
  );
};

export default Contacts;
