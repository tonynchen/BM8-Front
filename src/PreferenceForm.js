import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RubberSlider from "@shwilliam/react-rubber-slider";
import "@shwilliam/react-rubber-slider/dist/styles.css";
import { Grid } from '@material-ui/core';

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

export default function InputAdornments() {
  const classes = useStyles();
  const [value, setValue] = useState(50);

  return (
    <Grid container justify='center'>
      <Grid item md={8}>
      <RubberSlider
        width={250}
        value={value}
        onChange={setValue}
        min={1}
        max={100}
      />
      </Grid>
    </Grid>
  );
}
