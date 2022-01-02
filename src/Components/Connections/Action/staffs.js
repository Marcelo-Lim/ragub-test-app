import {AUTH,UPDATE} from '../../../constant'
import * as api from '../Api/index.js';


export const newStaffData = (newDatas, router) => async (dispatch) =>{
    try{
        const {data} = await api.newStaffData(newDatas);

        dispatch({type: AUTH,data});
        console.log('nadagdag ko na sez');
        router.push('/home');
    }catch(error){
        console.log(error);
    }
}