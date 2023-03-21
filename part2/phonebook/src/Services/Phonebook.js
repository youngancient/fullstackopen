import axios from "axios";
const baseUrl = "http://localhost:3001/persons/";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newObj) => {
  return axios.post(baseUrl, newObj);
};

const update =(id,newObj)=>{
    return axios.put(`${baseUrl}/${id}`,newObj);
}
const deleteContact =(current)=>{
    return axios.delete(baseUrl+current);
}

export default { getAll, create, deleteContact, update};
