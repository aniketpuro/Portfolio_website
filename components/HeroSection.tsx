"use client"

import { Box, Typography, Button, Container, useTheme, IconButton } from "@mui/material"
import { Download, GitHub, LinkedIn, Email } from "@mui/icons-material"
import { motion } from "framer-motion"

export default function HeroSection() {
  const theme = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)"
            : "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "200px",
          height: "200px",
          background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: "150px",
          height: "150px",
          background: `linear-gradient(45deg, ${theme.palette.secondary.main}20, ${theme.palette.primary.main}20)`,
          borderRadius: "50%",
          filter: "blur(30px)",
        }}
      />

      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 2,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
            }}
          >
            Aniket Purohit
          </Typography>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 4,
                textAlign: "center",
                color: theme.palette.text.secondary,
                fontWeight: 400,
              }}
            >
              DevOps Engineer | Cloud Enthusiast
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap", mb: 4 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection("projects")}
                sx={{
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
                  },
                  transition: "all 0.3s ease",
                }}
              >
                View Projects
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<Download />}
                sx={{
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    transform: "translateY(-2px)",
                    backgroundColor: theme.palette.primary.main + "10",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Download Resume
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection("contact")}
                sx={{
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    transform: "translateY(-2px)",
                    backgroundColor: theme.palette.secondary.main + "10",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Contact Me
              </Button>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <IconButton
                href="https://github.com/aniketpuro"
                target="_blank"
                sx={{
                  "&:hover": {
                    transform: "translateY(-3px)",
                    color: theme.palette.primary.main,
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <GitHub fontSize="large" />
              </IconButton>

              <IconButton
                href="https://www.linkedin.com/in/aniket-purohit-38665a24b"
                target="_blank"
                sx={{
                  "&:hover": {
                    transform: "translateY(-3px)",
                    color: theme.palette.primary.main,
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <LinkedIn fontSize="large" />
              </IconButton>

              <IconButton
                href="mailto:aniket@example.com"
                sx={{
                  "&:hover": {
                    transform: "translateY(-3px)",
                    color: theme.palette.primary.main,
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <Email fontSize="large" />
              </IconButton>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  )
}
