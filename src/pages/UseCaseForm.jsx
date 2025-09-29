import { Box, Button, Card, CardContent, Typography, IconButton, CardHeader, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import NameDescriptionForm from '../components/NameDescriptionForm';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const UseCaseForm = () => {
    const navigate = useNavigate();
    return (
        <>

            <Box className="displayFlex">
                <IconButton onClick={() => navigate(-1)} size="small" sx={{ marginRight: 1 }}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h4">
                    Use Cases
                </Typography>
            </Box>
            <Box className="details">
                <NameDescriptionForm name='' description='' />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'flex-end' }}>
                <Button sx={{ marginRight: '48px' }} onClick={() => navigate('/stage-jobs/add')}
                    variant="stepOutlined"
                    endIcon={<ArrowForwardIcon />}>
                    Next
                </Button>
            </Box>


        </>
    )
}
export default UseCaseForm;