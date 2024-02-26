import { Box } from '@mui/material';
import UserList from '../UserList/UserList';
export default function UserListContainer(){
    return(
        <Box display='flex'  alignContent='center' flexDirection='column' justifyContent='center' >
        <UserList/>
        </Box>
    );

}