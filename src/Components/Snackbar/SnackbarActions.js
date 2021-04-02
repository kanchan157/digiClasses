
export const showSnackbar = (type, message) => {
    const payload = {
        type: type,
        message: message
    }
    return dispatch => {
      dispatch({ type: "SNACKBAR_SUCCESS", payload });
    };
  };
  
  export const clearSnackbar = () => {
    return dispatch => {
      dispatch({ type: "SNACKBAR_CLEAR" });
    };
  };