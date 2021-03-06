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
    // alert("You successfully deleted a Staff Information");

    } catch (error) {
      console.log(error);
    }
  };
  
  export const signInStaff = (formData,navigate) => async (dispatch) => {
    try {
      const { data } = await api.signInStaff(formData);
  
      dispatch({ type: AUTH, data });
      navigate('/middles')
      
    } catch (error) {
      console.log(error);
      alert("Please Check your Information");
    }
  };
  export const updateStaffInfo =(id,dats) => async (dispatch) =>{
    try {
      const {data} = await api.updateStaffInfo(id,dats);
      dispatch({type: UPDATE,payload:data})
      console.log('Updates');
    } catch (error) {
      console.log(error);
    }
  }