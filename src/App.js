import React from 'react';
import './App.css';
import Header from './Header';
import PropTypes from 'prop-types';
import LocationForm from './LocationForm';
import PreferenceForm from './PreferenceForm';
import ResultForm from './ResultForm';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';
import Stepper from '@material-ui/core/Stepper';
import Check from '@material-ui/icons/Check';
import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from './Alert.js';
import axios from 'axios';
import Widget from './components/Widget';
import './styles/theme.scss';
import mockData from './am4chartMap/mock';
import s from './Dashboard.module.scss';

// import AddressForm from './AddressForm';
// import PaymentForm from './PaymentForm';
// import Review from './Review';

import { Helmet } from 'react-helmet';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  stepper: {
    opacity: 0,
  },
  overrides: {
    MuiPaper: {
      root: {
        color: 'rgba(255, 0, 0, 0)',
      },
    },
    MuiStepConnector: {
      line: {
        color: 'rgba(255,255,255, 0.9)',
      },
      root: {
        color: 'rgba(255,255,255, 0.9)',
      },
      horizontal: {
        color: 'rgba(255,255,255, 0.9)',
      },
      alternativeLabel: {
        color: 'rgba(255,255,255, 0.9)',
        backgroundColor: 'rgba(255,255,255, 0.9)',
      },
    },
    MuiStepLabel: {
      label: {
        color: 'rgba(255,255,255, 0.9)',
        '&$active': {
          color: 'rgba(255,255,255, 0.9)',
        },
        '&$completed': {
          color: 'rgba(255,255,255, 0.9)',
        },
      },
    },
    MuiSlider: {
      markLabel: {
        color: 'rgba(255,255,255, 0.9)',
      },
      markLabelActive: {
        color: 'rgba(255,255,255, 0.9)',
      },
    },
    MuiTextField: {
      root: {
        color: 'rgba(255,255,255, 0.9)',
      },
    },
  },
});

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#db2a34',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#db2a34',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}>
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#db2a34',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#db2a34',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  locationCard: {
    display: 'flex',
  },
  locationCardDetails: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  stepper: {
    // padding: theme.spacing(3, 0, 5),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  stepperWid: {
    margin: '1rem',
    marginLeft: '2rem',
    marginRight: '2rem',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  centerText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function App() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [location, setLocation] = React.useState('');
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');
  const [alertSeverity, setAlertSeverity] = React.useState('error');
  const [preferenceData, setPreferenceData] = React.useState({});
  const [cities, setCities] = React.useState([]);
  const steps = ['Your current location', 'Preference', 'Result'];

  const handleNext = async () => {
    if (activeStep === 0) {
      console.log(location);
      if (location === '') {
        setAlertMessage('We need your location information to proceed');
        setAlertSeverity('error');
        setAlertOpen(true);
      }
      if (await validateLocation(location)) {
        setActiveStep(activeStep + 1);
        setPreferenceData({});
      }
    } else if (activeStep === 1) {
      console.log(preferenceData);
      // TODO: Send to backend
      var config = {
        method: 'get',
        url: 'https://localhost:5000/get-city',
        params: { query: preferenceData },
      };
      try {
        var res = await axios(config);
        var data = res.data.addresses[0];

        setActiveStep(activeStep + 1);
        setCities(mockData);
      } catch (Exception) {
        setActiveStep(activeStep + 1);
        setCities(mockData);
        console.log(cities);
      }
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  }

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setAlertOpen(false);
  };

  const validateLocation = async (location) => {
    var config = {
      method: 'get',
      url: 'https://api.radar.io/v1/geocode/forward',
      headers: {
        Authorization: 'prj_live_pk_f205329de6eaf95633f3b87575b2ef9ddf0ac0a4',
      },
      params: { query: location },
    };
    var res = await axios(config);
    var data = res.data.addresses[0];
    if (data.countryCode !== 'US') {
      setAlertMessage('We currently only support US!');
      setAlertSeverity('error');
      setAlertOpen(true);
      return false;
    } else {
      return true;
    }
    // TODO: send to backend
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <LocationForm setLocation={setLocation}></LocationForm>;
      case 1:
        return <PreferenceForm setPreferenceData={setPreferenceData}></PreferenceForm>;
      case 2:
        return <ResultForm cities={cities} />;
      default:
        // throw new Error('Unknown step');
        break;
    }
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Cocity</title>
      </Helmet>
      <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleAlertClose} severity={alertSeverity}>
          {alertMessage}
        </Alert>
      </Snackbar>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth='lg' style={{ marginTop: '3rem', marginBottom: '5rem' }}>
          {/* Stepper */}
          <main className={classes.layout}>
            {/* <Paper className={classes.paper}> */}
            <Widget style={{ marginBottom: '3rem' }}>
              <Typography component='h1' variant='h4' align='center' style={{ marginTop: '1rem', color: 'rgba(244, 244, 245, 0.9)' }}>
                Find Your Next Dream Location
              </Typography>
              <Stepper activeStep={activeStep} className={classes.stepper} alternativeLabel connector={<QontoConnector />}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Grid container justify='center'>
                      <Grid item>
                        <Typography variant='h5' gutterBottom className={classes.centerText}>
                          Thank you!
                        </Typography>
                        <Typography variant='subtitle1' className={classes.centerText}>
                          We hope you liked your results!
                        </Typography>
                      </Grid>
                    </Grid>
                    <div className={classes.buttons}>
                      <Button variant='contained' color='primary' onClick={handleReset} className={classes.button}>
                        Reset
                      </Button>
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      <Button variant='contained' color='primary' onClick={handleNext} className={classes.button}>
                        {activeStep === steps.length - 1 ? 'Done' : 'Next'}
                      </Button>
                    </div>
                  </React.Fragment>
                )}
              </React.Fragment>
              {/* </Paper> */}
            </Widget>
          </main>
        </Container>
      </React.Fragment>
    </MuiThemeProvider>
  );
}
