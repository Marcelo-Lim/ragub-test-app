import {AUTH,UPDATE,DELETE} from '../../../constant.js'
import * as api from '../Api/index.js';


export const newStaffData = (newDatas, navigate) => async (dispatch) =>{
    try{
        const {data} = await api.newStaffData(newDatas);

        dispatch({type: AUTH,data});
        console.log('nadagdag ko na sez');
        // navigate('/home');
    }catch(error){
        console.log(error);
        alert('Please check all the information');
        
    }
}
export const deleteDeduction = (id) => async (dispatch) => {
    try {
      await api.deleteStaffData(id);
     dispatch({ type: DELETE, payload: id });
     alert("You successfully deleted a Staff Information");

    } catch (error) {
      console.log(error);
    }
  };