import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import Tracks from '../tracks/Tracks';
import Search from '../tracks/Search';
import { GlobalContext } from '../../context/GlobalState';

const Index = () => {

    const { getDefaultTracks } = useContext(GlobalContext);

    const updateTracks = (data) => {
        getDefaultTracks(data);
    }

    useEffect(() => {
        axios.get(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_API_KEY}`)
            .then(res => {                        
                updateTracks(res.data.message.body.track_list);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className="container">
                <Search />
                <Tracks />
            </div>
        </>
    )
}

export default Index;
