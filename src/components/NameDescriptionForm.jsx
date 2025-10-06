
import { Box,TextField, Typography} from '@mui/material';
export default function NameDescriptionForm({ name, description,onChangeInput }) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", p: 3 }}>
            <Box>
                <Typography variant='formFieldLabels' sx={{ marginBottom: '6px', color: '#717171'}}>Name</Typography>
                <TextField className="custom-textfield" size="small" name="name"
                    style={{ width: '26%' }} value={name} onChange={(e) => onChangeInput(e.target)} />
            </Box>
            <Box sx={{ mt: 2 }}>
                <Typography variant='formFieldLabels' sx={{ marginBottom: '6px', color: '#717171' }}>
                    Description
                </Typography>
                <TextField
                    name="description"
                    fullWidth
                    multiline
                    rows={2}
                    className="custom-textfield"
                    value={description}
                    onChange={(e) => onChangeInput(e.target)}
                />
            </Box>
        </Box>
    )
}