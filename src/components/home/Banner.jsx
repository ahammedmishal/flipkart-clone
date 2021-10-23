import Carousel from "react-material-ui-carousel"
import { bannerData } from "../../constants/data"
import { makeStyles} from '@material-ui/core';

const useStyle = makeStyles({
   image:{
      width:'100%',
      height:'280px'
   },
   carousel:{
      marginTop:10
   }
})

const Banner = () =>{
   const classes = useStyle()
   return(
       <Carousel  className={classes.carousel}
       autoplay={true}
       animation='slide'
       indicators={false}
       cycleNavigation={true}
       navButtonsAlwaysVisible={true}
       navButtonsProps={{
          style:{
             background:'#ffffff',
             color:'#494949',
             borderRadius:0,
             margin:0
             
          }
       }}
       >

         
          {
             bannerData.map(image=>(
                <img  className={classes.image} src={image}/>
             ))
         }
       </Carousel>
   )
}
export default Banner