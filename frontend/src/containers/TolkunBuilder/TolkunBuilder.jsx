import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {Grid, Typography} from "@mui/material";
import "../TolkunBuilder/TolkunBuilder.css"

const TolkunBuilder = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(fetchArtists());
    }, [dispatch]);

    return (
        <Grid container direction="column" spacing={2} >
            <Grid item container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="h5">
                       
                    </Typography>
                    {/*{artists.length < 1 &&*/}
                    {/*    <Typography variant="body">*/}
                    {/*    */}
                    {/*</Typography>*/}
                    {/*}*/}
                </Grid>
            </Grid>
            <div className='block_static'>
                <div className='info_statistic'>
                    <p className='amount'>Кол-во товаров</p>
                </div>
                <div className='info_statistic'>
                    <p className='amount'>Кол-во продаж</p></div>
                <div className='info_statistic'><p className='amount'>Кол-во пользователей</p></div>
                <div className='info_statistic'><p className='amount'>Кол-во складов</p></div>
            </div>
        </Grid>
    );
};

export default TolkunBuilder;