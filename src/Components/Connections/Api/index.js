import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

  export const newStaffData = (newDatas) => API.post('/staff/newStaff',newDatas);
  export const deleteStaffData = (id) => API.delete(`/staff/${id}/remove`);