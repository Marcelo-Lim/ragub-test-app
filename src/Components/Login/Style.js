import {makeStyles,createMuiTheme} from '@mui/styles';


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
     marginTop: '20vh'
    }
}))