
import { Box, Drawer, ListItemButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { useCase, externalConnectors, udfs, cache, aggregators, decisionEngineRules, decisionEngineModel } from '../assets/icons/icons';

import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {

    const location = useLocation();
    // const drawerWidth = 280;
    const drawerWidth = 240;

    const menuItems = [
        { id: 1, text: "Use Cases", icon: useCase, path: '/use-cases' },
        { id: 2, text: "External Connectors", icon: externalConnectors, path: '/external-connectors' },
        { id: 3, text: "UDFs", icon: udfs, path: '/udfs' },
        { id: 4, text: "Cache", icon: cache, path: '/cache' },
        { id: 5, text: "Aggregators", icon: aggregators, path: '/aggregators' },
        { id: 6, text: "Decision Engine-Rules", icon: decisionEngineRules, path: '/decision-rules' },
        { id: 7, text: "Decision Engine-Model", icon: decisionEngineModel, path: '/decision-model' }
    ];


    return (
        <>
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
                        {menuItems.map(({ id, text, icon: IconComponent, path }) => (
                            <ListItemButton variant="sidebar"
                                key={`menu-${id}`} component={Link} to={path}
                                selected={location.pathname === path}>
                                <ListItemIcon>
                                    <IconComponent width="24" height="24" />
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography variant='body3' sx={{ color: '#000000' }}>
                                        {text}
                                    </Typography>
                                } />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    )

}

export default Sidebar;