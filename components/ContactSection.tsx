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
        overflow: "hidden",
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Grid container spacing={6} alignItems="stretch">
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants} style={{ height: "100%" }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    background:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)"
                        : "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: "16px",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: `0 8px 30px ${theme.palette.mode === "dark" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"}`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: `0 12px 40px ${theme.palette.primary.main}20`,
                      borderColor: theme.palette.primary.main + "50",
                    },
                  }}
                >
                  {/* Colorful top border - Mandana art inspired */}
                  <Box
                    sx={{
                      height: "6px",
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                    }}
                  />

                  <CardContent
                    sx={{
                      p: 4,
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
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
                      Send me a message
                    </Typography>

                    <Box
                      component="form"
                      onSubmit={handleSubmit}
                      sx={{ mt: 2, flexGrow: 1, display: "flex", flexDirection: "column" }}
                    >
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        margin="normal"
                        required
                        sx={{
                          mb: 2,
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
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
                        sx={{
                          mb: 2,
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
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
                        sx={{
                          mb: 3,
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: theme.palette.primary.main,
                            },
                          },
                        }}
                      />

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ marginTop: "auto" }}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={<Send />}
                          fullWidth
                          sx={{
                            py: 1.5,
                            borderRadius: "50px",
                            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            boxShadow: `0 4px 20px ${theme.palette.primary.main}40`,
                            "&:hover": {
                              boxShadow: `0 8px 25px ${theme.palette.primary.main}60`,
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
              <motion.div variants={itemVariants} style={{ height: "100%" }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    background:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)"
                        : "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: "16px",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: `0 8px 30px ${theme.palette.mode === "dark" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"}`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: `0 12px 40px ${theme.palette.secondary.main}20`,
                      borderColor: theme.palette.secondary.main + "50",
                    },
                  }}
                >
                  {/* Colorful top border - Mandana art inspired */}
                  <Box
                    sx={{
                      height: "6px",
                      background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                    }}
                  />

                  <CardContent
                    sx={{
                      p: 4,
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        mb: 3,
                        fontWeight: 600,
                        textAlign: "center",
                        color: theme.palette.secondary.main,
                        position: "relative",
                        display: "inline-block",
                        alignSelf: "center",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: "40px",
                          height: "3px",
                          bottom: "-8px",
                          left: "calc(50% - 20px)",
                          background: theme.palette.secondary.main,
                          borderRadius: "2px",
                        },
                      }}
                    >
                      Connect with me
                    </Typography>

                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        mb: 4,
                        lineHeight: 1.6,
                        textAlign: "center",
                        fontSize: { xs: "0.95rem", sm: "1rem" },
                      }}
                    >
                      Feel free to reach out through any of these platforms. I'm always excited to connect with fellow
                      developers and discuss the latest in DevOps and cloud technologies.
                    </Typography>

                    {/* Mandana art inspired decorative element */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "300px",
                        height: "300px",
                        opacity: 0.03,
                        borderRadius: "50%",
                        border: `20px solid ${theme.palette.secondary.main}`,
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "200px",
                          height: "200px",
                          borderRadius: "50%",
                          border: `15px solid ${theme.palette.primary.main}`,
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                          border: `10px solid ${theme.palette.secondary.main}`,
                        },
                      }}
                    />

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 3,
                        mt: "auto",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
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
                            aria-label={link.label}
                            sx={{
                              width: 70,
                              height: 70,
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
                          <Typography
                            variant="caption"
                            sx={{
                              display: "block",
                              textAlign: "center",
                              mt: 1,
                              fontWeight: 500,
                            }}
                          >
                            {link.label}
                          </Typography>
                        </motion.div>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        {/* Footer */}
        <Box
          sx={{
            mt: 8,
            pt: 3,
            borderTop: `1px solid ${theme.palette.divider}`,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Aniket Purohit. All rights reserved.
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1 }}>
            Made with ❤️ using Next.js, Material UI, and Framer Motion
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
