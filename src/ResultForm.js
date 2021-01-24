import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import { Grid } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from './Alert.js';
import axios from 'axios';
import Map from './am4chartMap/am4chartMap';
import Widget from './components/Widget';
import { Row, Col } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '2rem',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  map: {
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
}));

export default function InputAdornments(props) {
  const classes = useStyles();
  const [location, setLocation] = React.useState('');
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');
  const [alertSeverity, setAlertSeverity] = React.useState('error');
  const [open, setOpen] = React.useState(false);

  const handleMouseDownLocation = (event) => {
    event.preventDefault();
  };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setAlertOpen(false);
  };

  return (
    <>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color='inherit' />
      </Backdrop>
      <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleAlertClose} severity={alertSeverity}>
          {alertMessage}
        </Alert>
      </Snackbar>
      {/* <Grid container justify='center' alignContent='center'>
        <Grid item md={12}>
          <div className={classes.map}>
            <Map></Map>
          </div>
        </Grid>
      </Grid> */}
      <Row>
        <Col md={12}>
          <Widget className='bg-transparent'>
            <Map cities={props.cities} />
          </Widget>
        </Col>
      </Row>
    </>
  );
}
