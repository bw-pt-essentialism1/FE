import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://essentialism-backend1.herokuapp.com/',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};