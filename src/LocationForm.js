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
import Map from './am4chartMap/am4chartMap';
import axios from 'axios';

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
}));

export default function InputAdornments(props) {
  const classes = useStyles();
  console.log(props);
  const [location, setLocation] = React.useState('');
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');
  const [alertSeverity, setAlertSeverity] = React.useState('error');
  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleClickLocation = () => {
    if (location.length > 0) {
      axios
        .get(
          "https://api.radar.io/v1/geocode/forward",
          { params: { query: location } },
          {
            headers: {
              Authorization: `prj_live_pk_f205329de6eaf95633f3b87575b2ef9ddf0ac0a4`,
            },
          }
        )
        .then(function (res) {
          console.log(res.data);
        });
    } else {
      console.log("here");
      if (navigator.geolocation) {
        setOpen(true);
        setTimeout(function () {
          setOpen(false);
          setAlertMessage('Can not get your location, try entering manually as City, State');
          setAlertSeverity('error');
          setAlertOpen(true);
        }, 10000);
        navigator.geolocation.getCurrentPosition(
          function (position) {
            let lat = parseFloat(position.coords.latitude);
            let long = parseFloat(position.coords.longitude);
            console.log('Latitude is :', position.coords.latitude);
            console.log('Longitude is :', position.coords.longitude);
            axios
              .get(`https://api.radar.io/v1/geocode/reverse?coordinates=${lat},${long}`, {
                headers: {
                  Authorization: `prj_live_pk_f205329de6eaf95633f3b87575b2ef9ddf0ac0a4`,
                },
              })
              .then(function (res) {
                // TODO: send to backend
                var data = res.data.addresses[0];
                console.log(data);
                setLocation(data.city + ', ' + data.stateCode);
                setOpen(false);
              });
          },
          function () {
            console.log('error in locating');
          }
        );
      } else {
        console.log('Geolocation not available.');
        setAlertMessage('You are not logged in!');
        setAlertSeverity('error');
        setAlertOpen(true);
      }
    }
  };

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
      <Grid container justify='center'>
        <Grid item md={8}>
          <div className={classes.root}>
            <FormControl fullWidth className={clsx(classes.margin)}>
              <InputLabel htmlFor='standard-adornment-password'>Enter city and state, or use current location</InputLabel>
              <Input
                id='standard-adornment-password'
                type='text'
                value={location}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton aria-label='toggle password visibility' onClick={handleClickLocation} onMouseDown={handleMouseDownLocation}>
                      <LocationSearchingIcon></LocationSearchingIcon>
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <Map
            cities={[
              {
                latitude: 40.717079,
                longitude: -74.00116,
                size: 6,
                tooltip: 'New York',
                fill: '#F00',
              },
            ]}></Map>
        </Grid>
      </Grid>
    </>
  );
}
