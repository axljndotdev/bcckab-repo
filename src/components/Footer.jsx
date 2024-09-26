import React from "react";
import {
  Container,
  Box,
  Typography,
  Link,
  Grid,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import BackButton from "./BackButton";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        color: (theme) => theme.palette.text.primary,
        py: 3,
        px: 2,
        mt: "auto",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          width: "200px",
          height: "200px",
          backgroundColor: (theme) => theme.palette.secondary.main,
          borderRadius: "50%",
          top: "-50px",
          left: "-50px",
          opacity: 0.2,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          width: "150px",
          height: "150px",
          backgroundColor: (theme) => theme.palette.secondary.light,
          borderRadius: "50%",
          bottom: "-50px",
          right: "-50px",
          opacity: 0.2,
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <BackButton />
            <Typography variant="h6" gutterBottom>
              Bethesda Community Church
            </Typography>
            <Typography variant="body2" sx={{ color: "#999" }}>
              © {new Date().getFullYear()}(Alpha-v) BCC. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link
              href="/"
              color="inherit"
              underline="hover"
              sx={{ display: "block", color: "#999", mb: 1 }}
            >
              Home
            </Link>
            <Link
              href="/about"
              color="inherit"
              underline="hover"
              sx={{ display: "block", color: "#999", mb: 1 }}
            >
              About
            </Link>
            <Link
              href="/sermons"
              color="inherit"
              underline="hover"
              sx={{ display: "block", color: "#999", mb: 1 }}
            >
              Sermons
            </Link>
            <Link
              href="/events"
              color="inherit"
              underline="hover"
              sx={{ display: "block", color: "#999", mb: 1 }}
            >
              Events
            </Link>
            <Link
              href="/contact"
              color="inherit"
              underline="hover"
              sx={{ display: "block", color: "#999", mb: 1 }}
            >
              Contact
            </Link>
            <Link
              href="/donate"
              color="inherit"
              underline="hover"
              sx={{ display: "block", color: "#999", mb: 1 }}
            >
              Donate
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: "#999" }}>
              Brgy. 1, Kabankalan City, Negros Occidental
            </Typography>
            <Typography variant="body2" sx={{ color: "#999" }}>
              Email: blgministries214@gmail.com
            </Typography>
            <Typography variant="body2" sx={{ color: "#999" }}>
              Phone: +63 94884 87853
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton
                href="https://www.facebook.com/bcckab"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ "&:hover": { color: "#4267B2" } }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://www.twitter.com"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ "&:hover": { color: "#1DA1F2" } }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ "&:hover": { color: "#E1306C" } }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://www.youtube.com"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ "&:hover": { color: "#FF0000" } }}
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
