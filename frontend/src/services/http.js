export const API = "http://172.31.240.1:5000/";

export const get = async (url) => {
  try {
    const response = await fetch(API + "api/" + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) return new Error(data?.error);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const post = async (url, params) => {
  try {
    const response = await fetch(API + "api/" + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    if (!response.ok) return new Error(data?.error);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const formPost = async (url, formData) => {
  try {
    const response = await fetch(API + "api/" + url, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (!response.ok) return new Error(data?.error);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
