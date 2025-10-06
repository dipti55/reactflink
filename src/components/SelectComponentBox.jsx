import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Divider,
    Box, Chip, IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function SelectComponentBox({ title, items, onToggle }) {
    console.log(items);

    return (
        <Accordion
            variant="outlinedBlue"
            aria-controls="panel1-content"
            id="panel1-header"
        >
            <AccordionSummary

                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography className='nameTypo'>{title}</Typography>
                {/* <IconButton size="small">
                    <DeleteOutlineIcon color="#1D86FF" />
                </IconButton> */}
            </AccordionSummary>
            <Divider sx={{ borderColor: "#D9DBDD", margin: "0px 24px" }} />
            <AccordionDetails sx={{ padding: '12px 24px 16px' }}>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {items.map((item, index) => (
                        <Chip
                            key={item.id || index}
                            label={item.name}
                            variant="selectable"
                            className={item.selected ? "MuiChip-filled" : ""}
                            onClick={() => onToggle(title.replace("Select ", ""), item.id)}
                            onDelete={
                                item.selected
                                    ? () => onToggle(title.replace("Select ", ""), item.id)
                                    : undefined
                            }
                        />
                    ))}
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}

