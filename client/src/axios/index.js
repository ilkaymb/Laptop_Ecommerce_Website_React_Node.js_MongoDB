import axios from "axios";

const HTTP = axios.create({
  baseURL: "http://localhost:5000",
});

export const login = async (formData) =>
  await HTTP.post("/signin", formData);


  export const getOurProduct = async () =>
  await HTTP.post("/getOurProduct");
  

  export const getOurProduct2 = async (page) =>
  await HTTP.post("/getOurProduct2",page);


  export const getSearchData = async (items) =>
  await HTTP.post("/getSearchData",items);


  export const getProduct = async (page) =>
  await HTTP.post("/getProduct",page);


  export const getSearchProduct = async (items) =>
  await HTTP.post("/getSearchProduct",items);

  export const getN11 = async (items) =>
  await HTTP.post("/getN11",items);

  export const getVatan = async (items) =>
  await HTTP.post("/getVatan",items);

  export const getTeknosa = async (items) =>
  await HTTP.post("/getTeknosa",items);

  export const getOurProductSingle = async (id) =>
  await HTTP.post("/getOurProductSingle",id);

  
  export const getProductSingle = async (id) =>
  await HTTP.post("/getProductSingle",id);

  export const ourProductUpdate = async (items) =>
  await HTTP.post("/ourProductUpdate",items);


  export const postDelete = async (items) =>
  await HTTP.post("/postDelete",items);
  
  
  export const newProduct = async (items) =>
  await HTTP.post("/newProduct",items);
  

  export const getData = async (items) =>
  await HTTP.post("/getData",items);
  