import { Box, TextField } from "@mui/material";
import {AppColor} from "../../utils/Utils";
import { PrimaryButton } from "../Button/PrimaryButton";
import AddIcon from "@mui/icons-material/Add";
import { SecondaryButton } from "../Button/SecondaryButton";
import React from "react";
import { addUser } from "../../services/user/usersRequest";
const styleLabel = {
  color: AppColor.primary,
  fontSize: "18px",
  fontFamily: "poppins",
};

class FormAddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state={ prenom:'',nom:'',email:'' }
    this.handlePrenomChange = this.handlePrenomChange.bind(this);
    this.handleNomChange = this.handleNomChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    
  }


   handleClose(){
    // Assuming props.handleClose is a function passed down as a prop
   this.props.handleClose(); // Call the handleClose function from props
};

  
  
   handleSubmit(event){
    let{prenom,nom,email} =this.state;
    let user=this.userBuild(prenom,nom,email);
    console.log('user',user)
    // add user to list
    addUser(user); 
    //reset form
    this.reset();
    //close model
    this.handleClose();
    window.location.reload();
   
     event.preventDefault();
   }
   userBuild(prenom,nom,email){
    let user={prenom,nom,email};
    user.dateCreation= new  Date().toISOString();;
    user.status='Active';
    return user;
   }
   reset(){
    this.setState({
       prenom:'',nom:'',email:'' 
    })
   }
  
   handlePrenomChange(event){
    this.setState({prenom:event.target.value})
   }
   handleNomChange(event){
    this.setState({nom:event.target.value})
   }
   handleEmailChange(event){
    this.setState({email:event.target.value})
   }
 
  

  render(){

    return (
      <Box
        display="flex"
        justifyContent="space-around"
        flexDirection="column"
        
      >
        <h2 style={{ color: AppColor.primary, fontFamily: "poppins" }}>
          {" "}
          Nouveau Nemo{" "}
        </h2>
        <form  onSubmit={this.handleSubmit} >
          <>
          <p style={styleLabel}>Prenom</p>
          <TextField  onChange={this.handlePrenomChange} value={this.state.prenom} required id="outlined-required"fullWidth  label="" />
        </>
        <>
          <p style={styleLabel}>Nom</p>
          <TextField onChange={this.handleNomChange} value={this.state.nom}  required id="outlined-required" fullWidth  label="" />
        </>
        <>
          <p style={styleLabel}>Email</p>
          <TextField onChange={this.handleEmailChange} value={this.state.email}  required id="outlined-required" fullWidth  label="" />
        </>
        <>
          <Box
            width="100%"
            margin="16px 0px"
            display="flex"
            alignContent="end"
            justifyContent="space-between"
          >
            <SecondaryButton
              title={"Annuler"}
              icon={<AddIcon />}
              onClicked={this.handleClose}
            ></SecondaryButton>
            <PrimaryButton title={"Ajouter"} onClicked={this.handleSubmit}></PrimaryButton>
          </Box>
        </>
        </form>
        
      </Box>
    );
  }
}

export default FormAddUser;
