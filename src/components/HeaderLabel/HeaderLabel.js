import AppColor from "../../utils/Utils";

export default function HeaderLabel(){
    let colorPrimary=AppColor.primary;
    return (
        <>
        <h2 style={{color:colorPrimary, fontFamily:"poppins" }}  > Nemo </h2>
        </>
    );

}