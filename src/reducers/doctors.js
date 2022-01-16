import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constant';

export default (doctorReducers = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return doctorReducers.map((staff) => (staff._id === action.payload._id ? action.payload : staff));
    case CREATE:
      return [... doctorReducers, action.payload];
    case UPDATE:
      return doctorReducers.map((staff) => (staff._id === action.payload._id ? action.payload : staff));
    case DELETE:
      return doctorReducers.filter((staff) => staff._id !== action.payload);
    default:
      return doctorReducers;
  }
};