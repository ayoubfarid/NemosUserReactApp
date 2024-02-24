import { Grid,Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function PageHeader(){

    return (
        <Grid container  display='flex' alignItems='center' justifyContent='space-between' width='100%'  >
            <Grid item xs={4}>
                <h2 style={{color: '#111827'}}  > Nemo </h2>
            </Grid>
        <Grid item xs={4}>
          
                <Button style={{borderRadius: '20px'}} color="primary" startIcon={<AddIcon/>} variant="contained"  >
                    Ajouter
                </Button>
            
        </Grid>
        </Grid>

    );
}