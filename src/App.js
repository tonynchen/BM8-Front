import React from 'react';
import './App.css';
import Header from './Header';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// import AddressForm from './AddressForm';
// import PaymentForm from './PaymentForm';
// import Review from './Review';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
});

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
}));


function getStepContent(step) {
  switch (step) {
    case 0:
    // return <AddressForm />;
    case 1:
    // return <PaymentForm />;
    case 2:
    // return <Review />;
    default:
    // throw new Error('Unknown step');
  }
}

export default function App() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['Your current location', 'Preference', 'Result'];

  const handleNext = () => setActiveStep(activeStep + 1);

  const handleBack = () => setActiveStep(activeStep - 1);

  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <AppBar position='static' color='default' elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant='h6' color='inherit' noWrap className={classes.toolbarTitle}>
              C-City
            </Typography>
            <nav>
              <Link variant='button' color='textPrimary' href='#' className={classes.link}>
                About
              </Link>
            </nav>
          </Toolbar>
        </AppBar>
        <Container maxWidth='lg' style={{ marginTop: '3rem' }}>
          <main>
            <Header />
          </main>
          {/* Stepper */}
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <Typography component='h1' variant='h4' align='center'>
                Checkout
              </Typography>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography variant='h5' gutterBottom>
                      Thank you!
                    </Typography>
                    <Typography variant='subtitle1'>We hope you liked your results!</Typography>
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
            </Paper>
          </main>
        </Container>
      </React.Fragment>
    </MuiThemeProvider>
  );
}
