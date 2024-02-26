import { Box } from "@mui/material";
import UserRowSkeleton from "../UserRowSkeloten/UserRowSkeleton";

export default function UsersIsLoading(){
    let array=[1,2,3,4];
    return (
        <>
        <Box height="500px" display="flex"  flexDirection="column" alignItems="center" justifyContent="center" >
        {array.map(number=><UserRowSkeleton></UserRowSkeleton>)}
            
          </Box>
        </>
    );
}