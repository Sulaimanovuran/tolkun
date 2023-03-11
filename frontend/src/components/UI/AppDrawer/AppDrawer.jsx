import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {categories} from '../../../constants';
import logo from '../../../assets/logo.png'
import '../Layout/Layout.css';
import {Link} from "react-router-dom";

const drawerWidth = 240;

const AppDrawer = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        backgroundColor: 'red',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar >
      <img width="50px" src={logo} alt="" />
      <span className='span_logo' >TOLKUN</span>
      </Toolbar>

      <Divider />
      <List>
        {categories.map((cat, index) => (
          <ListItem key={index + cat.title} disablePadding>
            <ListItemButton component={Link} to={cat.route}>
              <ListItemText primary={cat.title} />
            </ListItemButton>
            <Divider />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default AppDrawer;