import {makeStyles,createMuiTheme} from '@mui/styles';
import { COLORS } from '../Styles/colors';

export default makeStyles((theme)=>({


    paper: {
        marginTop: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },

    typos:{
        fontSize: 'clamp(1.5rem,6vw,4rem)',
    },

    form:{
      width:'100%',
      marginTop: '10vh',
    
    },
    submit:{
      backgroundColor: COLORS.BLUE,
      marginTop: "25px",
      
    },

    logintxt: {
      fontSize: "50px",
    }

    
}))