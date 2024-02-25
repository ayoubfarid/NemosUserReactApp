
import * as React from 'react';
import Box from '@mui/material/Box';

export default function ContentWrapper({children}) {
  return (
    <Box   display='flex' width='50%' alignContent='center' flexDirection='column' justifyContent='center' height="100%"  >
      {children}
    </Box>
  );
}