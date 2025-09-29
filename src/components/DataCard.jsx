import { Box, Typography, Card, IconButton, CardHeader, useTheme } from '@mui/material';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteBtn from './../assets/icons/DeleteImg.png'
const DataCard = ({ id, title, typeLabel, typeValue, description, type }) => {
    const theme = useTheme();
    console.log(title)
    const [isHovered, setIsHovered] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const useCase = () => {
        navigate(`/use-case-details/${id}`)
    }
    const editConnector = () => {
        navigate(`/edit-external-connector/${id}`)
    }



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Card variant='customCard' sx={{ cursor: type === "use-case" ? "pointer" : "default" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={type === "use-case" ? useCase : undefined}
            >
                <CardHeader sx={{ ...theme.mixins.flexBetween }} variant="customCardHeader"
                    title={<Typography variant="buttonText">{title}</Typography>}
                    action={
                        isHovered && (
                            <Box sx={{ display: "flex" }}>
                                {type === "external-connector" ? (
                                    <IconButton size='small' sx={{ color: 'white' }}><EditIcon onClick={() => editConnector(id)} fontSize="small" /></IconButton>
                                ) : ("")}

                                <IconButton onClick={handleClickOpen} size='small' sx={{ color: 'white' }}><DeleteIcon fontSize="small" /></IconButton>
                            </Box>
                        )
                    }
                >
                </CardHeader>
                <Box sx={{ padding: "12px" }}>
                    <Box sx={{ padding: "10px", paddingTop: "0px" }}>
                        <Typography variant='formFieldLabels' sx={{ color: "#717171" }}>
                            {typeLabel} :
                        </Typography>
                        <Typography variant='formFieldLabels' sx={{ color: "#1F1F1F" }}>
                            {typeValue}
                        </Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "#F3F3F3", borderRadius: " 8px", padding: "12px" }}>
                        <Typography variant='body3' sx={{ color: "#717171" }}>Description :</Typography>
                        <Typography variant='formFieldLabels' component="p" sx={{ color: "#717171" }}>{description}</Typography>
                    </Box>
                </Box>
            </Card>


            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={false}
                sx={{
                    "& .MuiDialog-paper": {
                        width: { xs: "90%", sm: 442 },   // 90% on mobile, 442px on desktop
                        height: { xs: "auto", sm: 334 }, // auto on mobile, fixed 334px on desktop
                        borderRadius: 2,
                        padding: '36px'
                    },
                }}
            >
                <Box textAlign="center">
                    <Box sx={{ display: 'inline-flex', boxShadow: '0px 0px 20px rgba(237, 35, 42, 0.6)', backgroundColor: '#ff000021', borderRadius: '50%' }}>
                        <img
                            src={DeleteBtn}
                            alt="delete"
                            style={{ width: '32px', height: '32px' }}
                        />
                    </Box>

                    <DialogTitle sx={{ paddingTop: '36px', paddingBottom: ' 8px' }} variant='p3'>Delete “Money Mule” use case?</DialogTitle>

                    <DialogContent sx={{ paddingBottom: "36px" }}>
                        <DialogContentText variant='p1'>
                            All stages and data linked to this use case will be removed permanently.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>

                        <Button
                            variant="contained"
                            color="error"
                            onClick={handleClose} autoFocus
                            sx={{ backgroundColor: "#ED232A", "&:hover": { bgcolor: "#BD0A10" } }}
                        >
                            Yes, Delete
                        </Button>
                        <Button
                            variant="outlined"
                            color="inherit"
                            onClick={handleClose}
                            sx={{ backgroundColor: '#DFE3E8', color: '#89939E', border: '1px solid #DFE3E8' }}
                        >
                            No, Cancel
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog >
        </>
    )
}
export default DataCard;