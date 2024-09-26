import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useScrollTrigger,
  Slide,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const theme = useTheme(); // Access theme for background and text color adjustments

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <>
      <Slide appear={false} direction="down" in={visible}>
        <AppBar
          position="fixed"
          sx={{
            maxWidth: "80%", // Set width to 80%
            left: 0,
            right: 0,
            margin: "auto", // Centers the AppBar horizontally
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(0, 0, 0, 0.5)" // Slight transparency for dark mode
                : "rgba(255, 255, 255, 0.5)", // Slight transparency for light mode
            backdropFilter: "blur(10px)", // Blur background for effect
            transition: "background-color 0.3s, box-shadow 0.3s",
            boxShadow: trigger ? "0px 4px 20px rgba(0, 0, 0, 0.1)" : "none",
            borderRadius: "12px",
            padding: "3px 0", // Padding around the navbar
            top: "10px", // Adjust distance from the top
          }}
        >
          <Toolbar>
            <Typography
              variant="h5"
              component={RouterLink}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                color: theme.palette.mode === "dark" ? "#fff" : "#333", // Text adjusts to page theme
                fontSize: {
                  xs: "16px", // Smaller font size on mobile
                  sm: "20px", // Medium font size on tablets
                  lg: "24px", // Larger font size on desktops
                },
              }}
            >
              Bethesda Community Church
            </Typography>

            {/* Drawer for mobile devices */}
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={openDrawer}
                  onClose={handleDrawerToggle}
                >
                  <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
                    <List>
                      <ListItem button component={RouterLink} to="/">
                        <ListItemText primary="Home" />
                      </ListItem>
                      <ListItem button component={RouterLink} to="/about">
                        <ListItemText primary="About" />
                      </ListItem>
                      <ListItem button component={RouterLink} to="/sermons">
                        <ListItemText primary="Sermons" />
                      </ListItem>
                      <ListItem button component={RouterLink} to="/events">
                        <ListItemText primary="Events" />
                      </ListItem>
                      <ListItem button component={RouterLink} to="/contact">
                        <ListItemText primary="Contact" />
                      </ListItem>
                      <ListItem button component={RouterLink} to="/give">
                        <ListItemText primary="Give" />
                      </ListItem>
                    </List>
                  </Box>
                </Drawer>
              </>
            ) : (
              // Inline buttons for desktop
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Button
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#333",
                  }} // Button text adjusts to page theme
                  component={RouterLink}
                  to="/"
                >
                  Home
                </Button>
                <Button
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#333",
                  }} // Button text adjusts to page theme
                  component={RouterLink}
                  to="/about"
                >
                  About
                </Button>
                <Button
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#333",
                  }} // Button text adjusts to page theme
                  component={RouterLink}
                  to="/sermons"
                >
                  Sermons
                </Button>
                <Button
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#333",
                  }} // Button text adjusts to page theme
                  component={RouterLink}
                  to="/events"
                >
                  Events
                </Button>
                <Button
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#333",
                  }} // Button text adjusts to page theme
                  component={RouterLink}
                  to="/contact"
                >
                  Contact
                </Button>
                <Button
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#333",
                  }} // Button text adjusts to page theme
                  component={RouterLink}
                  to="/give"
                >
                  Give
                </Button>

                {/* Added Login Button */}
                <Button
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#333",
                    backgroundColor: "#6543",
                  }}
                  component={RouterLink}
                  to="/signin"
                >
                  Login
                </Button>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  );
};

export default Navbar;
