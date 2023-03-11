import React, {useState, useEffect} from 'react';
import InputField from "../UI/Form/InputField/InputField";
import {Box, Fade, Grid, Modal, Typography, TextField} from "@mui/material";
import FileInput from "../UI/Form/FileInput/FileInput";
import ButtonWithProgress from "../UI/Buttons/ButtonWithProgress/ButtonWithProgress";
import AddButton from "../UI/Buttons/AddButton/AddButton";
import EditButton from "../UI/Buttons/EditButton/EditButton";
import { addProduct, clearProductsErrors, editProduct, fetchProduct } from '../../store/actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';
import FormSelect from '../UI/Form/FormSelect/FormSelect';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs: '80%', md: '60%', lg: '45%'},
  backgroundColor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'auto',
  maxHeight: '600px',
};
const ProductModal = ({modalTitle, product_id, isAdd}) => {
  const dispatch = useDispatch();
  const [newModal, setNewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [id, setId] = useState('');
  const product = useSelector(state => state.products.product);
  const products = useSelector(state => state.products.products);
  const newError = useSelector(state => state.products.addError);
  const editError = useSelector(state => state.products.error );
  const loading = useSelector(state => state.products.loading );

  const [date, setDate] = useState(null);

  const [newData, setNewData] = useState({
    name: '',
    count: '',
    price: '',
    warehouse: '',
    shelf_life: '',
    accessibility: '',
    imgage: '',
    life: ''
  });

  const [editedData, setEditedData] = useState({
    name: '',
    count: '',
    price: '',
    warehouse: '',
    shelf_life: '',
    accessibility: '',
    imgage: '',
    life: ''
  });

  useEffect(() => {
    if (product_id) {
          dispatch(fetchProduct(product_id));
    }
  }, [dispatch, product_id]);
  
  useEffect(() => {
    if (newError === null) {
      setNewModal(false);
    }
    if (editError === null) {
      setEditModal(false);
    }
    // eslint-disable-next-line
  }, [product]);

  const openCloseModal = id => {
    if (isAdd) {
      setNewData({
        name: '',
        count: '',
        price: '',
        warehouse: '',
        shelf_life: '',
        accessibility: '',
        imgage: '',
        life: ''
      });

      setNewModal(true);
      dispatch(clearProductsErrors());
    } else if (!isAdd) {
      const product = products.find(item => item.id === product_id);
      setId(product.id);

      setEditedData({
        name: product.name,
        count: product.count,
        price: product.price,
        warehouse: product.warehouse,
        shelf_life: product.shelf_life,
        accessibilty: product.accessibility,
        imgage: product.imgage,
        life: product.life
      });

      setEditModal(true);
      dispatch(clearProductsErrors());
    }
  };

  const inputChangeHandler = (e) => {
    if (e.target) {
      const {name, value} = e.target;
      isAdd
        ? setNewData(prev => ({...prev, [name]: value}))
        : setEditedData(prev => ({...prev, [name]: value}));
    };
  };

  const fileChangeHandler = e => {
    const name = e.target.name;
    const file = e.target.files[0];

    isAdd
      ? setNewData(prev => ({...prev, [name]: file}))
      : setEditedData(prev => ({...prev, [name]: file}));
  };

  const submitFormHandler = async e => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(isAdd ? newData : editedData).forEach(key => {
      formData.append(key, isAdd ? newData[key] : editedData[key]);
    });

    if (isAdd) {
      dispatch(addProduct({data: formData}));
    } else {
      dispatch(editProduct({id, data: formData}));
    }
  };

    const getFieldError = fieldName => {
      try {
        return isAdd ? newError[fieldName][0] : editError[fieldName][0];
      } catch {
        return undefined;
      }
    };

  return (
    <>
      {isAdd
        ? <AddButton click={openCloseModal}/>
        : <EditButton
          click={() => openCloseModal(id)}
        />
      }
      <Modal
        open={isAdd ? newModal : editModal}
        onClose={() => isAdd ? setNewModal(false) : setEditModal(false)}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
      >
        <Fade in={isAdd ? newModal : editModal}>
          <Box sx={style}>
            <div>
              <Grid>
                <Typography
                  variant={'h6'}
                  sx={{
                    marginBottom: '20px'
                  }}
                >
                  {modalTitle}
                </Typography>

                <Grid
                  component='form'
                  container
                  spacing={2}
                  onSubmit={submitFormHandler}
                  pr={'15px'}
                >
                  <Grid item xs={12}>
                    <FileInput
                      label='Рисунок'
                      name='imgage'
                      onChange={fileChangeHandler}
                    />
                  </Grid>
                  <Grid
                    item
                    container
                    spacing={2}
                    justifyContent="space-between"
                    flexDirection={{xs: 'column', md: 'row'}}
                  >
                    <Grid item width={{xs: '100%', md: '49.5%'}}>
                      <InputField
                        type={'name'}
                        name={'name'}
                        label={'Название'}
                        value={isAdd ? newData.name : editedData.name}
                        required={true}
                        onChange={inputChangeHandler}
                        error={getFieldError('name')}
                      />
                    </Grid>

                    <Grid item width={{xs: '100%', md: '49.5%'}}>
                      <InputField
                        type={'number'}
                        name={'price'}
                        label={'Цена'}
                        value={isAdd ? newData.price : editedData.price}
                        required={true}
                        onChange={inputChangeHandler}
                        error={getFieldError('price')}
                      />
                    </Grid>

                    <Grid item width={{xs: '100%', md: '49.5%'}}>
                      <InputField
                        name={'count'}
                        type={'number'}
                        label={'Количество'}
                        value={isAdd ? newData.count : editedData.count}
                        required={true}
                        onChange={inputChangeHandler}
                        error={getFieldError('amount')}
                      />
                    </Grid>

                    <Grid item width={{xs: '100%', md: '49.5%'}}>
                      <InputField
                        name={'accessibility'}
                        label={'Наличие'}
                        value={isAdd ? newData.accessibility : editedData.accessibility}
                        required={true}
                        onChange={inputChangeHandler}
                        error={getFieldError('accessibility')}
                      />
                    </Grid>
                    <Grid item width={{xs: '100%', md: '49.5%'}}>
                      <InputField
                        name={'warehouse'}
                        label={'Склад'}
                        value={isAdd ? newData.amount : editedData.amount}
                        required={true}
                        onChange={inputChangeHandler}
                        error={getFieldError('amount')}
                      />
                    </Grid>
                    <FormSelect
                        onChange={inputChangeHandler}
                        name='life'
                        options={[{id: 'NOT', title: 'NOT'}, {id: 'YES', title: 'YES'}]}
                        label='Наличие срока годности'
                        value={isAdd ? newData.life : editedData.life}
                        error={getFieldError('life')}
                    />

                    </Grid>

                    

                    {/* <Grid item width={{xs: '100%', md: '49.5%'}}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker />
                      </LocalizationProvider>
                    </Grid> */}

                  <Grid item sx={{width: {xs: '100%', md: '49.5%'}}}>
                    <ButtonWithProgress
                      loading={loading}
                      disabled={loading}
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      Сохранить
                    </ButtonWithProgress>
                  </Grid>

                  <Grid item sx={{width: {xs: '100%', md: '49.5%'}}}>
                    <ButtonWithProgress
                      type="button"
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={() => isAdd ? setNewModal(false) : setEditModal(false)}
                    >
                      Отмена
                    </ButtonWithProgress>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ProductModal;