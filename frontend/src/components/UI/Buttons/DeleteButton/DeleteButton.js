import React from 'react';
import {Grid, TableCell} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
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
    // <Grid item onClick={click} sx={{cursor: "pointer"}} flexGrow={1}>
    <TableCell>
      <DeleteIcon sx={{ fontSize: 25 }} className={classes.edit} />
    {/*</Grid>*/}
    </TableCell>
  );
};

export default EditButton;