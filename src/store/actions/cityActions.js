export const createCity = (projekt) => {
    return (dispatch, getstate) => {
        dispatch({ type:  "CREATE_CITY", project})
    }
};