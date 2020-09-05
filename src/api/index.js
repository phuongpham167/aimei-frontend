import axios from 'axios';

export const GET = (url, params = {}) => {
  return axios.get(url, {
    params
  })
}

export const POST = (url, params = {}, options = {}) => {
  return axios.post(url, params, options)
}

export const PUT = (url, params = {}, options = {}) => {
  return axios.put(url, params, options)
}

export const shareHeaders = (headers) => {
  axios.defaults.headers.common = {...axios.defaults.headers.common, ...headers};
}

export const setAuthorizedToken = (token) => {
  shareHeaders({Authorization: 'Bearer ' + token})
}
