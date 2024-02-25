import { Button } from "@mui/material";
import {AppColor} from "../../utils/Utils";

export function PrimaryButton(props) {
    let colorPrimary=AppColor.primary;
    return (
        <Button onClick ={props.onClicked} style={{borderRadius: '20px',backgroundColor:colorPrimary,textTransform:"capitalize"  }} color="primary" startIcon={props.icon} variant="contained"  >
                    {props.title}
                </Button>
    );
    
}