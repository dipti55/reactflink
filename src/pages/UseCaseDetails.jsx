import { Box, Button, Typography, IconButton, useTheme, Card, CardActions, CardContent, Grid} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NameDescriptionForm from '../components/NameDescriptionForm';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


export default function UseCaseDetails() {

    const theme = useTheme();

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

            <Box>
                <Box sx={{ ...theme.mixins.flexBetween, marginLeft: '24px' }}>
                    <Typography>Stages</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'flex-end' }}>
                        <Button sx={{ marginRight: '24px' }} onClick={() => navigate('/stage-jobs/add')}
                            variant="stepOutlined"
                            endIcon={<ArrowForwardIcon />}>
                            Add Stage
                        </Button>
                    </Box>
                </Box>

                <Grid container spacing={2}>
                    <Grid size={4}>
                        <Card sx={{ minWidth: '275px' }}>
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">

                                </Typography>
                                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid size={4}>

                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">

                                </Typography>
                                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid size={4}>

                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">

                                </Typography>
                                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid size={4}>

                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">

                                </Typography>
                                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>

                    </Grid>
                </Grid>




            </Box>
        </>
    )
}