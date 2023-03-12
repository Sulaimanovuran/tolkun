import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Grid, Typography} from "@mui/material";
import "../TolkunBuilder/TolkunBuilder.css"
import {fetchCounts} from "../../store/actions/countsActions";

const TolkunBuilder = () => {
    const dispatch = useDispatch();
    const counts = useSelector(state => state.counts.counts);

    useEffect(() => {
        dispatch(fetchCounts());
    }, [dispatch]);

    return (
        <Grid container direction="column" spacing={2} >
            <Grid item container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="h5">
                       
                    </Typography>
                </Grid>
            </Grid>
            <div className='block_static'>
                <div className='info_statistic'>
                    <p className='amount'>Кол-во товаров</p>
                    <p className='amount'>{counts?.count}</p>
                </div>
                <div className='info_statistic'>
                    <p className='amount'>Кол-во продаж</p></div>
                <div className='info_statistic'>
                    <p className='amount'>Кол-во пользователей</p>
                    <p className='amount'>{counts?.user}</p>
                </div>
                <div className='info_statistic'>
                    <p className='amount'>Кол-во складов</p>
                    <p className='amount'>{counts?.warehouse}</p>
                </div>
            </div>
        </Grid>
    );
};

export default TolkunBuilder;