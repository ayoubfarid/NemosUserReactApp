import { Button } from "@mui/material";
import AppColor from "../../utils/Utils";

const btnStyle={
    fontColor:AppColor.colorPrimary,
    borderRadius: '20px', border:"0.5px solid #333F62",color:AppColor.colorPrimary,textTransform:"capitalize"  }
export function SecondaryButton(props) {
    return (
        <Button variant="outlined"  onClick ={props.onClicked} style={btnStyle} >
            
                    {props.title}
                </Button>
    );
    
}