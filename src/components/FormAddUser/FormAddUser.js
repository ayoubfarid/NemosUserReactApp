import { Box, TextField } from "@mui/material";
import AppColor from "../../utils/Utils";
import { PrimaryButton } from "../Button/PrimaryButton";
import AddIcon from '@mui/icons-material/Add';
import { SecondaryButton } from "../Button/SecondaryButton";
const styleLabel={color:AppColor.primary ,fontSize:"18px", fontFamily:"poppins" }
const FormAddUser =()=>{
    let colorPrimary=AppColor.primary;
    return (

        <Box display="flex" justifyContent="space-around" flexDirection="column" width="100%"  >
        <h2 style={{color:colorPrimary , fontFamily:"poppins" }}   > Nouveau Nemo </h2>
        <   >
            <p style={styleLabel}  >
            Prenom
          </p>
          <TextField
        
          required
          id="outlined-required"
          label=""
        />
        </>
        < >
            <p style={styleLabel}  >
            Nom
          </p>
          <TextField
        
          required
          id="outlined-required"
          label=""
        />
        </>
        <>
            <p style={styleLabel}  >
            Email
          </p>
          <TextField
        
          required
          id="outlined-required"
          label=""
        />
        </>
        <>
        <Box width="100%" margin="16px 0px" display="flex" alignContent="end" justifyContent="space-between"  >
            
         <SecondaryButton   title={"Annuler"} icon={<AddIcon/>}  onClicked={()=>{}}  >
                </SecondaryButton>
            <PrimaryButton   title={"Ajouter"}   onClicked={()=>{}}  >
                </PrimaryButton>
            
           
           
        
        </Box>
        </>
        
          
        </Box>
    );

}
export default FormAddUser;