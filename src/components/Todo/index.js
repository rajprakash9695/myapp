import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { Typography } from '@mui/material';

const ariaLabel = { 'aria-label': 'description' };

export default function Index() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
    <Typography className='mt-80'  varient="h2">helllo</Typography>
      <Input  inputProps={ariaLabel} />
      <Input placeholder="Placeholder" inputProps={ariaLabel} />
      <Input   inputProps={ariaLabel} />
      <Input  error inputProps={ariaLabel} />
    </Box>
  );
}