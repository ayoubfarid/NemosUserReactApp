import { Box } from "@mui/material";
import noDataIcon from "./../../assets/image/no-data-found-icon.png";

export default function UsersNotFound(){
    return (
        <>
        <Box height="500px" display="flex" alignItems="center" justifyContent="center" bgcolor="white" flexDirection="column" border="1px solid #333F62" borderRadius="10px">
             <img src={noDataIcon} alt="no data found " />
            
            <h2> Aucun nemo trouve </h2>
          </Box>
        </>
    );
}