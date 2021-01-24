import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { Col } from 'reactstrap';
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

const OrangeIosSlider = withStyles({
  root: {
    color: '#e49400',
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

const LimeIosSlider = withStyles({
  root: {
    color: '#8cbf26',
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

const GreenIosSlider = withStyles({
  root: {
    color: '#2d8515',
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

export default function InputAdornments(props) {
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

  const [climateImp, setClimateImp] = useState(50);
  const [climateVal, setClimateVal] = useState([20, 80]);
  const [transportImp, setTransportImp] = useState(50);
  const [transportVal, setTransportVal] = useState(50);
  const [airportImp, setAirportImp] = useState(50);
  const [airportVal, setAirportVal] = useState(250);
  const [eduVal, setEduVal] = useState(50);
  const [disabilityImp, setDisabilityImp] = useState(50);
  const [ageImp, setAgeImp] = useState(50);
  const [ageVal, setAgeVal] = useState(40);
  const [eduImp, setEduImp] = useState(50);
  const [crimeImp, setCrimeImp] = useState(50);
  const [costOfLivingImp, setCostImp] = useState(50);
  const [costOfLivingVal, setCostVal] = useState(50);
  const [indImp, setIndImp] = useState(50);
  const [incomeImp, setIncomeImp] = useState(50);
  const [incomeVal, setIncomeVal] = useState(50);
  const [distImp, setDistImp] = useState(50);
  const [distVal, setDistVal] = useState(25);
  const [houseImp, setHouseImp] = useState(50);
  const [houseVal, setHouseVal] = useState(75000);
  const [employmentImp, setEmploymentImp] = useState(50);
  const [employmentVal, setEmploymentVal] = useState(50);

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
  const handleIndImp = (event, newValue) => setIndImp(newValue);
  const handleIncomeImp = (event, newValue) => setIncomeImp(newValue);
  const handleIncomeVal = (event, newValue) => setIncomeVal(newValue);
  const handleDistImp = (event, newValue) => setDistImp(newValue);
  const handleDistVal = (event, newValue) => setDistVal(newValue);
  const handleHouseImp = (event, newValue) => setHouseImp(newValue);
  const handleHouseVal = (event, newValue) => setHouseVal(newValue);
  const handleEmploymentImp = (event, newValue) => setEmploymentImp(newValue);
  const handleEmploymentVal = (event, newValue) => setEmploymentVal(newValue);

  React.useEffect(
    function () {
      var data = {
        cost_imp: costOfLivingImp,
        cost_val: costOfLivingVal,
        age_imp: ageImp,
        age_val: ageVal,
        crime_imp: crimeImp,
        income_imp: incomeImp,
        income_val: incomeVal,
        travel_time_imp: transportImp,
        travel_time_val: transportVal,
        disability_imp: disabilityImp,
        edu_imp: eduImp,
        edu_val: eduVal,
        airport_imp: airportImp,
        airport_val: airportVal,
        dist_imp: distImp,
        dist_val: distVal,
        climate_imp: climateImp,
        climate_low: climateVal[0],
        climate_high: climateVal[1],
        house_imp: houseImp,
        house_val: houseVal,
        industry: state,
        employment_imp: employmentImp,
        employment_val: employmentVal,
      };
      props.setPreferenceData(data);
    },
    [
      climateImp,
      climateVal,
      transportImp,
      transportVal,
      airportImp,
      airportVal,
      eduImp,
      eduVal,
      disabilityImp,
      ageImp,
      ageVal,
      crimeImp,
      costOfLivingImp,
      costOfLivingVal,
      indImp,
      state,
      incomeImp,
      incomeVal,
      distImp,
      distVal,
      houseImp,
      houseVal,
      employmentImp,
      employmentVal
    ]
  );

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
                    <h5 className='placeholder' style={{ textAlign: 'center' }}>
                      Importance
                    </h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='placeholder' style={{ textAlign: 'center' }}>
                      Value (if applied)
                    </h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='placeholder'>Climate</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <OrangeIosSlider value={climateImp} onChange={handleClimateImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <OrangeIosSlider
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
                    <h5 className='placeholder'>Commute Time</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <OrangeIosSlider value={transportImp} onChange={handleTransportImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <OrangeIosSlider
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
                    <h5 className='placeholder'>Commute Distance</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <OrangeIosSlider value={distImp} onChange={handleDistImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <OrangeIosSlider
                      value={distVal}
                      onChange={handleDistVal}
                      min={0}
                      max={50}
                      marks={[
                        {
                          value: 0,
                          label: '0 miles',
                        },
                        {
                          value: 50,
                          label: '50 miles',
                        },
                      ]}
                      valueLabelDisplay='auto'
                      aria-labelledby='range-slider'
                    />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='placeholder'>Airport Access</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <OrangeIosSlider value={airportImp} onChange={handleAirportImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <OrangeIosSlider
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
                    <h5 className='placeholder'>Disability Access</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <OrangeIosSlider value={disabilityImp} onChange={handleDisabilityImp} />
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
                    <h5 className='placeholder' style={{ textAlign: 'center' }}>
                      Importance
                    </h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='placeholder' style={{ textAlign: 'center' }}>
                      Value (if applied)
                    </h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='placeholder'>Age</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <LimeIosSlider value={ageImp} onChange={handleAgeImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <LimeIosSlider
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
                    <h5 className='placeholder'>Education</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <LimeIosSlider value={eduImp} onChange={handleEduImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <LimeIosSlider
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
                    <h5 className='placeholder'>Crime</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <LimeIosSlider value={crimeImp} onChange={handleCrimeImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}></Grid>
                </Grid>
              </div>
            </div>
            <div className={classes.margin}>
              <h3 className='text-success'>Economic Factors</h3>
              <div className='widget-padding-md w-100 h-100 text-left border rounded'>
                <Grid container justify='center'>
                  <Grid item md={4}></Grid>
                  <Grid item md={4} alignContent='center' style={{ padding: '1rem' }}>
                    <h5 className='placeholder' style={{ textAlign: 'center' }}>
                      Importance
                    </h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='placeholder' style={{ textAlign: 'center' }}>
                      Value (if applied)
                    </h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='placeholder'>Cost of Living</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <GreenIosSlider value={costOfLivingImp} onChange={handleCostOfLivingImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <GreenIosSlider
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
                    <h5 className='placeholder'>Income Tax</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <GreenIosSlider value={incomeImp} onChange={handleIncomeImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <GreenIosSlider
                      value={incomeVal}
                      onChange={handleIncomeVal}
                      min={0}
                      max={15}
                      valueLabelDisplay='auto'
                      aria-labelledby='range-slider'
                      marks={[
                        {
                          value: 0,
                          label: '0%',
                        },
                        {
                          value: 15,
                          label: '15%',
                        },
                      ]}
                    />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='placeholder'>HouseHold Income</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <GreenIosSlider value={houseImp} onChange={handleHouseImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <GreenIosSlider
                      value={houseVal}
                      onChange={handleHouseVal}
                      min={0}
                      max={150000}
                      valueLabelDisplay='auto'
                      aria-labelledby='range-slider'
                      marks={[
                        {
                          value: 0,
                          label: '$0',
                        },
                        {
                          value: 150000,
                          label: '$150,000',
                        },
                      ]}
                    />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='placeholder'>Employment Rate</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <GreenIosSlider value={employmentImp} onChange={handleEmploymentImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <GreenIosSlider
                      value={employmentVal}
                      onChange={handleEmploymentVal}
                      min={0}
                      max={100}
                      valueLabelDisplay='auto'
                      aria-labelledby='range-slider'
                      marks={[
                        {
                          value: 0,
                          label: '0%',
                        },
                        {
                          value: 100,
                          label: '100%',
                        },
                      ]}
                    />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <h5 className='placeholder'>Industry</h5>
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}>
                    <GreenIosSlider value={indImp} onChange={handleIndImp} />
                  </Grid>
                  <Grid item md={4} style={{ padding: '1rem' }}></Grid>
                  <Grid item md={12} style={{ padding: '1rem' }}>
                    <h4 className='placeholder' style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                      Select Interested Industries
                    </h4>
                  </Grid>
                  <Grid md={7}>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleCheck} name='checkedA' color='primary' />}
                        label='Arts, Entertainment, Recreation, Accomodation and Food Services'
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedB} onChange={handleCheck} name='checkedB' color='primary' />}
                        label='Education, Healthcare and Social Assistance'
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedC} onChange={handleCheck} name='checkedC' color='primary' />}
                        label='Transportation, Warehouse, Logistics and Utilities'
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedD} onChange={handleCheck} name='checkedD' color='primary' />}
                        label='Finance, Insurance, Real, Estate, Rental and Leasing'
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedE} onChange={handleCheck} name='checkedE' color='primary' />}
                        label='Professional, Scientific, Management & Administrative and Waste'
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedF} onChange={handleCheck} name='checkedF' color='primary' />}
                        label='Agriculture, Forestry, Fishing, Hunting and Mining'
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedG} onChange={handleCheck} name='checkedG' color='primary' />}
                        label='Other Services'
                      />
                    </FormGroup>
                  </Grid>
                  <Grid md={3}>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedH} onChange={handleCheck} name='checkedH' color='primary' />}
                        label='Construction'
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedI} onChange={handleCheck} name='checkedI' color='primary' />}
                        label='Manufacturing'
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedJ} onChange={handleCheck} name='checkedJ' color='primary' />}
                        label='Information'
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedK} onChange={handleCheck} name='checkedK' color='primary' />}
                        label='Wholesale'
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedL} onChange={handleCheck} name='checkedL' color='primary' />}
                        label='Retail'
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedM} onChange={handleCheck} name='checkedM' color='primary' />}
                        label='Public Administration'
                      />
                    </FormGroup>
                  </Grid>
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
