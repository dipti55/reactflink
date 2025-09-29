// import UseCaseCard from "../components/UseCaseCard";
// import { Box, Typography, TextField, Button, InputAdornment, IconButton } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import AddIcon from '@mui/icons-material/Add';
import { Box, TextField, InputAdornment, IconButton, Button, Typography, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import DataCard from "../components/DataCard";
import { useNavigate } from 'react-router-dom';

const ExternalConnectorsPage = () => {
    const externalConnectorsData = [
        { id: 1, title: "external conn1", typeLabel: "Connction type", typeValue: "Kafka Connector for chnobook", description: "Kafka Connector for chnobook" },
        { id: 2, title: "external conn2", typeLabel: "Connction type", typeValue: "Kafka Connector for chnobook", description: "Kafka Connector for chnobook" },
        { id: 3, title: "external conn3", typeLabel: "Connction type", typeValue: "Kafka Connector for chnobook", description: "Kafka Connector for chnobook" },
        { id: 3, title: "external conn3", typeLabel: "Connction type", typeValue: "Kafka Connector for chnobook", description: "Kafka Connector for chnobook" },
        { id: 4, title: "external conn4", typeLabel: "Connction type", typeValue: "Kafka Connector for chnobook", description: "Kafka Connector for chnobook" }
    ]

    const navigate = useNavigate()
    return (
        <>
            <Box className="displayFlex">
                <Typography variant='h4'>
                    External Connectors
                </Typography>

                <Box display="flex" alignItems="center" gap={2} sx={{ ml: 'auto' }}>
                    <TextField
                        sx={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: "4px",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "4px",
                                "& fieldset": {
                                    borderColor: "#D9DBDD",
                                    borderWidth: "1px",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#D9DBDD",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#D9DBDD",
                                }
                            }
                        }}
                        size="small"

                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />

                    <Button
                        variant="primaryBtn"

                        startIcon={<AddIcon />}
                        onClick={() => navigate('/external-connectors/add')}
                    >
                        Add External Connectors
                    </Button>
                </Box>
            </Box>
            {/* <Divider sx={{ my: 2, borderColor: "#D9DBDD",marginBottom: "20px" }} /> */}
            <Box className="content">
                <Grid container rowSpacing={3} columnSpacing={2}>
                    {externalConnectorsData?.length > 0 ? (
                        externalConnectorsData.map((item) => (
                            <Grid item size={3} key={item.id}>
                                <DataCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    typeLabel={item.typeLabel}
                                    typeValue={item.typeValue}
                                    description={item.description}
                                    type="external-connector"
                                />
                            </Grid>
                        ))
                    ) : (<Typography>No external connectors available.</Typography>)}

                </Grid>


            </Box>
        </>
    )
}
export default ExternalConnectorsPage;