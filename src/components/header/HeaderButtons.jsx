import React,{useState} from 'react'
import { Button,makeStyles, Box, Typography, Badge, DialogTitle} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'

//components
import LoginDialog from '../Login/Login'

const useStyle = makeStyles({
    login:{
        backgroundColor:'white',
        color:'#2874f0',
        fontWeight:'600',
        borderRadius:2,
        padding:'6px 40px',
        textTransform:'none',
        boxShadow:'none'
    },
    wrapper:{
        margin:'0 15% 0 auto',
        display:'flex',
        ' & > *':{
            marginRight:50,
            alignItems:'center',
            textDecoration: 'none'
            
        }
    },
    conatiner:{
        display:'flex'
    }
})
export default function HeaderButtons() {
    const classes = useStyle()
    const [open,setOpen] = useState(false);

    const openLoginDialog = () =>{
        setOpen(true)
    }

    return (
        <Box className={classes.wrapper}>
            <Button onClick={()=>openLoginDialog()} variant="contained" style={{backgroundColor:'white',color:'#2874f0',fontWeight:'600',borderRadius:2,padding:'6px 40px',textTransform:'none'}}>Login</Button>
            <Typography style={{marginTop:6}}>More</Typography>
            <Box className={classes.conatiner}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCart/>
                </Badge>
                <Typography style={{marginLeft:10}}>Cart</Typography>
            </Box>
            <LoginDialog
                open={open} setOpen={setOpen}
            />
        </Box>
    )
}

