import axios from 'axios';

const axios = axios.create({
  baseURL: "http://localhost:3000/catalog",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllItems = async () => {
  return (await axios.get()).data;
};
