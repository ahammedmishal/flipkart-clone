import { navData } from '../../constants/data'
import { Box ,Typography ,makeStyles} from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  
    component: {
       display:'flex',
       margin:'55px 380px 1px 380px',
       justifyContent:'space-between'
    },
    container: {
        textAlign: 'center',
        padding:'12px , 8px'
    },
    image: {
        width:64
    },
    text:{
        fontSize:14,
        fontWeight:600
    }

}));


const NavBar = () =>{
    const classes = useStyle();
    return( 
       <Box className = {classes.component}>
           {
               navData.map(data=>(
                   <Box className={classes.container}>
                    <img src={data.url} className={classes.image} />
                    <Typography className={classes.text}>{data.text}</Typography>   
                   </Box>
               ))
           }
       </Box>
    )
}

export default NavBar