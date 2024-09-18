import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useScrollTrigger,
  Slide,
  ListItemIcon, // Import ListItemIcon
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home"; // Import icons
import InfoIcon from "@mui/icons-material/Info";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import EventIcon from "@mui/icons-material/Event";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { Grid } from '@mui/material';
import BackButton from "./BackButton";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { toggleTheme } = useTheme();
  const [themeMode, setThemeMode] = useState("dark");
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

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
    <Slide appear={false} direction="down" in={visible}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: trigger ? "rgba(0, 0, 0, 0.7)" : "transparent",
          transition: "background-color 0.3s",
        }}
      >
        <Toolbar>
          
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            
            Bethesda Community Church
          </Typography>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>

        </Toolbar>
        <Drawer anchor="right" open={openDrawer} onClose={handleDrawerToggle}>
          <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
            <List>
              <ListItem button component={RouterLink} to="/">
                <ListItemIcon><HomeIcon /></ListItemIcon> {/* Icon added here */}
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={RouterLink} to="/about">
                <ListItemIcon><InfoIcon /></ListItemIcon> {/* Icon added here */}
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button component={RouterLink} to="/sermons">
                <ListItemIcon><LibraryBooksIcon /></ListItemIcon> {/* Icon added here */}
                <ListItemText primary="Sermons" />
              </ListItem>
              <ListItem button component={RouterLink} to="/events">
                <ListItemIcon><EventIcon /></ListItemIcon> {/* Icon added here */}
                <ListItemText primary="Events" />
              </ListItem>
              <ListItem button component={RouterLink} to="/contact">
                <ListItemIcon><ContactMailIcon /></ListItemIcon> {/* Icon added here */}
                <ListItemText primary="Contact" />
              </ListItem>
              <ListItem button component={RouterLink} to="/give">
                <ListItemIcon><MonetizationOnIcon /></ListItemIcon> {/* Icon added here */}
                <ListItemText primary="Give" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </Slide>
  );
};

export default Navbar;
