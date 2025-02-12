"use client";

import { AppBar, Toolbar, Button, Box, Avatar } from "@mui/material";
import Image from "next/image";
import logo from "../public/logo.png";
import profile from "../public/profile.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "#6fa3a8",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Image
          src={logo.src}
          alt="Logo"
          width={50}
          height={50}
          style={{ backgroundColor: "white", borderRadius: "50px" }}
        />
        <Box sx={{ display: "flex", gap: 5, background: "#ffffff30", p: 1, borderRadius: 3 }}>
          <Button
            color="inherit"
            sx={{ "&:hover": { background: "#416788" } }}
            onClick={() => router.push("/")}
          >
            About
          </Button>
          <Button
            color="inherit"
            sx={{ "&:hover": { background: "#416788" } }}
            onClick={() => router.push("/")}
          >
            Resume
          </Button>
          <Button
            color="inherit"
            sx={{ "&:hover": { background: "#416788" } }}
            onClick={() => router.push("/")}
          >
            Portfolio
          </Button>
          <Button
            color="inherit"
            sx={{ "&:hover": { background: "#416788" } }}
            onClick={() => router.push("/")}
          >
            Contact Me
          </Button>
        </Box>
        <Box >
          <Button color="inherit" href="https://www.linkedin.com/in/chandan-sahoo-bb422b16a/" target="_blank">
            <LinkedInIcon sx={{ width: 30, height: 30 }} />
          </Button>
          <Button color="inherit" href="https://github.com/Chandan-cks" target="_blank">
            <GitHubIcon sx={{ width: 30, height: 30 }} />
          </Button>
          <Button sx={{ p: 0 }}>
            <Avatar src={profile.src} alt="Profile" sx={{ width: 50, height: 50 }} />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
