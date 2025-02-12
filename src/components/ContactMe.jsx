"use client";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send an email)
        console.log("Form submitted:", formData);
        // Reset form after submission (optional)
        setFormData({ name: "", email: "", message: "" });
    };

  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 'calc(100vh - 64px)', marginTop: '64px' }}>{/* Adjusted marginTop */}
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 600 }}> {/* Added form and styling */}
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          type="email"
          required
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
        />
        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactMe;