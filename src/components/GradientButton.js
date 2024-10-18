import React from 'react';
import { Button } from '@mui/material';

const GradientButton = ({ children, onClick, ...props }) => {
  return (
    <Button
      variant="contained"
      fullWidth
      onClick={onClick}
      sx={{
        mt: 2,
        py: 1.5,
        background: 'linear-gradient(to right, #1D4ED8, #5AD7FE)', // Blue gradient
        color: 'white',
        '&:hover': {
          background: 'linear-gradient(to right, #1976D2, #1E88E5)', // Darker gradient on hover
        },
        ...props.sx, // Allow additional styles from props
      }}
      {...props} // Spread remaining props
    >
      {children}
    </Button>
  );
};



export default GradientButton;
