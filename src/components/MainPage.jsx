"use client";

import { Button, Container, Typography, Box, Grid, Paper, IconButton } from "@mui/material";
import Image from "next/image";
import profile from "../public/profile.jpeg"; // Replace with your image
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import ComputerIcon from "@mui/icons-material/Computer";
import ChatIcon from "@mui/icons-material/Chat";
import { useState, useEffect } from "react";

const MainPage = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  useEffect(() => {
    setActiveIcon("home");
  }, []);

  return (
    <Container maxWidth={false} sx={{ width: "1800px", height: "800px", marginTop: "4.5%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Fixed Main Content */}
      <Paper
          sx={{
            p: 4,
            borderRadius: 3,
            boxShadow: 3,
            background: "#f8f9fa",
            // width: "90%", 
            maxWidth: "1800px",
            height: "800px",
          }}
        >
        <Grid container spacing={4} alignItems="center">
          {/* Left Content Box */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>HI THERE!</Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "#c8a600" }}>
              I'M CHANDAN KUMAR SAHOO
            </Typography>
            <Typography variant="h6" sx={{ background: "#ffcc00", display: "inline-block", p: 1, borderRadius: 1, mt: 2 }}>
              UIUX DESIGNER & WEB DEVELOPER
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              I am a dedicated UI/UX designer and web developer with a strong foundation in crafting intuitive digital experiences.
              With 1 year of experience in the IT field, I have designed and developed websites and mobile applications, seamlessly
              blending aesthetics with technical expertise to create user-centered solutions.
            </Typography>
            <Button
              variant="contained"
              sx={{ background: "#ffcc00", color: "black", mt: 3, fontWeight: "bold", '&:hover': { background: "#e6b800" } }}
            >
              MORE ABOUT ME
            </Button>
          </Grid>

          {/* Right Image Box */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image
              src={profile.src}
              alt="Chandan Kumar Sahoo"
              width={550}
              height={730}
              style={{ borderRadius: "20px" }}
            />
          </Grid>
        </Grid>
      </Paper>

      {/* Sidebar */}
      <Box sx={{ width: 35, height: "40%", background: "#ffcc00", display: "flex", flexDirection: "column", alignItems: "center", py: 4, borderRadius: "20px", position: "absolute", right: 20 }}>
        <IconButton onClick={() => setActiveIcon("home")}>
          <HomeIcon sx={{ fontSize: 30, mb: 2, cursor: "pointer", color: activeIcon === "home" ? "white" : "black" }} />
        </IconButton>
        <IconButton onClick={() => setActiveIcon("about")}>
          <PersonIcon sx={{ fontSize: 30, mb: 2, cursor: "pointer", color: activeIcon === "about" ? "white" : "black" }} />
        </IconButton>
        <IconButton onClick={() => setActiveIcon("resume")}>
          <WorkIcon sx={{ fontSize: 30, mb: 2, cursor: "pointer", color: activeIcon === "resume" ? "white" : "black" }} />
        </IconButton>
        <IconButton onClick={() => setActiveIcon("profile")}>
          <ComputerIcon sx={{ fontSize: 30, mb: 2, cursor: "pointer", color: activeIcon === "profile" ? "white" : "black" }} />
        </IconButton>
        <IconButton onClick={() => setActiveIcon("contact")}>
          <ChatIcon sx={{ fontSize: 30, mb: 2, cursor: "pointer", color: activeIcon === "contact" ? "white" : "black" }} />
        </IconButton>
      </Box>
    </Container>
  );
};

export default MainPage;
