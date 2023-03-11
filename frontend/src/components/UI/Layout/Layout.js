import React from 'react';
import {Container, CssBaseline} from "@mui/material";
import AppToolbar from "../AppToolbar/AppToolbar";
import AppDrawer from "../AppDrawer/AppDrawer"
import Box from '@mui/material/Box';
import './Layout.css';

const Layout = ({children}) => {
    return (
        <>
            <CssBaseline/>
            <AppToolbar/>
            <Box sx={{ display: 'flex' }}>
              <AppDrawer/>
              <main className="Main">
                <Container maxWidth="70%" sx={{padding: "25px 10px"}}>
                  {children}
                </Container>
              </main>
            </Box>

        </>
    );
};

export default Layout;