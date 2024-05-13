import { Box } from '@mui/material';
import React from 'react';
import backgroundImage from '../assets/background.gif'; // Import the background image

const BackgroundImg = () => {
  return (
    <Box
      component="div"
      sx={{
        position: 'fixed', // Fixed position to prevent scrolling
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh', // Set height to cover viewport height
        backgroundImage: `url(${backgroundImage})`, // Use the imported background image
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    />
  );
};

export default BackgroundImg;
