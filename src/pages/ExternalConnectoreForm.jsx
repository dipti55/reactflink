import { Box, Button, Card, CardContent, Typography, IconButton, CardHeader, Divider } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import React, { useState } from 'react';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ConnectorTypeCard from '../components/ConnectorTypeCard';
import NameDescriptionForm from '../components/NameDescriptionForm';
import FieldMappingContend from '../components/FieldMappingContend';
import KeyValueForm from '../components/KeyValueForm';
import StepLabel from "@mui/material/StepLabel";
const steps = ['External Connectors', 'Field Mapping and Connection Config'];

const options = [
    { label: "Kafka API", icon: new URL('../assets/images/kafka-api.svg', import.meta.url).href, id: 1 },
    { label: "Solace", icon: new URL('../assets/images/solace.svg', import.meta.url).href, id: 2 },
    { label: "Kafka -Upsert", icon: new URL('../assets/images/kafka-upsert.svg', import.meta.url).href, id: 3 },
    { label: "JDBC", icon: new URL('../assets/images/jdbc.svg', import.meta.url).href, id: 4 },
    { label: "Rest API", icon: new URL('../assets/images/rest-api.svg', import.meta.url).href, id: 5 },
];

function CustomStepIcon(props) {
    const { active, completed, icon } = props;
    console.log(props)
    return (
        <div
            style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                backgroundColor: active ? "#286090" : completed ? "#286090" : "#ccc",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
            }}
        >
            {icon} {/* always show number, not checkmark */}
        </div>
    );
}



