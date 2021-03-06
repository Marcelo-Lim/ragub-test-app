import {FETCH_ALL,CREATE,UPDATE} from '../constant';

export default (appointments = [] ,action) => {
    
    switch(action.actionType) {

        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...appointments, action.payload];
            case UPDATE:
                return appointments.map((appointment) => (appointment._id === action.payload._id ? action.payload : appointment));
        default:
            return appointments;
    }
};