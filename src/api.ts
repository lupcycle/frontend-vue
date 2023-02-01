import axios from 'axios';


export interface apiProps {
  url: string;
  data?: any;
  onSuccess: (data: string) => void;
  onFailed: (data: string) => void;
}

const instance = axios.create({
  baseURL: "http://localhost:3000"
})



const api = {
  get({url, onSuccess, onFailed}: apiProps) {
    instance({
      method: "get",
      url: url
    })
    .then(res => onSuccess(res.data))
    .catch(error => onFailed(error.response.data))
  },

  post({url, data, onSuccess, onFailed}: apiProps) {
    instance({
      method: "post",
      url: url,
      data: data
    })
    .then(res => onSuccess(res.data))
    .catch(error => onFailed(error.response.data))
  }
}

export default { api }