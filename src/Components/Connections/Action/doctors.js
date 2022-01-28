import {AUTH,UPDATE,DELETE} from '../../../constant.js'
import * as api from '../Api/index.js';

export const newDoctorData = (newDatas, navigate) => async (dispatch) =>{
    try{
        const {data} = await api.newDoctorData(newDatas)

        dispatch({type: AUTH,data});
        console.log('nadagdag ko na sez');
        // navigate('/home');
    }catch(error){
        console.log(error);
        alert('Please check all the information');
        
    }
}
export const updateDoctorStat =(id,stats)=> async (dispatch)=>{
  try{
    const {data} = await api.updateDoctorStats(id,stats)
    dispatch({type: 'UPDATE',payload:data})
    console.log('Napalitan ko n ata status')
    alert('Pag ganito')

  }catch(error){
    console.log(error.message);
  }
}
export const deleteDoctor = (id) => async (dispatch) => {
    try {
      await api.deleteDoctorData(id);
        dispatch({ type: DELETE, payload: id });
    // alert("You successfully deleted a Staff Information");

    } catch (error) {
      console.log(error);
    }
  };
  // export const updateDoctorStat =(id,stats)=> async (dispatch)=>{
  //   try{
  //     const {data} = await api.updateDoctorStats(id,stats)
  //     dispatch({type: 'UPDATE',payload:data})
  //     console.log('Napalitan ko n ata status')
  //     alert('Pag ganito')
  
  //   }catch(error){
  //     console.log(error.message);
  //   }
  // }