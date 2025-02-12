"use client";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import Image from "next/image"; // Import Image component

const Portfolio = () => {

const projects = [
        {
            title: "Project 1",
            description: "Description of project 1",
            image: "/path/to/project1.jpg", // Path to your image
        },
        {
            title: "Project 2",
            description: "Description of project 2",
            image: "/path/to/project2.png", // Path to your image
        },
        // Add more projects as needed
    ];


  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 'calc(100vh - 64px)', marginTop: '64px' }}>{/* Adjusted marginTop */}
      <Typography variant="h4" gutterBottom>
        Portfolio
      </Typography>

        <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                        {project.image && ( // Conditionally render the Image component
                            <CardMedia sx={{ height: 200, position: 'relative' }}>
                                <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} />
                            </CardMedia>
                        )}
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {project.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {project.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>

    </Box>
  );
};

export default Portfolio;