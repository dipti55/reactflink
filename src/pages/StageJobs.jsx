import { Box, Card, CardContent, Typography, IconButton, CardHeader, Grid, Stack, useTheme, Paper, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NameDescriptionForm from '../components/NameDescriptionForm';
import ComponentListItem from '../components/ComponentListItem';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBack from '@mui/icons-material/ArrowBack';

import { ExternalConnectorIcon, DataAggregatorIcon, FiltersIcon, ModelsIcon, RulesIcon } from '../assets/icons/icons';
import SelectComponentBox from '../components/SelectComponentBox';
import { useState } from 'react';
export default function StageJobs() {
    const componentList = [
        {
            label: "External Connectors", icon: <ExternalConnectorIcon width={28} height={28} />, badgeCount: 2, list: [
                { id: 1, name: "Connector A", selected: false },
                { id: 2, name: "Connector B", selected: false }
            ]
        },
        {
            label: "Data Aggregators", icon: <DataAggregatorIcon width={28} height={28} />, badgeCount: 3, list: [
                { id: 1, name: "Aggregator X", selected: false },
                { id: 2, name: "Aggregator Y", selected: false }
            ]
        },
        { label: "Filters", icon: <FiltersIcon width={28} height={28} />, list: [{ id: 1, name: "Filter Alpha" }] },
        { label: "Models", icon: <ModelsIcon width={28} height={28} />, list: [{ id: 1, name: "Models Alpha" }] },
        { label: "Rules", icon: <RulesIcon width={28} height={28} />, list: [{ id: 1, name: "Rules Alpha" }] },
    ];
    const [selectedComponents, setSelectedComponents] = useState([])

    const theme = useTheme();
    const handleToggle = (sectionLabel, chipId) => {
        setSelectedComponents((prev) =>
            prev.map((section) =>
                section.label === sectionLabel
                    ? {
                        ...section,
                        list: section.list.map((chip) =>
                            chip.id === chipId
                                ? { ...chip, selected: !chip.selected }
                                : chip
                        ),
                    }
                    : section
            )
        );
    };


    const handleSelect = (comp) => {
        setSelectedComponents((prev) => {
            // avoid duplicates
            if (prev.some((c) => c.label === comp.label)) return prev;
            return [...prev, comp];
        });
    };

    console.log(selectedComponents)

    const navigate = useNavigate();
    return (

        <>
            <Box className="displayFlex">
                <IconButton onClick={() => navigate(-1)} size="small" sx={{ marginRight: 1 }}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h4">
                    Stage/Jobs
                </Typography>
            </Box>

            <Box>


                <Grid container spacing={2} sx={{ p: 3 }}>
                    {/* Left side form and aggregators */}
                    <Grid size={8} spacing={2}>
                        <Stack spacing={2}>
                            <Card sx={{ borderRadius: 2, boxShadow: 1 }}>
                                <CardContent sx={{ padding: "0px", paddingBottom: "0px" }}>
                                    <NameDescriptionForm name='' description='' />
                                </CardContent>

                            </Card>
                            <Card sx={{ borderRadius: 2, boxShadow: 1 }}>
                                <CardContent sx={{ p: 0, "&:last-child": { pb: 0, } }}>
                                    <Paper variant="dashedContainer" >
                                        {selectedComponents.length === 0 ? (

                                            <Typography sx={theme.mixins.flexCenter} variant='h5' color="grey.300">
                                                Select components from the left to
                                                configure this stage
                                            </Typography>
                                        ) : (

                                            selectedComponents.map((item, index) => (
                                                <SelectComponentBox
                                                    key={index}
                                                    title={`Select ${item.label}`}
                                                    items={item.list}
                                                    onToggle={handleToggle}
                                                />
                                            ))

                                        )}


                                    </Paper>
                                </CardContent>

                            </Card>
                        </Stack>

                    </Grid>

                    {/* Right side components */}
                    <Grid size={4}>
                        <Card sx={{ borderRadius: 2, boxShadow: 1, padding: "0px 16px" }}>
                            <CardHeader sx={{ padding: "0px" }}
                                title={<Typography variant='h4' align='center' sx={{ padding: "24px 0", borderBottom: '1px solid #D9DBDD' }}>Available Components</Typography>}
                            />
                            <CardContent sx={{ padding: "0px" }}>
                                {/* <List sx={{ padding: "0px", paddingTop:"24px" }} > */}
                                <Stack spacing={2.75} sx={{ paddingTop: "24px" }}>
                                    {componentList.map((item, index) => (
                                        <ComponentListItem key={index} item={item} onSelect={() => handleSelect(item)} />

                                    ))}

                                </Stack>
                            </CardContent>

                        </Card>

                        <Box sx={{ ...theme.mixins.flexCenter, gap: 3, mt: 4 }}>
                            <Button onClick={() => navigate('/stage-jobs/add')}
                                variant="stepOutlined"
                                startIcon={<ArrowBack />}>
                                Prev
                            </Button>

                            <Button onClick={() => navigate('/stage-jobs/add')}
                                variant="stepOutlined"
                                endIcon={<ArrowForwardIcon />}>
                                Next
                            </Button>
                        </Box>

                    </Grid>
                </Grid>
            </Box>

        </>
    )

}