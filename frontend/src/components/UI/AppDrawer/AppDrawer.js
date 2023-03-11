import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import {styled, useTheme} from "@mui/material";
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
import {Link} from "react-router-dom";

const drawerWidth = 240;
const DrawerHeader = styled('div')(({theme}) => ({
  // display: 'flex',
  // alignItems: 'center',
  // padding: theme.spacing(1),
  // justifyContent: 'center',
  backgroundColor: 'transparent'
}));
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
      <Toolbar />
      <DrawerHeader>
        {/*<Logo/>*/}
      </DrawerHeader>
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