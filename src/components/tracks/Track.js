import React from 'react';
import { Link } from 'react-router-dom';

const Track = ({ item }) => {
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{item.artist_name}</h5>
                    <p className="card-text">
                        <strong><i className="fas fa-play"></i> Track</strong> : {item.track_name}
                        <br></br>
                        <strong><i className="fas fa-compact-disc"></i> Album</strong> : {item.album_name}
                    </p>
                    <Link to={`lyrics/track/${item.track_id}`} className="btn btn-dark btn-block"> 
                        <i className="fas fa-chevron-right"></i> View Lyrics
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Track;
