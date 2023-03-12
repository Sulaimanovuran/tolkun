import React from 'react';
import {Grid} from "@mui/material";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {makeStyles} from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  edit: {
    "&:hover": {
      borderRadius: "8px",
      backgroundColor: '#cccccc'
    },
  }
}));

const EditButton = ({click}) => {
  const {classes} = useStyles();

  return (
    <Grid item onClick={click} sx={{cursor: "pointer"}}>
      <ModeEditIcon sx={{ fontSize: 34 }} className={classes.edit} />
    </Grid>
  );
};

export default EditButton;