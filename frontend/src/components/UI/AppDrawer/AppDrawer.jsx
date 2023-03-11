import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
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