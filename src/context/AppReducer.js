export default (state, action) => {
    switch(action.type) {
        case 'FETCH_DEFAULT_TRACKS':
            return {
                ...state,
                track_list: [...action.payload]
            }
        case 'FETCH_TRACKS':                
            return {
                ...state,
                track_list: [...action.payload],
                heading: 'Search Results'
            }
        default:
            return state;
    }
}