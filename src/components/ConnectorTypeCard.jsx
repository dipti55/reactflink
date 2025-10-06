




import { Card, CardContent, Typography, } from '@mui/material';
import { styled } from "@mui/system";
// Styled Card for active and inactive states
const StyledCard = styled(Card, {
    shouldForwardProp: (prop) => prop !== "active", // filter out custom prop
})(({ active }) => ({
    border: active ? "1px solid #1D86FF" : "1px solid #ccc",
    padding: 8,
    backgroundColor: active ? "#E2EFFA" : "#fff",

    "& .inner": {
        backgroundColor: "#fff",
        borderRadius: "8px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    "&:hover": {
        border: "1px solid #1D86FF",
    },

    "&:hover img": {
        filter: "none !important",
    },

    "&:hover .inner": {
        backgroundColor: active ? "#fff" : "#E2EFFA",
    },

    cursor: "pointer",
    textAlign: "center",
    borderRadius: "8px",
    width: 136,
    height: 136,

    "& svg": {
        fontSize: 16,
        color: active ? "#286090" : "#B0B0B0",
    },

    "& .MuiTypography-root": {
        fontWeight: 600,
        color: "#1E1E1E",
        fontSize: 16,
    },
}));
export default function ConnectorTypeCard({ item, selectedType, selectConnectionType }) {
    return (

        <StyledCard
            key={item.id}
            active={selectedType === item.label}
            onClick={() => selectConnectionType(item.label)}
        // onClick={() => selectConnectionType(item.id)}
        >
            <CardContent className="inner" sx={{ padding: "6px", paddingTop: "20px" }}>
                <img
                    src={item.icon}
                    alt={item.label}
                    style={{
                        height: 40,
                        filter: selectedType === item.label ? "none" : "grayscale(100%) opacity(0.5)",
                    }}
                />
                <Typography variant="body2" mt={2}>
                    {item.label}
                </Typography>
            </CardContent>
        </StyledCard>

    )
}
