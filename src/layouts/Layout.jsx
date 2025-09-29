import { Box } from '@mui/material';
import Sidebar from "../components/Sidebar";
import Header from '../components/Header';
import { Navigate, Outlet } from 'react-router-dom';

const Layout = () => {
    const isLoggedIn = true;
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Header />
                <Sidebar />
                <div className="main-section">
                    <Outlet />
                </div>
            </Box>
        </>
    )
}
export default Layout;