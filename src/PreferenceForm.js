import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import { Row, Col } from "reactstrap";
import Widget from "./components/Widget";
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '2rem',
    marginTop: '1rem',
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

export default function InputAdornments() {
  const classes = useStyles();
  const [temperatureValue, settemperatureValue] = useState([40, 70]);

  const handleTemperatureValueChange = (event, newValue) => {
    settemperatureValue(newValue);
  };

  return (
    <Grid container justify='center' className={classes.root}>
      <Grid item xs={12} md={8}>
        <Col xs={12} lg={6}>
          <Widget
            title={
              <h5>
                Headings <small className='text-muted'>Default and customized</small>
              </h5>
            }>
            {/* <h4>Default headings</h4>
            <p>Basic headings for everyday use</p>
            <div className='widget-padding-md w-100 h-100 text-left border rounded'>
              <Row>
                <Col sm={6}>
                  <h1>h1. Heading</h1>
                  <h2>h2. Heading</h2>
                  <h3>h3. Heading</h3>
                  <h4>h4. Heading</h4>
                  <h5>h5. Heading</h5>
                  <h6>h6. Heading</h6>
                </Col>
                <Col sm={6}>
                  <h1 className='text-danger'>h1. Heading</h1>
                  <h2 className='text-warning'>h2. Heading</h2>
                  <h3 className='text-lime'>h3. Heading</h3>
                  <h4 className='text-success'>h4. Heading</h4>
                  <h5 className='text-primary'>h5. Heading</h5>
                  <h6 className='text-info'>h6. Heading</h6>
                </Col>
              </Row>
            </div>
            <h4 className='mt-5'>Customized headings</h4>
            <p>Enhanced with additional text</p>
            <div className='widget-padding-md w-100 h-100 text-left border rounded'>
              <h3>
                Headings <small>And some clarification text</small>
              </h3>
            </div>
            <h4 className='mt-5'>Display</h4>
            <p>Headings to stand out</p>
            <div className='widget-padding-md w-100 h-100 text-left border rounded overflow-auto'>
              <h1 className='display-1'>Display 1</h1>
              <h1 className='display-2'>Display 2</h1>
              <h1 className='display-3'>Display 3</h1>
              <h1 className='display-4'>Display 4</h1>
            </div>
            <h4 className='mt-5'>Lead</h4>
            <p>
              Make a paragraph stand out by adding <code className='highlighter-rouge'>.lead</code>.
            </p>
            <div className='widget-padding-md w-100 h-100 text-left border rounded'>
              <p className='lead'>Light Blue Template is admin dashboard template built with Bootstrap</p>
            </div> */}
          </Widget>
        </Col>
        {/* <Grid item md={4} xs={8}>
        <Typography id='range-slider' gutterBottom>
          Temperature range
        </Typography>
        <Slider min={-30} max={130} value={temperatureValue} onChange={handleTemperatureValueChange} valueLabelDisplay='auto' />
      </Grid>
      <Grid item md={1} xs={2}></Grid>
      <Grid item md={4} xs={8}>
        <Typography id='range-slider' gutterBottom>
          Temperature range
        </Typography>
        <Slider min={-30} max={130} value={temperatureValue} onChange={handleTemperatureValueChange} valueLabelDisplay='auto' />
      </Grid> */}
      </Grid>
    </Grid>
  );
}
