import axios from 'axios'

const axiosWauth = () => {
  return axios.create({
    baseURL: 'https://potluck-api43.herokuapp.com/api',
    headers: {
      Authorization: window.localStorage.getItem('token')
    }
  });
};

export default axiosWauth;
