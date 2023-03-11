import React, {useState} from 'react';
import InputField from "../UI/Form/InputField/InputField";
import {Grid} from "@mui/material";

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
const ProductModal = ({modalTitle, id, isAdd}) => {
  const [newModal, setNewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [id, setId] = useState('');

  const [newData, setNewData] = useState({
    name: '',
    amount: '',
    price: '',
    warehouse: '',
    shelf_life: '',
    image: ''
  });

  const [editedData, setEditedData] = useState({
    name: '',
    amount: '',
    price: '',
    warehouse: '',
    shelf_life: '',
    image: ''
  });

  // useEffect(() => {
  //   dispatch(fetchCarriersRequest());
  // }, [dispatch]);
  //
  // useEffect(() => {
  //   if (newError === null) {
  //     setNewModal(false);
  //   }
  //   if (editError === null) {
  //     setEditModal(false);
  //   }
  //   // eslint-disable-next-line
  // }, [drivers]);

  const openCloseModal = id => {
    if (isAdd) {
      setNewData({
        name: '',
        amount: '',
        price: '',
        warehouse: '',
        shelf_life: '',
        image: ''
      });

      setNewModal(true);
      // dispatch(clearDriverErrors());
    } else if (!isAdd) {
      // const product = drivers.filter(item => item.email === driverEmail)[0];
      // setDriverId(driver._id);

      setEditedData({
        name: product.name,
        amount: product.amount,
        price: product.price,
        warehouse: product.warehouse,
        shelf_life: product.shelf_life,
        image: product.image
      });

      setEditModal(true);
      // dispatch(clearDriverErrors());
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

    // if (isAdd) {
    //   dispatch(addDriverRequest({data: formData}));
    // } else {
    //   dispatch(updateDriverRequest({id: driverId, data: formData, user}));
    // }
  };

    // const getFieldError = fieldName => {
    //   try {
    //     return isAdd ? newError.errors[fieldName].message : editError.errors[fieldName].message;
    //   } catch {
    //     return undefined;
    //   }
    // };

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
                        name={'amount'}
                        label={'Количество'}
                        value={isAdd ? newData.amount : editedData.amount}
                        required={true}
                        onChange={inputChangeHandler}
                        error={getFieldError('amount')}
                      />
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <FileInput
                      label='License'
                      name='license'
                      onChange={fileChangeHandler}
                    />
                  </Grid>

                  <Grid item sx={{width: {xs: '100%', md: '49.5%'}}}>
                    <ButtonWithProgress
                      loading={loading}
                      disabled={loading}
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      Save
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
                      Cancel
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