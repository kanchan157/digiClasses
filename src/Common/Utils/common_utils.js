// Converts an object to form data
export const ObjectToFormdata = (data) => {
  let form_data = new FormData();
  for (let key in data) {
    if(Array.isArray(data[key])){
      data[key].forEach((item) => form_data.append(`${key}[]`, item));
      // form_data.append(key, `[${data[key]}]`);
    } else {
      form_data.append(key, data[key]);
    }
  }
  return form_data;
};
