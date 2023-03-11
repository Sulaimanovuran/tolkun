import React, {useEffect, useState} from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import LoadingButton from '@mui/lab/LoadingButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useDispatch, useSelector} from "react-redux";
import {clearRegisterErrors, registerUser} from "../../store/actions/usersActions";
import InputField from "../../components/UI/Form/InputField/InputField";
import FileInput from "../../components/UI/Form/FileInput/FileInput";

const Registration = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.users.registerLoading);
    const error = useSelector(state => state.users.registerError);

    const [user, setUser] = useState({
        full_name: '',
        password: '',
        password_confirm: '',
        email: '',
        phone_number: ''
    });

    useEffect(() => {
        return () => {
            dispatch(clearRegisterErrors());
        }
    }, [dispatch]);

    const onChange = e => {
        const {name, value} = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmit = e => {
        e.preventDefault();
        dispatch(registerUser(user));
    };

    const getFieldError = fieldName => {
        try{
            return error.errors[fieldName].message;
        } catch {
            return undefined;
        }
    };

    return (
        <Container maxWidth="xs">
            <Box sx={{paddingTop: 6}}>
                <Typography component="h1" variant="h5" color="#fff">
                    Sign up
                </Typography>
                <Box component="form" onSubmit={onSubmit}>
                    <InputField
                        name="email"
                        value={user.email}
                        onChange={onChange}
                        label="E-mail"
                        required={true}
                        error={getFieldError('email')}
                        margin="dense"
                        type="email"
                    />
                    <InputField
                        name="full_name"
                        value={user.full_name}
                        onChange={onChange}
                        label="Имя компании"
                        required={true}
                        error={getFieldError('displayName')}
                        margin="dense"
                    />
                    <InputField
                        name="password"
                        value={user.password}
                        onChange={onChange}
                        label="Пароль"
                        type="password"
                        required={true}
                        error={getFieldError('password')}
                        margin="dense"
                    />
                    <InputField
                      name="password_confirm"
                      value={user.password_confirm}
                      onChange={onChange}
                      label="Подтверждение пароля"
                      type="password"
                      required={true}
                      error={getFieldError('password')}
                      margin="dense"
                    />
                    <InputField
                      name="phone_number"
                      value={user.phone_number}
                      onChange={onChange}
                      label="Номер телефона"
                      error={getFieldError('password')}
                      margin="dense"
                    />
                    <LoadingButton
                        type="submit"
                        fullWidth
                        loading={loading}
                        disabled={loading}
                        loadingPosition="start"
                        startIcon={<AccountCircleIcon />}
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                    >
                        Зарегистрироваться
                    </LoadingButton>
                    <Grid container justifyContent={"flex-end"}>
                        <Grid item>
                            <Link to="/login">
                                У вас уже есть аккаунт? Войти
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Registration;