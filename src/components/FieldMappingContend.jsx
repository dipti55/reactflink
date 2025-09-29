
import { Box, Button, TextField, Typography, } from '@mui/material';
import { Grid } from "@mui/system";
import { FormControl, Select, MenuItem, FormLabel } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function FieldMappingContend({index, item, handleChange,handleAddRow, handleDeleteRow}) {
    return (
        <Grid container spacing={2} key={index} sx={{ marginBottom: '10px' }}>
            {/* Name */}
            <Grid size={4}>
                <Typography variant='body2'
                    sx={{
                        mb: "6px",
                        color: "#717171",
                    }}
                >
                    Field name
                </Typography>
                <TextField size="small" fullWidth className="custom-textfield" value={item.fieldName}
                    onChange={(e) => handleChange("field_mapping", index, "fieldName", e.target.value)} />
            </Grid>

            {/* ConnectionType */}
            <Grid size={4}>

                <FormControl fullWidth size="small">
                    <FormLabel variant="labelMedium">Type</FormLabel>
                    <Select
                        sx={{
                            minHeight: "45px",
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#ccc', // No blue highlight
                            },
                        }}
                        value={item.type}
                        onChange={(e) => handleChange("field_mapping", index, "type", e.target.value)}
                    /* onChange={(e) => setFormat(e.target.value)}*/
                    >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="JSON">JSON</MenuItem>
                        <MenuItem value="XML">XML</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            {/* DerivedColumns */}
            <Grid size={4} sx={{ position: "relative" }}>
                <FormControl fullWidth size="small">
                    <FormLabel variant="labelMedium">IsDerivedColumn</FormLabel>
                    <Select
                        sx={{
                            minHeight: "45px",
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#ccc', // No blue highlight
                            },
                        }}
                        value={item.isDerivedColumn}
                        onChange={(e) => handleChange("field_mapping", index, "isDerivedColumn", e.target.value)}
                    >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                    </Select>
                </FormControl>

                <Box sx={{ position: "absolute", left: '108%', top: '38px' }}>
                    {index === 0 && (
                        <Button
                            variant="text"
                            startIcon={
                                <AddCircleOutlineIcon
                                    sx={{ fontSize: 20, color: "#1D86FF", marginRight: "4px" }} // customize size & color
                                />
                            }
                            sx={{
                                fontSize: "14px", textTransform: "none", color: "#1D86FF", padding: '0px', "& .MuiButton-startIcon": {
                                    marginRight: "4px", marginLeft: '-8px'    // applies only to icon spacing
                                }
                            }}
                            onClick={() => handleAddRow("field_mapping", { fieldName: "", type: "", isDerivedColumn: "" })}
                        >
                            Add
                        </Button>
                    )}
                    {index > 0 && (
                        <RemoveCircleOutlineIcon sx={{ color: "red", cursor: "pointer" }}
                            fontSize="small"
                            onClick={() => handleDeleteRow("field_mapping", index)} />
                    )}
                </Box>
            </Grid>

        </Grid>
    )
}