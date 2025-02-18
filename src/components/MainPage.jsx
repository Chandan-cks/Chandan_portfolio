"use client";

import { Button, Container, Typography, Box, Grid, Paper, Fab, Popper, Zoom } from "@mui/material";
import Image from "next/image";
import profile from "../public/profile.jpeg"; // Replace with your image
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import ComputerIcon from "@mui/icons-material/Computer";
import ChatIcon from "@mui/icons-material/Chat";
import { useState } from "react";
import Link from "next/link"; // Import Link for navigation

const MainPage = () => {
  const [activeIcon, setActiveIcon] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuToggle = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setMenuOpen((prev) => !prev);
  };

  const icons = [
    { icon: <PersonIcon />, key: "about", link: "/about" },
    { icon: <WorkIcon />, key: "resume", link: "/resume" },
    { icon: <ComputerIcon />, key: "profile", link: "/profile" },
    { icon: <ChatIcon />, key: "contact", link: "/contact" },
  ];

  return (
    <Container
      maxWidth={false}
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: 2, md: 4 },
      }}
    >
      {/* Fixed Main Content */}
      <Paper
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 3,
          boxShadow: 3,
          background: "#f8f9fa",
          maxWidth: "1200px",
          width: "90%",
          height: "auto",
          marginTop: "3.5%",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", md: "2rem" } }}>
              HI THERE!
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#c8a600", fontSize: { xs: "1.8rem", md: "2.5rem" } }}
            >
              I'M CHANDAN KUMAR SAHOO
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                background: "#ffcc00",
                display: "inline-block",
                p: 1,
                borderRadius: 1,
                mt: 2,
                fontSize: { xs: "0.8rem", md: "1rem" },
              }}
            >
              UIUX DESIGNER & WEB DEVELOPER
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, fontSize: { xs: "0.9rem", md: "1rem" } }}>
              I am a dedicated UI/UX designer and web developer with a strong foundation in crafting intuitive digital experiences.
              With 1 year of experience in the IT field, I have designed and developed websites and mobile applications,
              seamlessly blending aesthetics with technical expertise to create user-centered solutions.
            </Typography>

            {/* Link for About Me */}
            <Link href="/about" passHref>
              <Button
                variant="contained"
                sx={{
                  background: "#ffcc00",
                  color: "black",
                  mt: 3,
                  fontWeight: "bold",
                  fontSize: { xs: "0.8rem", md: "1rem" },
                  "&:hover": { background: "#e6b800" },
                }}
              >
                MORE ABOUT ME
              </Button>
            </Link>
          </Grid>

          {/* Right Image Box */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image
              src={profile.src}
              alt="Chandan Kumar Sahoo"
              width={550}
              height={730}
              style={{ borderRadius: "20px", maxWidth: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Paper>

      {/* Floating Circular Navigation Without Home Button */}
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          right: 20,
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <Popper open={menuOpen} anchorEl={anchorEl} placement="left" transition sx={{ zIndex: 10 }}>
          {({ TransitionProps }) => (
            <Zoom {...TransitionProps} in={menuOpen}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2, alignItems: "center" }}>
                {icons.map(({ icon, key, link }) => (
                  <Link key={key} href={link} passHref>
                    <Fab
                      size="small"
                      color={activeIcon === key ? "secondary" : "default"}
                      onClick={() => setActiveIcon(key)}
                    >
                      {icon}
                    </Fab>
                  </Link>
                ))}
              </Box>
            </Zoom>
          )}
        </Popper>
      </Box>
    </Container>
  );
};

export default MainPage;