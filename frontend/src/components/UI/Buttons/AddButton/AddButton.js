import React from 'react';
import {makeStyles} from "tss-react/mui";
import {Grid} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles()(theme => ({
  add: {
    marginTop: "19px",
    marginLeft: "7px",
    marginBottom: "19px",
    cursor: 'pointer'
  }
}));

const AddButton = ({click}) => {
  const {classes} = useStyles();

  return (
    <Grid item onClick={click} sx={{paddingLeft: "15px"}}>
      <AddIcon sx={{ fontSize: 34 }} className={classes.add} />
    </Grid>
  );
};

export default AddButton;