import React from 'react';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const AnonymousMenu = () => {
    return (
        <>
            <Button component={Link} to="/registration" color="inherit">
                Регистрацыя
            </Button>
            <Button component={Link} to="/login" color="inherit">
                Войти
            </Button>
        </>
    );
};

export default AnonymousMenu;