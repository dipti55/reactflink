import { Badge, ListItem, ListItemText, ListItemIcon, Typography } from '@mui/material';



export default function ComponentListItem({ item, onSelect}) {
    return (

        <ListItem
        onClick={onSelect}
         sx={{
            backgroundColor: "#FAFBFC",
            width: "100%",
            borderRadius: 2,
            padding: '24px',
            margin: '0px',
            border: "1px dashed transparent",
            borderImage: "repeating-linear-gradient(45deg, #D9DBDD 0, #D9DBDD 5px, transparent 5px, transparent 10px) 5",
            cursor: "pointer",
            "&:hover, &:active": {
                backgroundColor: "#E2EFFA",
                borderColor: "#286090",
                borderImage: "repeating-linear-gradient(45deg, #286090 0, #286090 5px, transparent 5px, transparent 10px) 5",
                "& .MuiListItemIcon-root": {
                    color: "#286090",
                },
                "& .MuiListItemText-root .MuiTypography-root": {
                    color: "#286090",
                },
            },
        }}>
            <ListItemIcon sx={{
                "&:hover svg": {
                    stroke: "#1565c0", // 👈 icon turns blue on hover
                },
            }}>
                {item.icon}
            </ListItemIcon>
            {/* <ListItemText slotProps={{
                primary: {
                    sx: {
                        fontSize: '16px',
                        fontWeight: 600,
                    },
                },
            }} primary={item.label} /> */}
            <Typography sx={{ width: "100%" }} variant="buttonText">{item.label}</Typography>
            {item.badgeCount ? (
                <Badge
                    badgeContent={item.badgeCount}
                    color="error"
                    sx={{
                        "& .MuiBadge-badge": {
                            right: 10, width: 28,
                            height: 28,
                            borderRadius: "50%",
                            backgroundColor: "#ED232A",
                        }
                    }}
                />
            ) : null}

        </ListItem>


    )
}