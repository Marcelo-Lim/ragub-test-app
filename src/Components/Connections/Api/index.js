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
  export const cancelAppointment = (id,cancelApps) => API.patch(`/appointment/${id}/cancelAppointment`, cancelApps);
  export const doctorForAppointment =(id,DNA) => API.patch(`/appointment/${id}/addDoctorforAppointment`,DNA);

  export const signInStaff = (formData) => API.post('/staff/signin/staff', formData);
  export const updateStaffInfo =(id, updateInfos) => API.patch(`/staff/staff/update/${id}`,updateInfos);


  export const newDoctorData = (newDoctor) => API.post('/doctor/newDoctor', newDoctor);
  export const updateDoctorStats =(id,stas) => API.patch(`/doctor/${id}/doctorstatus/updating`,stas)
  export const deleteDoctorData =(id)=> API.delete(`/doctor/${id}/remove`);
