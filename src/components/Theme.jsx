import { colors, createTheme } from "@mui/material";
const drawerWidth = 240;
const Theme = createTheme({

    palette: {
        common: {
            white: "#ffffff",
        },
        background: {
            default: "#FFFFFF",
            paper: "#F5F5F5",
            light: "#F6F8FC",
            blueSelected: "#E2EFFA",
            mediumBlue: "#4E7EA6",
            bodyBackground: "#F3F3F3",
            deleteBg: "#ff000021",
            priamryRed:"#ED232A",
            hoverRed:"#BD0A10",
            cancelBg:"#DFE3E8"

        },
        text: {
            primary: "#4D4D4D",
            secondary: "#717171",
            disabled: "#B3B3B3",
            primaryNavyBlue: "#286090",
            greyShade100: "#1F1F1F",
            white:"#FFFFFF",

        },
        grey: {
            100: "#4D4D4D",
            200: "#717171",
            300: "#89939E",
            400: "#B5BEC8",
            500: "#D9DBDD",
        },
        primary: {
            main: "#1D86FF",
        },
        custom: {
            boxShadowRed: "0px 0px 20px rgba(237, 35, 42, 0.6)",
            cancelBorder:"#DFE3E8"

        }
    },
    shape: {
        borderRadius: 8,
    },
    typography: {
        fontFamily: "'Open Sans',sans-serif",
        // Standard MUI variants
        // h1: { fontSize: "20px", fontWeight: 600 },
        // h2: { fontSize: "18px", fontWeight: 600 },
        // h3: { fontSize: "16px", fontWeight: 400 },
        // h5: { fontSize: "13px", fontWeight: 400 },
        // h6: { fontSize: "12px", fontWeight: 400 },
        h4: { fontSize: "20px", fontWeight: 600 },
        h5: { fontSize: "20px", fontWeight: 400 },
        body1: { fontSize: "18px", fontWeight: 600 },
        body2: { fontSize: "16px", fontWeight: 600 },
        body3: { fontSize: "14px", fontWeight: 400 },
        body4: { fontSize: "12px", fontWeight: 400 },

        buttonText: { fontSize: "16px", fontWeight: 600 },
        linkText: { fontSize: "16px", fontWeight: 400 },
        formFieldLabels: { fontSize: "14px", fontWeight: 600, display: "block" },
        formFieldInputText: { fontSize: "16px", fontWeight: 400 },
        smallBodyText: { fontSize: "12px", fontWeight: 600 },
        buttonTextMedium: { fontSize: "14px", fontWeight: 600 },


        button: { fontSize: "14px", fontWeight: 600 },

        p1: { fontSize: "14px", fontWeight: 400 },
        p2: { fontSize: "14px", fontWeight: 600 },
        p3: { fontSize: "18px", fontWeight: 600 },
        // body3: {
        //     color: "#D9DBDD",
        //     fontWeight: 400,
        //     fontSize: "14px",
        //     lineHeight: "22px",
        //     letterSpacing: "0",
        // },

    },

    mixins: {
        flexCenter: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        flexBetween: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: ({ theme }) => ({
                    zIndex: theme.zIndex.drawer + 1, // instead of hardcoding 1201
                    backgroundColor: "#286090",
                    height: 60,
                    justifyContent: "center",
                }),
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    justifyContent: "space-between",
                    minHeight: 60,
                },
            },
        },
        MuiAvatar: {
            variants: [
                {
                    props: { size: "small" },
                    style: {
                        width: 32,
                        height: 32,
                    },
                },
            ]
        },

        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    margin: 0,
                    padding: 0,
                    boxSizing: "border-box",
                    fontFamily: "'Open Sans',sans-sarif",
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                    background: "#F3F3F3",
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "4px", // global style for all buttons
                    padding: "12px 32px",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "14px",
                },
            },
            variants: [
                {
                    props: { variant: "primaryBtn" },  // custom variant
                    style: {
                        backgroundColor: "#1D86FF",
                        color: "#fff",
                        "&:hover": {
                            backgroundColor: "#286090",
                        },
                    },
                },
                {
                    props: { variant: "stepOutlined" }, // new
                    style: {
                        border: "1px solid #0671E0",
                        color: "#0671E0",
                        backgroundColor: "#fff",
                        "&:hover": {
                            backgroundColor: "#EEF5FC",
                            color: "#1D86FF",
                        },
                    },
                },
                {
                    props: { variant: "deleteConfirm" },
                    style: ({ theme }) => ({
                        backgroundColor: theme.palette.background.priamryRed,
                        color: theme.palette.text.white,
                        "&:hover": {
                            backgroundColor: theme.palette.background.hoverRed,
                        },
                    }),
                },
                {
                    props: { variant: "deleteCancel" },
                    style: ({ theme }) => ({
                        backgroundColor: theme.palette.background.cancelBg,
                        border: `1px solid ${theme.palette.custom.cancelBorder}`,
                        color: theme.palette.grey[300],
                    }),
                },
            ],
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "4px",
                },
            }
        },

        /** ✅ Custom label variants */
        MuiFormLabel: {
            variants: [
                {
                    props: { variant: "labelSmall" },
                    style: {
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#717171",
                        marginBottom: "4px",
                    },
                },
                {
                    props: { variant: "labelMedium" },
                    style: {
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#717171",
                        marginBottom: "6px",
                    },
                },

            ],
            styleOverrides: {
                root: {
                    "&.Mui-focused": {
                        color: "#717171", // prevent blue highlight
                    },
                },
            },
        },

        MuiInputLabel: {
            variants: [
                {
                    props: { variant: "labelMedium" },
                    style: {
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#717171",
                    },
                },
            ],
            styleOverrides: {
                root: {
                    "&.Mui-focused": {
                        color: "#717171",
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: "#FFFFFF",
                    borderRadius: 8,
                    boxShadow: 2,
                    transition: "border-color 0.3s",
                },
            },
            variants: [{
                props: { variant: "customCard" },
                style: ({ theme }) => ({
                    border: "1px solid #D9D9D9",
                    "&:hover": {
                        borderColor: "#286090",
                        "& .MuiCardHeader-root": {
                            backgroundColor: theme.palette.background.mediumBlue,
                        },
                        "& .MuiCardHeader-root .MuiTypography-root": {
                            color: theme.palette.common.white,
                        },
                        // "& .MuiCardHeader-action ": {
                        //     margin: "0 auto",
                        // },
                    }
                })
            }]
        },
        MuiCardHeader: {
            variants: [
                {
                    props: { variant: "customCardHeader" },
                    style: ({ theme }) => ({
                        cursor: 'pointer',
                        minHeight: '48px',
                        padding: '13px 24px',
                        "& .MuiTypography-root": {
                            color: theme.palette.text.greyShade100,
                        },
                        backgroundColor: theme.palette.background.blueSelected,
                        "&:hover": {
                            backgroundColor: theme.palette.background.mediumBlue,
                            "& .MuiTypography-root": {
                                color: theme.palette.common.white,
                            },
                            "& .MuiSvgIcon-root": {
                                color: theme.palette.common.white,
                            },
                        },
                    })
                }
            ]
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: "#FFFFFF", // pure white
                },
            },
        },

        /* MuiListItem: {
             styleOverrides: {
                 root: {
                     width: "calc(100% - 30px)",
                     margin: "0 auto",
                     paddingRight: "6px",
                     borderRadius: "8px",
                     "&:hover": {
                         backgroundColor: "#286090",
                         "& .MuiTypography-root": {
                             color: "#fff", // text white on hover
                         },
                         "& .MuiListItemIcon-root": {
                             color: "#fff", // icons white on hover (for MUI icons)
                         },
                     },
                     "&.Mui-selected": {
                         backgroundColor: "#D5F2FF",
                         "&:hover": {
                             backgroundColor: "#D5F2FF", // keep active same on hover
                         },
                     },
                 },
             },
         }, */

        MuiListItemButton: {
            variants: [
                {
                    props: { variant: "sidebar" },
                    style: ({ theme }) => ({
                        borderRadius: theme.shape.borderRadius,
                        margin: theme.spacing(0.5, 1.5),
                        "&:hover": {
                            backgroundColor: "#286090",
                            "& .MuiTypography-root": {
                                color: theme.palette.common.white,
                            },
                            "& .MuiListItemIcon-root": {
                                color: theme.palette.common.white,
                            },
                        },
                        "&.Mui-selected": {
                            backgroundColor: "D5F2FF",
                            "&:hover": {
                                backgroundColor: '#286090',
                            },
                        },
                    }),
                },
            ],
        },
        MuiPaper: {
            variants: [
                {
                    props: { variant: "dashedContainer" },
                    style: ({ theme }) => ({
                        border: `2px dashed ${theme.palette.grey[500]}`,
                        borderRadius: theme.shape.borderRadius,
                        backgroundColor: theme.palette.background.light,
                        minHeight: 310,
                        padding: theme.spacing(3),
                    }),
                },
                {
                    props: { variant: "outlined" },
                    style: ({ theme }) => ({
                        borderRadius: 8,
                        backgroundColor: theme.palette.background.bodyBackground,
                        padding: "12px",
                        boxShadow: "none",
                        "&:hover": {
                            backgroundColor: theme.palette.background.blueSelected,
                        },
                    })
                },
            ],
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: "#FFFFFF",
                    boxShadow: "none"
                }

            },
            variants: [
                {
                    props: { variant: "outlinedBlue" }, // 👈 custom variant
                    style: {
                        border: "1px solid #1D86FF",
                        borderRadius: "8px",
                        boxShadow: "none",
                        marginBottom: "16px",
                        "& .MuiAccordionSummary-root": {
                            padding: "0px 24px",
                        },
                        "& .MuiAccordionSummary-content": {
                            margin: "20px 0",
                        },
                    },
                },
            ],
        },
        MuiChip: {
            variants: [
                {
                    props: { variant: "selectable" },
                    style: ({ theme }) => ({
                        borderRadius: theme.shape.borderRadius,
                        fontSize: "13px",
                        fontWeight: 400,
                        cursor: "pointer",
                        border: `1px solid ${theme.palette.grey[300]}`,
                        // Unselected chip background
                        backgroundColor: "transparent",
                        color: theme.palette.text.primary,
                        // Selected chip styles
                        "&.MuiChip-filled": {
                            backgroundColor: theme.palette.background.blueSelected,
                            color: theme.palette.text.primaryNavyBlue,
                            borderColor: "#4E7EA6",
                            fontWeight: 500,
                            "&:hover": {
                                backgroundColor: theme.palette.background.blueSelected,
                            },
                        },
                        "&:hover": {
                            backgroundColor: "transparent",
                        },

                        // Delete icon styles
                        "& .MuiChip-deleteIcon": {
                            display: "none", // hide by default
                        },

                        // If chip is selected, show delete icon
                        "&.MuiChip-filled .MuiChip-deleteIcon": {
                            display: "flex",
                            color: "#286090",
                            width: "16px",
                            height: "16px"
                        },
                    }),
                },
            ]
        },
        MuiBox: {
            variants: [
                {
                    props: { variant: "deleteIconCircle" },
                    style: ({ theme }) => ({
                        display: "inline-flex",
                        boxShadow: theme.palette.custom.boxShadowRed,
                        backgroundColor: theme.palette.background.deleteBg,
                        borderRadius: "50%",
                        alignItems: "center",
                        justifyContent: "center",
                    }),
                }
            ]
        },
        MuiDialog: {
            variants: [
                {
                    props: { variants: "deleteDialog" },
                    style: {
                        "& .MuiDialog-paper": {
                            width: "442px",
                            height: "334px",
                            borderRadius: 16,
                            padding: "36px",
                        },
                        "@media (max-width:600px)": {
                            "& .MuiDialog-paper": {
                                width: "90%",
                                height: "auto",
                            },
                        },
                    },
                }
            ]
        }
    }
});


export default Theme;