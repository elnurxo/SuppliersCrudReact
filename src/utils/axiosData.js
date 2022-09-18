import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://northwind.vercel.app/api/",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getSuppliers = async () => {
  return await axiosInstance.get("suppliers");
};

export const getSupplierById = async (id) => {
  return await axiosInstance.get(`suppliers/${id}`);
};

export const deleteSupplierById = async (id) => {
  return await axiosInstance.delete(`suppliers/${id}`);
};

export const addSupplier = async (data) => {
  return await axiosInstance.post("suppliers", JSON.stringify(data));
};