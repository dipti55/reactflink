import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography, IconButton,
  Divider
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import React, { useState } from 'react';
import { styled } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
const steps = ['External Connectors', 'Field Mapping', 'Connection Config'];

const options = [
  { label: "Kafka API", icon: new URL('../assets/images/kafka-api.svg', import.meta.url).href, id: 1 },
  { label: "Solace", icon: new URL('../assets/images/solace.svg', import.meta.url).href, id: 2 },
  { label: "Kafka -Upsert", icon: new URL('../assets/images/kafka-upsert.svg', import.meta.url).href, id: 3 },
  { label: "JDBC", icon: new URL('../assets/images/jdbc.svg', import.meta.url).href, id: 4 },
  { label: "Rest API", icon: new URL('../assets/images/rest-api.svg', import.meta.url).href, id: 5 },
];


// Styled Card for active and inactive states
const StyledCard = styled(Card)(({ active }) => ({
  border: active ? "2px solid #1D86FF" : "1px solid #ccc",
  backgroundColor: "#fff", // outer remains white
  "& .inner": {
    backgroundColor: active ? "#E2EFFA" : "#fff",
    borderRadius: "8px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 8px",
  },
  cursor: "pointer",
  textAlign: "center",
  padding: "8px",
  borderRadius: '8px',
  width: 136,
  height: 136,
  transition: "all 0.2s ease-in-out",
  "& svg": {
    fontSize: 16,
    color: active ? "#286090" : "#B0B0B0",
  },
  "& .MuiTypography-root": {
    fontWeight: active ? 600 : 500,
    color: active ? "#1E1E1E" : "#999",
    fontSize: 16
  },
}));



const EditExternalConnector = () => {

  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [selected, setSelected] = useState(1);




  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const readyToSubmit = completedSteps() === totalSteps() - 1;

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

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div >
      {/* Breadcrumbs Navigation */}
      <Box className="displayFlex">
        <IconButton onClick={() => navigate('/external-connectors')} size="small" sx={{ marginRight: 1 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="subtitle1" fontWeight="600" sx={{ fontSize: "20px" }}>
          Event Connectors
        </Typography>
      </Box>

      {/* <Divider sx={{ my: 2, borderColor: "#D9DBDD", marginBottom: "20px" }} /> */}

      <Box className="">
        <Box sx={{ width: '100%' }} className="stepper">
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton sx={{
                  "& .MuiStepLabel-labelContainer": {
                    fontSize: "16px",
                    fontWeight: 600,
                    color:
                      index <= activeStep
                        ? "#286090"
                        : "rgba(0,0,0,0.6)"
                  }
                }} color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {allStepsCompleted() ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Box>
                  <Typography sx={{ mt: 2, mb: 1, py: 1, color: "#4D4D4D" }}>
                    Select Event Connector Type {activeStep + 1}
                  </Typography>

                  <Box display="flex" gap={2}>
                    {options.map((item) => (
                      <StyledCard
                        key={item.id}

                        active={selected === item.id}
                        onClick={() => setSelected(item.id)}
                      >
                        <CardContent className="inner">
                          <img
                            src={item.icon}
                            alt={item.label}
                            style={{
                              width: 40,
                              height: 40,
                              filter: selected === item.id ? "none" : "grayscale(100%) opacity(0.5)",
                            }}
                          />
                          <Typography variant="body2" mt={1}>
                            {item.label}
                          </Typography>
                        </CardContent>
                      </StyledCard>
                    ))}
                  </Box>


                  <Box >
                    <Card sx={{ borderRadius: 2, boxShadow: 1 }}>
                      <CardContent>
                        <Typography variant="subtitle1"
                          sx={{ fontWeight: 600, borderBottom: "1px solid #D9DBDD", color: '#4D4D4D', pb: 2 }}>
                          Connector details
                        </Typography>
                        {/* <Divider sx={{ borderColor: "#D9DBDD" }} /> */}
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Box>
                            <Typography sx={{ marginBottom: '6px', color: '#717171', fontWeight: 600 }}>Name</Typography>
                            <TextField className="custom-textfield" size="small"
                              style={{ width: '26%' }} />
                          </Box>
                          <Box>
                            <Typography sx={{ marginBottom: '6px', color: '#717171', fontWeight: 600 }}>
                              Description
                            </Typography>
                            <TextField
                              fullWidth
                              multiline
                              rows={2}
                              className="custom-textfield"
                            // sx={{ borderRadius: '4px', border: '1px solid #D9DBDD' }}
                            />
                          </Box>
                        </Box>

                      </CardContent>
                    </Card>
                  </Box>
                </Box>







                {/* next and back buttons */}
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  {activeStep !== 0 && (
                    <Button
                      color="inherit"
                      startIcon={<AddIcon />}
                      // disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{
                        backgroundColor: '#DCE3EA',
                        color: '#89939E',
                        fontSize: '16px',
                        borderRadius: '4px',
                        fontWeight: 600,
                        padding: "12px 32px",
                        textTransform: 'none'
                      }}
                    >
                      Prev
                    </Button>
                  )}
                  <Box sx={{ flex: '1 1 auto' }} />
                  {/* <Button onClick={handleNext} sx={{ mr: 1 }}>
                    Next
                  </Button> */}
                  {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography variant="caption" sx={{ display: 'inline-block' }}>
                        Step {activeStep + 1} already completed
                      </Typography>
                    ) : (
                      <Button onClick={handleComplete}
                        variant={readyToSubmit ? "contained" : "outlined"}
                        className={`step-button ${readyToSubmit ? 'contained' : 'outlined'}`}
                        endIcon={<ArrowForwardIcon />}>
                        {readyToSubmit ? 'Submit Configuration' : 'Next'}
                      </Button>
                    ))}
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>
      </Box>


      {/* Select Connector Type */}
      {/* <Typography variant="h6" style={{ marginTop: '20px', marginBottom: '10px' }}>
        Select Event Connector Type
      </Typography>
      <Grid container spacing={2}>
        {connectorTypes.map((type, index) => (
          <Grid item xs={2} key={index}>
            <Card variant={type.selected ? 'outlined' : 'elevated'}>
              <CardContent>
                <Typography variant="h6" align="center">{type.label}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}

      {/* Connector Details */}
      {/* <Typography variant="h6" style={{ marginTop: '20px' }}>
        Connector Details
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
      /> */}

      {/* Next Button */}
      {/* <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Next
      </Button> */}
    </div>
  );
};

export default EditExternalConnector;
