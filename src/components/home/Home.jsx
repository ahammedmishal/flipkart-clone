import React from 'react'

import {makeStyles,Box} from '@material-ui/core';

//components
import NavBar from './NavBar'
import Banner from './Banner'
import Slide from '../Slide';
import MidSection from './MidSection';

const useStyle = makeStyles({
    component:{
        padding:'10px 100px 0 100px',
        background:'#f2f2f2'
    },
    rightWrapper:{
        background: '#FFFFFF',
        padding:'5px 0 0 15px',
        margin: '12px 0 0 10px',
        width:'17%',
    }
})

const Home = ()=> {
    const classes = useStyle()
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <div>
            <NavBar/>
            <Box className={classes.component}>
                <Banner/>
                <Box style={{display:'flex'}}>
                    <Box style={{width:'84%'}}>
                        <Slide
                            timer={true}
                            title="Deal of the Day"
                        />
                    </Box>
                    <Box className={classes.rightWrapper}>
                        <img src={adURL} style={{width:230}}/>
                    </Box>
                </Box>
                <MidSection/>
                <Slide timer={false} title="Discounts for you"/>
                <Slide timer={false}  title="Suggested items" />
                <Slide timer={false} title="Recommended items"/>
                <Slide timer={false}  title="Best sellers" />
            </Box>
        </div>
    )
}

export default Home
