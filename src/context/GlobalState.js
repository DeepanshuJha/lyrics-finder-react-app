import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

// Initial Sate
const initialState = {
    track_list: [],
    heading: 'Top 10 Tracks'
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function getDefaultTracks(data){        
        dispatch({
            type: 'FETCH_DEFAULT_TRACKS',
            payload: data
        })            
    }

    function getTracks(data){        
        dispatch({
            type: 'FETCH_TRACKS',
            payload: data
        })            
    }

    return (<GlobalContext.Provider value={{        
        track_list: state.track_list,
        heading: state.heading,
        getDefaultTracks,
        getTracks
    }}>
        {children}
    </GlobalContext.Provider>)
}