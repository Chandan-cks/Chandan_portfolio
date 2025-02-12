"use client";
import { Box, Typography } from "@mui/material";

const Resume = () => {
  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 'calc(100vh - 64px)', marginTop: '64px' }}>{/* Adjusted marginTop */}
      <Typography variant="h4" gutterBottom>
        Resume
      </Typography>
      {/* Add your resume content here.  Consider using a PDF viewer or a more structured layout. */}
      <Typography variant="body1">
        {/* You can either embed a PDF or list your skills, experience, education, etc. */}
        {/* Example: */}
        {/* <ul>
          <li>Experience: ...</li>
          <li>Education: ...</li>
          <li>Skills: ...</li>
        </ul> */}
        Resume Content Here...
      </Typography>
    </Box>
  );
};

export default Resume;