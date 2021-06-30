import { imageURL } from "../../constants/data";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle=makeStyles({
    wrapper:{
        display:'flex',
        marginTop:20,
        justifyContent:'space-between'
        
    }
})
 const MidSection=()=>{
     const classes = useStyle();
     return(
         <Box className={classes.wrapper}>
             {
                 imageURL.map(image=>(
                     <img src={image} style={{width:"33%"}}/>
                 ))
             }
         </Box>
     )
 }
export default MidSection;
