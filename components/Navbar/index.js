"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import OWAppBar from './Appbar';
import OWDrawer from './drawer';

export const drawerWidth = 240;

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export default function Navbar({ children }) {
    const [open, setOpen] = React.useState(false);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <OWAppBar open={open} setOpen={setOpen} />
            <OWDrawer open={open} setOpen={setOpen} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );

}