const ExternalConnectoreForm = () => {

    const navigate = useNavigate();

    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [expanded, setExpanded] = useState([]);

    const [connectorFormData, setConnectorFormData] = useState({
        "id": null,
        "connection_type": "",
        "name": "",
        "description": "",
        "field_mapping": [
            {
                "fieldName": "",
                "type": "",
                "isDerivedColumn": "",
            },
        ],

        "connection_configurations": [
            {
                "key": "",
                "value": ""
            }
        ],
        "additional_information": [
            {
                "key": "",
                "value": ""
            }
        ]
    })

    console.log(connectorFormData)

    const selectConnectionType = (type) => {
        setConnectorFormData((prev) => ({
            ...prev,
            "connection_type": type,
        })
        )
    }

    const onChangeInput = (data) => {
        console.log(data.name)
        setConnectorFormData((prev) => ({
            ...prev,
            [data.name]: data.value,
        }))
    }


    // const addMore = ()=>{

    // }
    // isOpenNow is provided by MUI in callback n return true or false
    const handleExpand = (panel) => (event, isOpenNow) => {
        setExpanded((prev) => isOpenNow ? [...prev, panel] : prev.filter((p) => p !== panel));
    };
    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    // const readyToSubmit = completedSteps() === totalSteps() - 1;

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };
    const handleSubmitConfiguration = async () => {
        alert("Submitted")
    };

    // const handleReset = () => {
    //     setActiveStep(0);
    //     setCompleted({});
    // };

    // add new row
    const handleAddRow = (section, newRow) => {
        setConnectorFormData((prev) => ({
            ...prev,
            [section]: [...prev[section], newRow],
        }));
    };

    // Update specific row/field
    const handleChange = (section, index, field, value) => {
        const newArray = [...connectorFormData[section]];
        newArray[index][field] = value;
        setConnectorFormData((prev) => ({
            ...prev,
            [section]: newArray,
        }));
    };

    // Delete a row
    const handleDeleteRow = (section, index) => {
        setConnectorFormData((prev) => ({
            ...prev,
            [section]: prev[section].filter((_, i) => i !== index),
        }))
    }

    return (
        <div >
            {/* Breadcrumbs Navigation */}
            <Box className="displayFlex">
                <IconButton onClick={() => navigate('/external-connectors')} size="small" sx={{ marginRight: 1 }}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant='h4'>
                    External connector
                </Typography>
            </Box>

                <Box sx={{ width: '100%' }} className="stepper-container">
                    <Stepper nonLinear activeStep={activeStep}>
                        {steps.map((label, index) => (
                            <Step key={label} completed={completed[index]} >
                                <StepButton onClick={handleStep(index)}>
                                    <StepLabel StepIconComponent={CustomStepIcon} // ✅ put it here
                                       variant="linkText"
                                       sx={{
                                            "& .MuiStepLabel-labelContainer": {
                                                color:
                                                    index <= activeStep
                                                        ? "#286090"
                                                        : "rgba(0,0,0,0.6)",
                                            },
                                        }}
                                    >
                                        {label}
                                    </StepLabel>
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>

                    <React.Fragment>
                        {/* FOR STEP 1 */}
                        {activeStep === 0 && (
                            <Box sx={{ marginTop: '27px', marginRight: '24px' }}>
                                <Typography sx={{ mt: 2, mb: 1, py: 1, color: "#4D4D4D" }}>
                                    Select Event Connector Type
                                </Typography>

                                <Box display="flex" gap={2}>
                                    {options.map((item, index) => (
                                        <ConnectorTypeCard key={`connectorType${index}`} item={item} selectedType={connectorFormData.connection_type} selectConnectionType={selectConnectionType} />
                                    ))}
                                </Box>


                                <Box sx={{ marginTop: "24px" }}>
                                    <Card sx={{ borderRadius: 2, boxShadow: 1 }}>
                                        <CardHeader
                                            title={
                                                <Typography
                                                    variant="body2"
                                                    sx={{color: "#4D4D4D" }}
                                                >
                                                    Connector details
                                                </Typography>
                                            }
                                            sx={{
                                                borderBottom: "1px solid #D9DBDD",
                                                p: 2,
                                            }}
                                        />
                                        <CardContent sx={{ padding: "0px" }}>
                                            <NameDescriptionForm name={connectorFormData.name} description={connectorFormData.description} onChangeInput={onChangeInput} />

                                        </CardContent>
                                    </Card>
                                </Box>
                            </Box>
                        )}

                        {/* FOR STEP 2 */}
                        {activeStep === 1 && (
                            <Box sx={{ marginTop: '27px', marginRight: '24px' }}>
                                <Typography sx={{ mt: 2, mb: 1, py: 1, color: "#4D4D4D" }}>
                                    Field Maping and Configure Connection Parameters
                                </Typography>

                                {/* Field Maping */}
                                <Box sx={{ marginTop: "24px" }}>
                                    <Accordion expanded={expanded.includes("panel1")} onChange={handleExpand("panel1")}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                            className={`accordion-expand ${expanded ? "expanded" : ""}`}
                                        >
                                            <Typography className='nameTypo'>Field Mapping</Typography>
                                        </AccordionSummary>
                                        <Divider sx={{ borderColor: "#D9DBDD", margin: "0px 24px" }} />
                                        <AccordionDetails sx={{ padding: '12px 24px 16px', maxWidth: "83%" }}>
                                            {connectorFormData.field_mapping.map((item, index) => (
                                                <FieldMappingContend key={`fieldMapping${index}`} index={index} item={item} handleChange={handleChange} handleAddRow={handleAddRow} handleDeleteRow={handleDeleteRow} />
                                            ))}

                                        </AccordionDetails>
                                    </Accordion>
                                </Box>

                                {/* Connection Configurations */}
                                <Box sx={{ marginTop: "24px" }}>
                                    <Accordion expanded={expanded.includes("panel2")} onChange={handleExpand("panel2")}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                            className={`accordion-expand ${expanded ? "expanded" : ""}`}
                                        >
                                            <Typography className='nameTypo'>Connection Configurations</Typography>
                                        </AccordionSummary>
                                        <Divider sx={{ borderColor: "#D9DBDD", margin: "0px 24px" }} />
                                        <AccordionDetails sx={{ padding: '12px 24px 16px', maxWidth: "83%" }}>
                                            <CardContent sx={{ p: 0 }}>
                                                {connectorFormData.connection_configurations.map((item, index) => (

                                                    <KeyValueForm key={`connectionConfig${index}`} index={index} item={item} keyInput={item.key} valueInput={item.value} handleChange={handleChange} handleAddRow={handleAddRow} handleDeleteRow={handleDeleteRow} category="connection_configurations" />

                                                ))}
                                            </CardContent>
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>

                                {/* Additional Information */}
                                <Box sx={{ marginTop: "24px" }}>
                                    <Accordion expanded={expanded.includes("panel3")} onChange={handleExpand("panel3")}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                            className={`accordion-expand ${expanded ? "expanded" : ""}`}
                                        >
                                            <Typography className='nameTypo'>Additional Information</Typography>
                                        </AccordionSummary>
                                        <Divider sx={{ borderColor: "#D9DBDD", margin: "0px 24px" }} />
                                        <AccordionDetails sx={{ padding: '12px 24px 16px', maxWidth: "83%" }}>
                                            <CardContent sx={{ p: 0 }}>
                                                {connectorFormData.additional_information.map((item, index) => (

                                                    <KeyValueForm key={`addInfo${index}`} index={index} item={item} keyInput={item.key} valueInput={item.value} handleChange={handleChange} handleAddRow={handleAddRow} handleDeleteRow={handleDeleteRow} category="additional_information" />

                                                ))}
                                            </CardContent>
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>
                            </Box>
                        )}
                        {/* next and back buttons */}
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'flex-end', gap: '24px', paddingBottom: "16px" }}>
                            {activeStep !== 0 && (
                                <Button
                                    color="inherit"

                                    // disabled={activeStep === 0}
                                    onClick={handleBack}

                                    variant='outlined'
                                    className='step-button outlined'
                                    startIcon={<ArrowBack />}
                                >
                                    Prev
                                </Button>
                            )}
                            <Box sx={{ backgroundColor: "transparent" }} />
                            {activeStep !== steps.length &&
                                (activeStep === 1 ? (
                                    <Button sx={{ marginRight: '48px' }} onClick={handleSubmitConfiguration}
                                        variant="buttonTextMedium"
                                        className='step-button contained'
                                        endIcon={<ArrowForwardIcon />}>
                                        Submit Configuration
                                    </Button>
                                ) : (

                                    <Button sx={{ marginRight: '48px' }} onClick={handleComplete}
                                        variant='outlined'
                                        className='step-button outlined'
                                        endIcon={<ArrowForwardIcon />}>
                                        Next
                                    </Button>
                                ))}
                        </Box>
                    </React.Fragment>
                </Box>
         
        </div>
    );
};

export default ExternalConnectoreForm;
