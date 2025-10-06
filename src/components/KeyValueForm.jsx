import { Box, Button,TextField, Typography } from '@mui/material';
import { Grid } from "@mui/system";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function KeyValueForm({index,handleChange,handleAddRow,handleDeleteRow,keyInput,valueInput,category}) {
    return (
        <>
            <Grid container spacing={2} key={`connectionConfig${index}`} sx={{ marginBottom: '10px' }}>
                {/* Key */}
                <Grid size={4}>
                    <Typography variant='formFieldLabels'
                        sx={{
                            mb: "6px",
                            color: "#717171",
                        }}
                    >
                        Key
                    </Typography>
                    <TextField size="small" fullWidth className="custom-textfield" value={keyInput} onChange={(e) => handleChange(category, index, "key", e.target.value)} />
                </Grid>


                {/* Value */}
                <Grid size={4} sx={{ position: "relative" }}>
                    <Typography variant='formFieldLabels'
                        sx={{
                            mb: "6px",
                            color: "#717171",
                        }}
                    >
                        Value
                    </Typography>
                    <TextField size="small" fullWidth className="custom-textfield" value={valueInput} onChange={(e) => handleChange(category, index, "value", e.target.value)} />

                    <Box sx={{ position: "absolute", left: '108%', top: '38px' }}>
                        {/*add button */}
                        {index === 0 && (

                            <Button variant="text" startIcon={
                                <AddCircleOutlineIcon
                                    sx={{ fontSize: 20, color: "#1D86FF", marginRight: "4px" }} // customize size & color
                                />}
                                sx={{ fontSize: "14px", textTransform: "none", color: "#1D86FF", padding: '0px', "& .MuiButton-startIcon": { marginRight: "4px", marginLeft: '-8px' } }}
                                onClick={() => handleAddRow(category, { key: "", value: "" })}>
                                Add
                            </Button>
                        )}

                        {/*delete button */}
                        {index > 0 && (
                            <RemoveCircleOutlineIcon sx={{ color: "red", cursor: "pointer" }}
                                fontSize="small"
                                onClick={() => handleDeleteRow(category, index)} />
                        )}
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}