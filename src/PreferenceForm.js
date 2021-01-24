import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Row, Col } from 'reactstrap';
import Widget from './components/Widget';
import { Grid } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';


const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '2rem',
    marginTop: '1rem',
  },
  margin: {
    margin: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const IOSSlider = withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus, &:hover, &$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 12px)',
    top: -22,
    '& *': {
      background: 'white',
      color: '#000',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);



export default function InputAdornments() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
    checkedH: false,
    checkedI: false,
    checkedJ: false,
    checkedK: false,
    checkedL: false,
    checkedM: false,
  });
  const handleCheck = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [climate, setClimate] = useState([40, 70]);
  const [climateImp, setClimateImp] = useState(50);
  const [climateVal, setClimateVal] = useState([20, 80]);
  const [transportImp, setTransportImp] = useState(50);
  const [transportVal, setTransportVal] = useState(50);
  const [airportImp, setAirportImp] = useState(50);
  const [airportVal, setAirportVal] = useState(250);
  const [eduVal, setEduVal] = useState(50);
  const [crimeVal, setCrimeVal] = useState(50);
  const [disabilityImp, setDisabilityImp] = useState(50);
  const [ageImp, setAgeImp] = useState(50);
  const [ageVal, setAgeVal] = useState(40);
  const [eduImp, setEduImp] = useState(50);
  const [crimeImp, setCrimeImp] = useState(50);
  const [costOfLivingImp, setCostImp] = useState(50);
  const [costOfLivingVal, setCostVal] = useState(50);
  const [indImp, setIndImp] = useState(50);


  const handleClimateImp = (event, newValue) => setClimateImp(newValue);
  const handleClimateVal = (event, newValue) => setClimateVal(newValue);
  const handleTransportImp = (event, newValue) => setTransportImp(newValue);
  const handleTransportVal = (event, newValue) => setTransportVal(newValue);
  const handleAirportImp = (event, newValue) => setAirportImp(newValue);
  const handleAirportVal = (event, newValue) => setAirportVal(newValue);
  const handleDisabilityImp = (event, newValue) => setDisabilityImp(newValue);
  const handleCostOfLivingImp = (event, newValue) => setCostImp(newValue);
  const handleEduImp = (event, newValue) => setEduImp(newValue);
  const handleAgeImp = (event, newValue) => setAgeImp(newValue);
  const handleCrimeImp = (event, newValue) => setCrimeImp(newValue);
  const handleAgeVal = (event, newValue) => setAgeVal(newValue);
  const handleEduVal = (event, newValue) => setEduVal(newValue);
  const handleCostOfLivingVal = (event, newValue) => setCostVal(newValue);

  const handleCrimeVal = (event, newValue) => setCrimeVal(newValue);
  const handleIndImp = (event, newValue) => setIndImp(newValue);

  return (
    <Grid container justify='center' className={classes.root}>
      <Grid item xs={12} md={10}>
        <Col xs={12} lg={12}>
          <Widget>
            <div className={classes.margin}>
              <h3 className='text-warning'>Enviormental Factors</h3>
              <div className='widget-padding-md w-100 h-100 text-left border rounded'>
                <Grid container>
                  <Grid item md={4}></Grid>
                  <Grid item md={4} alignContent='center' style={{ padding: '1rem' }}>
                    <h5 className='text-info' style={{ textAlign: 'center' }}>
                      Importance
                    </h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='text-info' style={{ textAlign: 'center' }}>
                      Value (if applied)
                    </h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='text-info'>Climate</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <IOSSlider value={climateImp} onChange={handleClimateImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <IOSSlider
                      value={climateVal}
                      onChange={handleClimateVal}
                      min={-20}
                      max={120}
                      valueLabelDisplay='auto'
                      aria-labelledby='range-slider'
                      marks={[
                        {
                          value: -20,
                          label: '-20°F',
                        },
                        {
                          value: 120,
                          label: '120°F',
                        },
                      ]}
                    />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='text-info'>Public Transport</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <IOSSlider value={transportImp} onChange={handleTransportImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <IOSSlider
                      value={transportVal}
                      onChange={handleTransportVal}
                      min={0}
                      max={60}
                      marks={[
                        {
                          value: 0,
                          label: '0 mins',
                        },
                        {
                          value: 60,
                          label: '60 mins',
                        },
                      ]}
                      valueLabelDisplay='auto'
                      aria-labelledby='range-slider'
                    />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='text-info'>Airport Access</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <IOSSlider value={airportImp} onChange={handleAirportImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <IOSSlider
                      value={airportVal}
                      onChange={handleAirportVal}
                      min={0}
                      max={500}
                      marks={[
                        {
                          value: 0,
                          label: '0 miles',
                        },
                        {
                          value: 500,
                          label: '500 miles',
                        },
                      ]}
                      valueLabelDisplay='auto'
                      aria-labelledby='range-slider'
                    />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='text-info'>Disability Access</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <IOSSlider value={disabilityImp} onChange={handleDisabilityImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}></Grid>
                </Grid>
              </div>
            </div>
            <div className={classes.margin}>
              <h3 className='text-lime'>Demographics</h3>
              <div className='widget-padding-md w-100 h-100 text-left border rounded'>
                <Grid container>
                <Grid item md={4}></Grid>
                  <Grid item md={4} alignContent='center' style={{ padding: '1rem' }}>
                    <h5 className='text-info' style={{ textAlign: 'center' }}>
                      Importance
                    </h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='text-info' style={{ textAlign: 'center' }}>
                      Value (if applied)
                    </h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='text-info'>Age</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <IOSSlider value={ageImp} onChange={handleAgeImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <IOSSlider
                      value={ageVal}
                      onChange={handleAgeVal}
                      min={18}
                      max={65}
                      valueLabelDisplay='auto'
                      aria-labelledby='range-slider'
                      marks={[
                        {
                          value: 18,
                          label: '18',
                        },
                        {
                          value: 65,
                          label: '65',
                        },
                      ]}
                    />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='text-info'>Education</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <IOSSlider value={eduImp} onChange={handleEduImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <IOSSlider
                      value={eduVal}
                      onChange={handleEduVal}
                      min={1}
                      max={10}
                      marks={[
                        {
                          value: 1,
                          label: 'Low Funds',
                        },
                        {
                          value: 10,
                          label: 'High Funds',
                        },
                      ]}
                      valueLabelDisplay='auto'
                      aria-labelledby='range-slider'
                    />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='text-info'>Crime</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <IOSSlider value={crimeImp} onChange={handleCrimeImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}></Grid>
                </Grid>
              </div>
            </div>
            <div className={classes.margin}>
              <h3 className='text-success'>Economic Factors</h3>
              <div className='widget-padding-md w-100 h-100 text-left border rounded'>
                <Grid container>
                <Grid item md={4}></Grid>
                  <Grid item md={4} alignContent='center' style={{ padding: '1rem' }}>
                    <h5 className='text-info' style={{ textAlign: 'center' }}>
                      Importance
                    </h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='text-info' style={{ textAlign: 'center' }}>
                      Value (if applied)
                    </h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='text-info'>Cost of Living</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <IOSSlider value={costOfLivingImp} onChange={handleCostOfLivingImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <IOSSlider
                      value={costOfLivingVal}
                      onChange={handleCostOfLivingVal}
                      min={1}
                      max={10}
                      valueLabelDisplay='auto'
                      aria-labelledby='range-slider'
                      marks={[
                        {
                          value: 1,
                          label: 'Low',
                        },
                        {
                          value: 10,
                          label: 'High',
                        },
                      ]}
                    />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='text-info'>Industry</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <IOSSlider value={indImp} onChange={handleIndImp} />
                  </Grid>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedA}
                          onChange={handleCheck}
                          name="checkedA"
                          color="primary"
                        />
                      }
                      label="Arts, Entertainment, Recreation, Accomodation and Food Services"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedB}
                          onChange={handleCheck}
                          name="checkedB"
                          color="primary"
                        />
                      }
                      label="Education, Healthcare and Social Assistance"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedC}
                          onChange={handleCheck}
                          name="checkedC"
                          color="primary"
                        />
                      }
                      label="Transportation, Warehouse, Logistics and Utilities"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedD}
                          onChange={handleCheck}
                          name="checkedD"
                          color="primary"
                        />
                      }
                      label="Finance, Insurance, Real, Estate, Rental and Leasing"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedE}
                          onChange={handleCheck}
                          name="checkedE"
                          color="primary"
                        />
                      }
                      label="Professional, Scientific, Management & Administrative and Waste"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedF}
                          onChange={handleCheck}
                          name="checkedF"
                          color="primary"
                        />
                      }
                      label="Agriculture, Forestry, Fishing, Hunting and Mining"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedG}
                          onChange={handleCheck}
                          name="checkedG"
                          color="primary"
                        />
                      }
                      label="Other Services"
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedH}
                          onChange={handleCheck}
                          name="checkedH"
                          color="primary"
                        />
                      }
                      label="Construction"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedI}
                          onChange={handleCheck}
                          name="checkedI"
                          color="primary"
                        />
                      }
                      label="Manufacturing"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedJ}
                          onChange={handleCheck}
                          name="checkedJ"
                          color="primary"
                        />
                      }
                      label="Information"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedK}
                          onChange={handleCheck}
                          name="checkedK"
                          color="primary"
                        />
                      }
                      label="Wholesale"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedL}
                          onChange={handleCheck}
                          name="checkedL"
                          color="primary"
                        />
                      }
                      label="Retail"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedM}
                          onChange={handleCheck}
                          name="checkedM"
                          color="primary"
                        />
                      }
                      label="Public Administration"
                    />
                  </FormGroup>
                  <Grid item md={4} style={{ padding: '1rem' }}></Grid>
                </Grid>
              </div>
            </div>
          </Widget>
        </Col>
      </Grid>
    </Grid>
  );
}
