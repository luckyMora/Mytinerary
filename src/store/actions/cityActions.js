export const GET_CITY = 'GET_CITY'
export const GET_ERROR = 'GET_ERROR'


const getCities = (cities) => {
    return {type: GET_CITY, payload: cities}
};
const getError = (error) => {
    return {type: GET_ERROR, payload: error}
};

export const fetchCities = (dispatch) => {
    fetch("http://localhost:5000/cities/all")
    .then(response => response.json())
        .then(data => dispatch(getCities(data)))
        .catch(err => dispatch(getError(err)))
        /* return {type: GET_FETCHED_CITIES, payload: } */
}

