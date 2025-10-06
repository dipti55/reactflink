import { AppBar, Box, Toolbar, Typography, Avatar } from '@mui/material';
import { Notifications } from '@mui/icons-material';
import hdfcLogo from './../assets/images/hdfcLogo.png';
import profile from './../assets/images/hdfcProfile.png';


const Header = () => {

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <img src={hdfcLogo} alt="logo" />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Notifications sx={{ color: '#fff' }} />
                        <Avatar alt="User1" size="small" src={profile} />
                        <Typography variant='body3'>System</Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;