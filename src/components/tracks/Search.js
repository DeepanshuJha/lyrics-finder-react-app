import React, { useContext, useState } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../context/GlobalState';

const Search = () => {

    const { getTracks } = useContext(GlobalContext);

    const [trackTitle, setTrackTitle] = useState('');
    const [warning, setWarning] = useState(false);

    const onChange = (e) => {
        setTrackTitle(e.target.value);
    }

    const findTracks = (e) => {
        e.preventDefault();

        if(trackTitle.length === 0){
            setWarning(true);
        }else{
            axios.get(`http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_API_KEY}`)
            .then(res => {                                        
                getTracks(res.data.message.body.track_list);
                setTrackTitle('');                
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div className="card card-body mb-4 p-4">
            <h1 className="display-4 text-center">
                <i className="fas fa-music text-warning" /> Search For A Song
            </h1>
            <p className="lead text-center">Get the lyrics for any song</p>
            <form onSubmit={findTracks}>
                <div className="form-group">
                    <input type="text" onChange={onChange} value={trackTitle} className="form-control form-control-lg" placeholder="Song title..." />
                </div>
                {
                    warning ? 
                    (
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        Empty Field!
                        <button onClick={() => setWarning(false)} type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>                    
                    ) : null
                }
                <button className="btn btn-primary btn-block btn-lg mt-2 mb-4" type="submit">
                    Get Track Lyrics
                </button>
            </form>
        </div>
    )
}

export default Search;
