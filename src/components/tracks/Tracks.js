import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Track from './Track';
import Spinner from '../layout/Spinner';

const Tracks = () => {

    const { track_list, heading } = useContext(GlobalContext);    

    if(track_list === undefined || track_list.length === 0){
        return <Spinner />
    }else{
        return (
        <Fragment>
            <h3 className="text-center mb-4">{heading}</h3>
            <div className="row">
            {
                track_list.map(item => (
                    <Track key={item.track.track_id} item={item.track} />
                ))
            }
            </div>
        </Fragment>
        )
    }

}

export default Tracks;
