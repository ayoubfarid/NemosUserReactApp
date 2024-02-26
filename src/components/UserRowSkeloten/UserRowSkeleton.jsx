import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import {  Grid } from '@mui/material';
const userRowStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    margin: "16px 0px",
    justifyContent: "space-between",
    width: "100%",
    padding:"16px 16px",
    borderRadius: "10px",
    borderBottom: "3px solid #333F62",
    borderTop: "0.5px solid #333F62",
    borderRight: "0.5px solid #333F62",
    borderLeft: "0.5px solid #333F62",
  };
export default function UserRowSkeleton(){
    return (
        <Grid container style={userRowStyle}>
      <Grid item xs={2}>
      <Skeleton variant="circular" width={50} height={50}   />
      </Grid>
      <Grid item xs={3}>
      <Skeleton variant="rectangular" width={160} height={10} />
      </Grid>
      <Grid item xs={3}>
      <Skeleton variant="rectangular" width={160} height={10} />
      </Grid>
      <Grid item xs={3}>
      <Skeleton variant="rectangular" width={160} height={10} />
      </Grid>
    </Grid>
    );
    
}