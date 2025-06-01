"use client"

import type React from "react"

import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  useTheme,
} from "@mui/material"
import { GitHub, LinkedIn, Email, Send } from "@mui/icons-material"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactSection() {
  const theme = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <Box id="contact" sx={{ py: 10, backgroundColor: theme.palette.background.paper }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
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
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Get In Touch
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 6,
              textAlign: "center",
              color: theme.palette.text.secondary,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            I'm always open to discussing new opportunities, collaborations, or just having a chat about DevOps and
            cloud technologies.
          </Typography>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  background:
                    theme.palette.mode === "dark"
                      ? "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)"
                      : "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                    Send me a message
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      margin="normal"
                      required
                      sx={{ mb: 2 }}
                    />

                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      margin="normal"
                      required
                      sx={{ mb: 2 }}
                    />

                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      margin="normal"
                      required
                      sx={{ mb: 3 }}
                    />

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<Send />}
                        fullWidth
                        sx={{
                          py: 1.5,
                          "&:hover": {
                            boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                  Connect with me
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
                  Feel free to reach out through any of these platforms. I'm always excited to connect with fellow
                  developers and discuss the latest in DevOps and cloud technologies.
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <IconButton
                        href={link.url}
                        target="_blank"
                        sx={{
                          width: 60,
                          height: 60,
                          backgroundColor: theme.palette.mode === "dark" ? "#2a2a2a" : "#f5f5f5",
                          border: `2px solid ${theme.palette.divider}`,
                          "&:hover": {
                            backgroundColor: link.color + "20",
                            borderColor: link.color,
                            color: link.color,
                            transform: "translateY(-3px)",
                            boxShadow: `0 8px 25px ${link.color}30`,
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        {link.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
