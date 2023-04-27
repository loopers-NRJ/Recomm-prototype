const API = "localhost:5000/api";

export const get = async (url) => {
  try {
    const response = await fetch(API + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) return new Error(data?.error);
    return data;
  } catch (error) {
    return error;
  }
};

export const post = async (url, params) => {
  try {
    const response = await fetch(API + url, {
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
    return error;
  }
};
