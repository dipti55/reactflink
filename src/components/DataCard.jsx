import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Card, IconButton, CardHeader, useTheme, Stack, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteBtn from './../assets/icons/DeleteImg.png';
const DataCard = ({ id, title, typeLabel, typeValue, description, type }) => {

    const navigate = useNavigate();
    const theme = useTheme();

    const [isHovered, setIsHovered] = useState(false);
    const [open, setOpen] = useState(false);

    const handleNavigate = () => navigate(`/use-case-details/${id}`);

    const handleEdit = () => navigate(`/edit-external-connector/${id}`);



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
            // onClick={type === "use-case" ? useCase : undefined}
            >
                <CardHeader sx={theme.mixins.flexBetween} variant="customCardHeader"
                    title={<Typography variant="buttonText">{title}</Typography>}
                    action={
                        isHovered && (
                            <Box sx={{ display: "flex" }}>
                                {type === 'external-connector' && (
                                    <IconButton size='small' onClick={handleEdit} sx={{ color: 'white' }}><EditIcon fontSize="small" /></IconButton>
                                )}

                                <IconButton onClick={handleClickOpen} size='small' sx={{ color: 'white', width: "24px" }}><DeleteIcon fontSize="small" /></IconButton>
                            </Box>
                        )
                    }
                >
                </CardHeader>
                <Box sx={{ p: 2 }} onClick={type === "use-case" ? handleNavigate : undefined}>
                    <Stack spacing={0.5} sx={{ px: 1.25, pb: 1.25 }}>
                        <Typography variant='body3' color={theme.palette.grey[200]}>
                            {typeLabel} :
                        </Typography>
                        <Typography variant='formFieldLabels' color={theme.palette.text.greyShade100}>
                            {typeValue}
                        </Typography>
                    </Stack>
                    <Paper variant='outlined' sx={{ p: 1.5 }}>
                        <Typography variant='body3' color={theme.palette.grey[200]}>Description :</Typography>
                        <Typography variant='formFieldLabels' component="p" color={theme.palette.grey[200]}>{description}</Typography>
                    </Paper>
                </Box>
            </Card>


            <Dialog open={open} onClose={()=>setOpen(false)} variant="deleteDialog">
                <Box textAlign="center">

                    {/* Circle Box from theme */}
                    <Box variant="deleteIconCircle">
                        <img src={DeleteBtn} alt="delete" width={32} height={32} />
                    </Box>

                    <DialogTitle sx={{ pt: 4.5, pb: 1 }} variant="p3">
                        Delete "{title}" use case?
                    </DialogTitle>

                    <DialogContent sx={{ pb: 4.5 }}>
                        <DialogContentText variant="p1">
                            All stages and data linked to this use case will be removed permanently.
                        </DialogContentText>
                    </DialogContent>
 
                    <DialogActions sx={{ justifyContent: "center", gap: 2 }}>
                        <Button variant="deleteConfirm" onClick={handleClose} autoFocus>
                            Yes, Delete
                        </Button>
                        <Button variant="deleteCancel" onClick={handleClose}>
                            No, Cancel
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </>
    )
}
export default DataCard;