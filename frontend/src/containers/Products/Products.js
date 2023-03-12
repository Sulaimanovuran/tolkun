import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchIcon from "@mui/icons-material/Search";
import {Box, Grid, InputBase, styled, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct, fetchAllProducts} from "../../store/actions/productsActions";
import ProductAdd from '../../components/Modals/ProductAdd';
import useTableSearch from '../../components/UI/Filter/useTableSearch';
import MenuButton from '../../components/UI/Buttons/MenuButton/MenuButton';

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
const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.allProducts);

  const [searchVal, setSearchVal] = useState(null);

  const searchValHandler = e => {
    setSearchVal((e.target.value).trim());
  };

  const {filteredData} = useTableSearch({
    searchVal,
    data: products
});

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const deleteProductHandler = async id => {
    await dispatch(deleteProduct());
    dispatch(fetchAllProducts());
  };

  return (
    <Box>
      <Grid item sx={{paddingLeft: "15px"}}>
        <Typography variant="h5" fontWeight="bold" textTransform="uppercase">
          Товары и услуги
        </Typography>
      </Grid>
      <Grid
        item
        container
        spacing={2}
        justifyContent="space-between"
      >
        <Grid padding="15px">
          <ProductAdd/>
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
              placeholder="Поиск..."
              inputProps={{ 'aria-label': 'search' }}
              onChange={searchValHandler}
            />
          </SearchStyle>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead >
            <TableRow>
              <TableCell sx={{fontSize: "14px", fontWeight: "bold"}}>Название</TableCell>
              <TableCell sx={{fontSize: "14px", fontWeight: "bold"}}>Кол-во (шт)</TableCell>
              <TableCell sx={{fontSize: "14px", fontWeight: "bold"}}>Цена (с)</TableCell>
              <TableCell sx={{fontSize: "14px", fontWeight: "bold"}}>Склад</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.count}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.warehouse.name}</TableCell>
                <TableCell>
                  <MenuButton
                    id={row.id}
                    deleteProduct={deleteProductHandler}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Products;