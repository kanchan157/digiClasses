const snackbarReducer = (state = {}, action) => {
    switch (action.type) {
      case "SNACKBAR_SUCCESS":
        return {
          ...state,
          snackbarOpen: true,
          snackbarType: action.payload.type,
          snackbarMessage: action.payload.message,
        };
      case "SNACKBAR_CLEAR":
        return {
          ...state,
          snackbarOpen: false,
        //   errorSnackbarOpen: false,
        //   infoSnackbarOpen: false
        };
      default:
        return state;
    }
  };
  
  export default snackbarReducer;