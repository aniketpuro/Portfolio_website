"use client"

import type React from "react"

import { Box, Typography, Container, useTheme } from "@mui/material"
import { GitHub, LinkedIn, Email } from "@mui/icons-material"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactSection() {
  const theme = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const socialLinks = [
    {
      icon: <GitHub />,
      label: "GitHub",
      url: "https://github.com/aniketpuro",
      color: "#333",
    },
    {
      icon: <LinkedIn />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/aniket-purohit-38665a24b",
      color: "#0077B5",
    },
    {
      icon: <Email />,
      label: "Email",
      url: "mailto:aniket@example.com",
      color: "#EA4335",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      {/* Mandana art inspired background pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%23${theme.palette.secondary.main.replace(
            "#",
            "",
          )}' fillOpacity='0.4' fillRule='evenodd'/%3E%3C/svg%3E")`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 2,
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 700,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              position: "relative",
              display: "inline-block",
              left: "50%",
              transform: "translateX(-50%)",
              "&::after": {
                content: '""',
                position: "absolute",
                width: "80px",
                height: "4px",
                bottom: "-10px",
                left: "calc(50% - 40px)",
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: "2px",
              },
            }}
          >
            Get In Touch
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: { xs: 4, md: 6 },
              textAlign: "center",
              color: theme.palette.text.secondary,
              maxWidth: "700px",
              mx: "auto",
              px: 2,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            I'm always open to discussing new opportunities, collaborations, or just having a chat about DevOps and
            cloud technologies.
          </Typography>
        </motion.div>

        {/* Split pattern for contact section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 0,
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: `0 8px 30px ${theme.palette.mode === "dark" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"}`,
          }}
        >
          {/* Left side - Contact form */}
          <Box
            sx={{
              flex: 1,
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)"
                  : "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
              p: { xs: 3, sm: 5 },
              position: "relative",
              borderRight: { xs: "none", md: `1px solid ${theme.palette.divider}` },
              borderBottom: { xs: `1px solid ${theme.palette.divider}`, md: "none" },
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "40px",
                    height: "3px",
                    bottom: "-8px",
                    left: 0,
                    background: theme.palette.primary.main,
                    borderRadius: "2px",
                  },
                }}
              >
                Send me\
