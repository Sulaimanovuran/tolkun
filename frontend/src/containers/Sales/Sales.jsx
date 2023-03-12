import {Grid, InputBase, styled, Table, TableCell, TableHead, TableRow, Typography} from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import React, {useContext, useEffect, useState} from 'react'
import '../Sales/Sales.css'
import {useDispatch, useSelector} from 'react-redux';
import UseTableSearch from '../../components/UI/Filter/useTableSearch';
import {fetchAllProducts} from '../../store/actions/productsActions';
import TableBody from '@mui/material/TableBody';
import {todosContext} from '../../context/todosContext';

function Sales() {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products.allProducts);

    const [searchVal, setSearchVal] = useState('');
  
    
    const {getTodos , todos , addTodos} = useContext(todosContext)
   
   const handeleAddClick = () => {
    addTodos()
   }

   
     

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

      
  const {filteredData} = UseTableSearch({
    searchVal,
    data: products
});

  useEffect(() => {
    getTodos()
    dispatch(fetchAllProducts());
  }, [dispatch]);

  

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
          <TableBody>
            
            {/* {filteredData.map((row) => (
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
                <ProductEdit id={row.id}/>
              </TableRow>
            ))}
             */}

{ todos.data ? todos.data.map((todo) => {
     return (
     <div key={todo.id} className='card_product'> 
      <span>{todo.name}</span>
      <span>{todo.price}</span>
      <span>{todo.count}</span>
      <span>{todo.life}</span>
      <img className='product_img' width="200px" height="200px" src={todo.imgage? todo.imgage : "https://rosservice-t.ru/wp-content/uploads/2021/04/a7925-1.jpg"} alt="" />
      {/* <button className='btn' onClick={handeleAddClick} >+</button> */}
     </div>
     )
      }) : ""}
          </TableBody>
          </Table>
    </div>
    <div className='cart_box'>
    { todos.data ? todos.data.map((todo) => {
     return (
     <div key={todo.id} className='card_product'> 
      <span>{todo.name}</span>
      <span>{todo.price}</span>
      <span>{todo.count}</span>
      <span>{todo.life}</span>
      <img className='product_img' src={todo.imgage} width="200px" height="200px" alt="" />
     </div> 
     ) } ) : "" }
    </div>
    </div>
  )
}

export default Sales