import axios from 'axios'

export const mockApi = axios.create({
  baseURL: 'https://67105db3a85f4164ef2dbdd3.mockapi.io/api'
})

// mockApi.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   const token = 'xas12312321'
//   config.headers['Authorization'] = `Bearer ${token}`;
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

// // TOKEN JWT TIENEN UN TIEMPO DE EXPIRACIÓN
// mockApi.interceptors.response.use(function (response) {
//   const statusCode = response.status;
//   if(statusCode === 401) {
//     // FUNCION QUE TE REDIRIGA AL LOGIN COMO TAMBIÉN QUE TE BORRE
//     // INFORMACIÓN DEL LOCALSTORAGE, COOKIES, ETC
//   }
//   // Any status code that lie within the range of 2xx cause this function to trigger
//   // Do something with response data
//   return response;
// }, function (error) {
//   // Any status codes that falls outside the range of 2xx cause this function to trigger
//   // Do something with response error
//   return Promise.reject(error);
// });