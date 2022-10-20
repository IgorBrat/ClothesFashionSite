import axios from 'axios';

const axiosInit = axios.create({
  baseURL: "http://localhost:3000/clothes",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllItems = async () => {
  return (await axiosInit.get()).data;
};

export const getItemById = async (id) => {
  return (await axiosInit.get(`/${id}`)).data;
};

export const getItemsFiltered = async(filters) => {
  return (await axiosInit.get(``, { params: filters })).data;
};
