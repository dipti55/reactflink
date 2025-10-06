// import UseCaseCard from "../components/UseCaseCard";
// import { Box, Typography, TextField, Button, InputAdornment, IconButton } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import AddIcon from '@mui/icons-material/Add';
import { Box, TextField, InputAdornment, IconButton, Button, Typography, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { Title } from "@mui/icons-material";
import DataCard from "../components/DataCard";
import { useNavigate } from 'react-router-dom';

const UseCasePage = () => {

    const usecaseData = [
        { id: 1, title: "ch_no_book_Kafka1", typeLabel: "Business Name", typeValue: "Kafka Connector for chnobook", description: "Kafka Connector for chnobook" },
        { id: 2, title: "ch_no_book_Kafka2", typeLabel: "Business Name", typeValue: "Kafka Connector for chnobook", description: "Kafka Connector for chnobook" },
        { id: 3, title: "ch_no_book_Kafka3", typeLabel: "Business Name", typeValue: "Kafka Connector for chnobook", description: "Kafka Connector for chnobook" },
        { id: 4, title: "ch_no_book_Kafka4", typeLabel: "Business Name", typeValue: "Kafka Connector for chnobook", description: "Kafka Connector for chnobook" }
    ]

    const navigate = useNavigate();
    // console.log(usecaseData)
    return (
        <>
            <Box className="displayFlex" >
                <Typography variant='h4'>
                    Use Cases
                </Typography>

                <Box display="flex" alignItems="center" gap={2} sx={{ ml: 'auto' }}>
                    <TextField
                        sx={{
                            backgroundColor: "#FFFFFF",
                            borderRadius: "4px",
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "4px",
                                "& fieldset": {
                                    borderColor: "#D9DBDD",     // light gray border
                                    borderWidth: "1px",         // force border thickness
                                },
                                "&:hover fieldset": {
                                    borderColor: "#D9DBDD",     // darker gray on hover
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#D9DBDD",     // blue on focus
                                }
                            }
                        }}
                        size="small"

                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />

                    <Button
                        variant="primaryBtn"
                        onClick={() => navigate('/use-case-details/add')}
                        startIcon={<AddIcon />}
                    >
                        Add Use Cases
                    </Button>
                </Box>
            </Box>
            {/* <Divider sx={{ my: 2, borderColor: "#D9DBDD",marginBottom: "20px"}} /> */}
            <Box className="content">
                <Grid container rowSpacing={3} columnSpacing={2}>
                    {usecaseData?.length > 0 ? (
                        usecaseData.map((item) => (
                            <Grid item size={3} key={item.id}>
                                <DataCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    typeLabel={item.typeLabel}
                                    typeValue={item.typeValue}
                                    description={item.description}
                                    type="use-case"
                                />
                            </Grid>
                        ))
                    ) : (<Typography>No use cases available.</Typography>)}
                </Grid>

                {/* <UseCaseCard />
                <UseCaseCard />
                <UseCaseCard /> */}
            </Box>
        </>
    )
}
export default UseCasePage;