import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import axios from 'axios';
import Spinner from '../layout/Spinner';

const Lyrics = (props) => {

    const [track, setTrack] = useState({});
    const [lyric, setLyric] = useState({});

    useEffect(() => {
        axios.get(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&
                    apikey=${process.env.REACT_APP_MM_API_KEY}`)
        .then(res => {
            setLyric(res.data.message.body.lyrics)

            return (
                axios.get(`https://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}&
                apikey=${process.env.REACT_APP_MM_API_KEY}`)
                .then(res => {                
                    setTrack(res.data.message.body.track)
                })
                .catch(err => console.log(err))
            )
        })
        .catch(err => console.log(err));
    }, []);

    if(
        track === undefined ||
        lyric === undefined || 
        Object.keys(track).length === 0 || 
        Object.keys(lyric).length === 0
    ){
        return <Spinner />
    }else{
        return (
            <>
                <div className="container mt-5">
                    <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
                    <div className="card">
                        <h5 className="card-header">
                            {track.track_name} by 
                            <span className="text-secondary"> {track.artist_name}</span>
                        </h5>
                        <div className="card-body">
                            <p className="card-text">
                                {lyric.lyrics_body}
                            </p>
                        </div>
                    </div>

                    <ul className="list-group mt-3">
                        <li className="list-group-item">
                            <strong>{}Album Id </strong> : {track.album_id}
                        </li>
                        <li className="list-group-item">
                            <strong>Song Genre </strong> : {track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
                        </li>
                        <li className="list-group-item">
                            <strong>Explicit Words </strong>: {track.explicit === 0 ? 'No' : 'Yes'}
                        </li>
                        <li className="list-group-item">
                            <strong>Release Date </strong>: {' '}
                            <Moment format="DD/MM/YYYY">{track.updated_time}</Moment>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Lyrics
