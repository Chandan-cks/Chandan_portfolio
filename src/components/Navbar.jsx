"use client";

import { useState } from "react";
import { AppBar, Toolbar, Button, Box, Avatar, IconButton, Modal, TextField } from "@mui/material";
import Image from "next/image";
import logo from "../public/logo.png";
import defaultProfile from "../public/profile.jpeg"; // Default profile image
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false); // State for modal
  const [openUploadModal, setOpenUploadModal] = useState(false); // Upload modal state
  const [profilePic, setProfilePic] = useState(defaultProfile.src); // Profile picture state
  const [imageUrl, setImageUrl] = useState(""); // Image URL input

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenUploadModal = () => {
    setOpenUploadModal(true);
  };

  const handleCloseUploadModal = () => {
    setOpenUploadModal(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl); // Update profile picture
      setOpenUploadModal(false); // Close upload modal
    }
  };

  const handleUrlUpload = () => {
    if (imageUrl) {
      setProfilePic(imageUrl); // Set profile picture from URL
      setImageUrl(""); // Reset input field
      setOpenUploadModal(false); // Close upload modal
    }
  };

  const menuItems = ["Home", "About", "Resume", "Portfolio", "Contact Me"];

  const isActive = (label) =>
    pathname === (label === "Home" ? "/" : `/${label.toLowerCase().replace(" ", "")}`);

  return (
    <>
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
          {/* Logo Section */}
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}
            style={{ backgroundColor: "white", borderRadius: "50px" }}
          />

          {/* Navigation Buttons for Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 5, background: "#ffffff30", p: 1, borderRadius: 3 }}>
            {menuItems.map((label) => (
              <Button
                key={label}
                color={label === "Home" ? "white" : isActive(label) ? "primary" : "inherit"} // Set "Home" to white color
                sx={{
                  "&:hover": { background: "#416788" },
                  fontWeight: isActive(label) && label !== "Home" ? "bold" : "normal", // Make active button bold except "Home"
                }}
                onClick={() => router.push(label === "Home" ? "/" : `/${label.toLowerCase().replace(" ", "")}`)}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Profile Avatar with Upload Feature */}
          <Box>
            <Button color="inherit" href="https://www.linkedin.com/in/chandan-sahoo-bb422b16a/" target="_blank">
              <LinkedInIcon sx={{ width: 30, height: 30 }} />
            </Button>
            <Button color="inherit" href="https://github.com/Chandan-cks" target="_blank">
              <GitHubIcon sx={{ width: 30, height: 30 }} />
            </Button>
            <IconButton
              sx={{
                p: 0,
                "&:hover": {
                  transform: "scale(1.1)", // Slight zoom effect on hover
                  transition: "transform 0.3s ease",
                },
              }}
              onClick={handleOpenModal}
            >
              <Avatar src={profilePic} alt="Profile" sx={{ width: 50, height: 50 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Modal for Enlarged Profile Image */}
      <Modal open={openModal} onClose={handleCloseModal} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box sx={{ position: "relative", bgcolor: "white", p: 1, borderRadius: 3, textAlign: "center" }}>
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: "absolute", top: 0, right: 0, color: "black" }}
          >
            <CloseIcon />
          </IconButton>
          <Image src={profilePic} alt="Profile" width={200} height={250} style={{ borderRadius: "10px" }} />

          {/* Profile Picture change button */}
          <Box sx={{ marginTop: 2 }}>
            <Button variant="contained" sx={{ padding: "10px 20px" }} onClick={handleOpenUploadModal}>
              Update Profile
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Modal for Uploading a New Profile Picture */}
      <Modal open={openUploadModal} onClose={handleCloseUploadModal} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box sx={{ position: "relative", bgcolor: "white", p: 1, borderRadius: 3, textAlign: "center", width: 200 }}>
          <IconButton
            onClick={handleCloseUploadModal}
            sx={{ position: "absolute", top: 0, right: 0, color: "black" }}
          >
            <CloseIcon />
          </IconButton>
          <h3>New Profile Picture</h3>
          <input type="file" accept="image/*" onChange={handleFileUpload} />
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleUrlUpload}>
            Upload
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;
