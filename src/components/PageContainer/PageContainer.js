
import AppColor from './../../utils/Utils'
import { Box } from '@mui/material';
export default function  PageContainer({children}){
    let bgColor=AppColor.lightBackground;
    var height=Screen.availHeight;
    return(
        <Box border="none" height={{height}} style={{backgroundColor:bgColor}}  bgcolor={bgColor}  display='flex' justifyContent='center' alignContent="center" width='100%'>
        {children}
        </Box>
    );


}