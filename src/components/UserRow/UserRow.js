import { Avatar, Box, Button, Grid, Menu, MenuItem } from "@mui/material";
import { formatDate, AppColor } from "../../utils/Utils";
import CircleIcon from "@mui/icons-material/Circle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import { changeStatusUser, removeUser } from "../../services/user/usersRequest";
function AvatarUser({ props }) {
  return (
    <Box style={boxAvatarUserStyle}>
      <Avatar sx={avatarStyle}>
        {props.nom.charAt(0)}
        {props.prenom.charAt(0)}
      </Avatar>
      <Box
        display="flex"
        margin="0px 16px"
        flexDirection="column"
        alignItems="start"
        height="fit-content"
      >
        <UserFullname props={props} />
        <UserEmail props={props} />
      </Box>
    </Box>
  );
}
function UserDateCreation({ props }) {
  return (
    <Box
      display="flex"
      margin="0px 16px"
      flexDirection="column"
      fontFamily="poppins"
      alignItems="start"
      height="fit-content"
    >
      <RegularText> Date creation </RegularText>
      <RegularText> {formatDate(props.dateCreation)} </RegularText>
    </Box>
  );
}

function UserStatus({ props }) {
  //status: "Active"
  const color = props.status === "Active" ? AppColor.green : AppColor.yellow;
  return (
    <Box
      style={{
        padding: "16px 16px",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        fontFamily: "poppins",

        width: "100%",
      }}
    >
      <CircleIcon
        fontSize="small"
        style={{ color: color, marginRight: "4px", fontSize: "16px" }}
      />
      <div
        style={{
          fontWeight: "normal",
          textTransform: "uppercase",
          fontSize: "16px",
          color: color,
        }}
      >
        {props.status}
      </div>
    </Box>
  );
}
const userRowStyle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  margin: "16px 0px",
  justifyContent: "space-between",
  width: "100%",
  borderRadius: "10px",
  borderBottom: "3px solid #333F62",
  borderTop: "0.5px solid #333F62",
  borderRight: "0.5px solid #333F62",
  borderLeft: "0.5px solid #333F62",
};

function DropDownUserActions({ props }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const suspendSelectedUser = () => {
    let userId = props.id;
    changeStatusUser(userId, "Suspendu");
    window.location.reload();
  };
  const activateSelectedUser = () => {
    let userId = props.id;
    changeStatusUser(userId, "Active");
    window.location.reload();
  };
  const removeSelectedUser = () => {
    let userId = props.id;
    removeUser(userId);
    window.location.reload();
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {props.status === "Active" ? (
          <MenuItem onClick={suspendSelectedUser} style={{color:AppColor.yellow}}>
            Suspendre
          </MenuItem>
        ) : (
          <MenuItem onClick={activateSelectedUser} style={{color:AppColor.green}} >
            
            Activer
          </MenuItem>
        )}
        <MenuItem onClick={removeSelectedUser} style={{color:AppColor.red}}  > Supprimer</MenuItem>
      </Menu>
    </div>
  );
}
export default function UserRow({ props }) {
  return (
    <Grid container style={userRowStyle}>
      <Grid item xs={4}>
        <AvatarUser props={props} />
      </Grid>
      <Grid item xs={3}>
        <UserDateCreation props={props} />
      </Grid>
      <Grid item xs={3}>
        <UserStatus props={props} />
      </Grid>
      <Grid item xs={2}>
        <DropDownUserActions props={props} />
      </Grid>
    </Grid>
  );
}

const avatarStyle = {
  bgcolor: AppColor.lightBrown,
  color: AppColor.darkBrown,
  height: "55px",
  width: "55px",
  fontFamily: "poppins",
  textTransform: "uppercase",
};

function UserFullname({ props }) {
  const fullname = props.nom + " " + props.prenom;
  return <BoldText>{fullname}</BoldText>;
}

function BoldText({ children }) {
  return (
    <div
      style={{
        fontWeight: "bold",
        textTransform: "capitalize",
        fontSize: "16px",
      }}
    >
      {children}
    </div>
  );
}
function RegularText({ children }) {
  return (
    <div style={{ fontWeight: "normal", fontSize: "14px" }}>{children}</div>
  );
}
function UserEmail({ props }) {
  return <RegularText>{props.email}</RegularText>;
}
const boxAvatarUserStyle = {
  padding: "16px 16px",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  fontFamily: "poppins",

  width: "100%",
};
