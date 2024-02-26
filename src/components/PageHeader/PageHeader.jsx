import { Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { PrimaryButton } from "../Button/PrimaryButton";
import HeaderLabel from "../HeaderLabel/HeaderLabel";
import { useState } from "react";
import BasicModal from "../BasicModel/BasicModel";
import FormAddUser from "../FormAddUser/FormAddUser";

const PageHeader = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    console.log("clicked");
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Grid
      container
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      <Grid>
        <HeaderLabel />
      </Grid>
      <Grid >
        <PrimaryButton
          title={"Ajouter"}
          icon={<AddIcon />}
          onClicked={handleOpen}
        ></PrimaryButton>
        <BasicModal
          body={<FormAddUser handleClose={handleClose}  />}
          open={open}
          
        />
      </Grid>
    </Grid>
  );
};
export default PageHeader;
