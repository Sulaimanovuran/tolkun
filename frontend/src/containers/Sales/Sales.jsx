import { Grid, InputBase, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import {styled} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from 'react'
import '../Sales/Sales.css'
function Sales() {

    const [searchVal, setSearchVal] = useState('');

    const SearchStyle = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#fff',
        '&:hover': {
          backgroundColor: '#fff',
        },
        marginRight: theme.spacing(6),
        marginLeft: 0,
        marginTop: '25px',
        width: '50%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));

      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));

      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '50%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));

      const searchValHandler = e => {
        setSearchVal((e.target.value).trim());
      };

  return (
    <div className='box_get'>
    <div className='product_box'>
    <Grid item sx={{paddingLeft: "15px"}}>
        <Typography variant="h5" fontWeight="bold" textTransform="uppercase">
          Товары и услуги
        </Typography>
      </Grid>
      <Grid
          sx={{
            margin: '8px 20px 20px 40px'
          }}
        >
          <SearchStyle
            sx={{
              width: '100%',
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              onChange={searchValHandler}
            />
          </SearchStyle>
        </Grid>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell>Кол-во</TableCell>
              <TableCell>Цена</TableCell>
              <TableCell>Склад</TableCell>
            </TableRow>
          </TableHead>
          </Table>
    </div>
    <div className='cart_box'></div>
    </div>
  )
}

export default Sales