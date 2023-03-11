import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Grid, Typography} from "@mui/material";
import ArtistsList from "../../components/ArtistsList/ArtistsList";
import Spinner from "../../components/UI/Spinner/Spinner";
import "../TolkunBuilder/TolkunBuilder.css"

const TolkunBuilder = () => {
    const dispatch = useDispatch();
    // const artists = useSelector(state => state.artists.artists);
    // const loading = useSelector(state => state.artists.loading);
    // const user = useSelector(state => state.users.user);

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
            <div className='info_statistic1'>
                <h1>coute</h1>
                
            </div>
            <div className='info_statistic1'>2</div>
            <div className='info_statistic1'>3</div>
            <div className='info_statistic1'>4</div>
           
            
            </div>
            
            
            {/*{loading*/}
            {/*    ? <Spinner/>*/}
            {/*    : <div className="List">*/}
                    {/*{artists.map(artist => (*/}
                    {/*    (artist.publish || (!artist.publish && artist.addedBy === user?._id)) &&*/}
                    {/*    <ArtistsList*/}
                    {/*        key={artist._id}*/}
                    {/*        id={artist._id}*/}
                    {/*        title={artist.title}*/}
                    {/*        image={artist.image}*/}
                    {/*        publish={artist.publish}*/}
                    {/*    />*/}
                    {/*))}*/}
            {/*    </div>*/}
            {/*}*/}
        </Grid>
    );
};

export default TolkunBuilder;