// UserLayouts.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Avatar } from '@mui/material';
import { Notifications } from '@mui/icons-material';
import hdfcLogo from './../assets/images/hdfcLogo.png';
import profile from './../assets/images/profile.jpg';
import BusinessIcon from '@mui/icons-material/Business';

const drawerWidth = 240;

const menuItems = [
  'Use Cases',
  'External Connectors',
  'UDFs',
  'Cache',
  'Aggregators',
  'Decision Engine- Rules',
  'Decision Engine- Model'
];

export default function UserLayouts() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}

      {/* AppBar */}
      <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: '#2b6390', height: 60, justifyContent: 'center' }}>
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: '60px !important' }}>
          <Box>
            <img src={hdfcLogo} alt="HDFC Bank" height="40" />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Notifications sx={{ color: 'white' }} />
            <Avatar alt="User1" src={profile} />
            <Typography sx={{ color: 'white' }}>User1</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {menuItems.map((text) => (
              <ListItem button key={text} selected={text === 'Use Cases'}>
                <ListItemIcon>
                  {/* <BusinessIcon /> */}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, background: '#f5f5f5', minHeight: '100vh' }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}


// import { Box } from "@mui/material"
// import Header from "../components/Header"

// const User = ()=>{
//     return(
//         <>
//         <Box>
//             <Header/>
//         </Box>
//         </>
//     )
// }

// export default User;