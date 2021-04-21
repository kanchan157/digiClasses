export const SET_EMPLOYEE_LIST = "SET_EMPLOYEE_LIST";

export const SetEmployeeActivity = (item) => {
    return {
      type: SET_EMPLOYEE_LIST,
      payload: item,
    };
  };