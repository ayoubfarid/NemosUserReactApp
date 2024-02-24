
import * as React from 'react';
import Box from '@mui/material/Box';
import  PageHeader   from "./../PageHeader/PageHeader";

export default function ContentWrapper() {
  return (
    <Box border="none"  display='flex' width='50%' alignContent='center' flexDirection='column' justifyContent='center' component="section"  sx={{ p: 2, border: '1px dashed grey' }}>
      <PageHeader/>
    </Box>
  );
}