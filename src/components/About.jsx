"use client";

import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 'calc(100vh - 64px)', marginTop: '64px' }}> {/* Adjusted marginTop */}
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" align="center">
        {/* Add your about me text here */}
        I am a passionate and dedicated developer with a strong background in... (Your about me details)
      </Typography>
    </Box>
  );
};

export default About;