import React from 'react'
import { Dialog, DialogContent,makeStyles,Box, Typography, TextField, Button} from '@material-ui/core'



const useStyle = makeStyles({
    conatiner:{
        height: '70vh',
        width: '90vh',
        overflow: 'hidden',
   
    },
    image:{
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height:'70vh',
        backgroundRepeat:'no-repeat',
        background: '#2874f0',
        width:'40%',
        backgroundPosition:'center 85%',
        '& > *': {
            color:'#ffffff',
            fontWeight:600,
            padding: '45px 35px',
        }
    },
    login:{
        padding:'25px 35px',
        display:'flex',
        flex:1,
        flexDirection: 'column',
        '& > * ': {
            marginTop: 35,
            marginLeft: 25
        }
    },
    text:{
        color:'#878787',
        fontSize: 14
    },
    loginBtn:{
        textTransform: 'none',
        background:'#fB641B',
        color: '#ffffff',
        height: 48,
        borderRadius: 2,
      
        
    },
    requestBtn:{
        textTransform: 'none',
        background:'#FFFFFF',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%'
    },
    createText:{
        textAlign:'center',
        marginTop:'auto'
    }
})


const Login = ({ open, setOpen }) => {
  
    const classes = useStyle()

    const handleClose = () =>{
        setOpen(false)
    }

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={'md'}>
            <DialogContent className={classes.conatiner} style={{padding:0}}>
                <Box style={{display:'flex'}}>
                    <Box className={classes.image}>
                        <Typography variant='h4'>Login</Typography>
                        <Typography style={{fontSize:25,fontWeight:400}}>Get access to you orders,Wishlist and Recommendation</Typography>
                    </Box>
                    <Box className={classes.login}>
                        <TextField name={'username'} label='Enter Email/Mobile number'/>
                        <TextField password={'password'} label='Enter passsword'/>
                        <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of use and privacy policy.</Typography>

                        <Button variant="contained" className={classes.loginBtn}>Login</Button>
                        <Typography style={{textAlign:'center'}}>OR</Typography>
                        <Button variant="contained" className={classes.requestBtn}>Request otp</Button>
                        <Typography style={{textAlign:'center', marginTop:'auto',fontSize:20}} className={classes.createText}>New to Flipkart? create an account</Typography>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login
