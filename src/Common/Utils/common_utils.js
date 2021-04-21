// Converts an object to form data
export const ObjectToFormdata = (data) => {
  let form_data = new FormData();
  for (let key in data) {
    if(Array.isArray(data[key])){
      data[key].forEach((item) => {
        form_data.append(`${key}[]`, item)
      });
      // form_data.append(key, `[${data[key]}]`);
    } else {
      form_data.append(key, data[key]);
    }
  }
  return form_data;
};

export const ValidateEmail = (email) => {
  const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  if (!pattern.test(email)) {
    return true;
  }
};