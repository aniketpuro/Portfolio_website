"use client"

import { Box, Typography, Container, Grid, Card, CardContent, useTheme } from "@mui/material"
import { School, Work, Cloud, Code } from "@mui/icons-material"
import { motion } from "framer-motion"

export default function AboutSection() {
  const theme = useTheme()

  const highlights = [
    {
      icon: <Work />,
      title: "Junior DevOps Engineer",
      subtitle: "xFusionCorp",
      description:
        "Building and maintaining CI/CD pipelines, automating infrastructure, and optimizing cloud deployments.",
      color: "#FF6B6B",
    },
    {
      icon: <School />,
      title: "Student",
      subtitle: "Mandsaur University",
      description: "Pursuing computer science education while gaining hands-on experience in modern DevOps practices.",
      color: "#4ECDC4",
    },
    {
      icon: <Cloud />,
      title: "Cloud Enthusiast",
      subtitle: "AWS, GCP, Azure",
      description: "Passionate about cloud technologies and multi-cloud architectures for scalable solutions.",
      color: "#FFD166",
    },
    {
      icon: <Code />,
      title: "Automation Expert",
      subtitle: "DevOps & Infrastructure",
      description: "Specializing in infrastructure as code, containerization, and automated deployment strategies.",
      color: "#06D6A0",
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

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <Box
      id="about"
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23${theme.palette.primary.main.replace(
            "#",
            "",
          )}' fillOpacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
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
            About Me
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: { xs: 4, md: 6 },
              textAlign: "center",
              color: theme.palette.text.secondary,
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
              px: 2,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            I'm a passionate DevOps Engineer and Cloud Enthusiast with a strong foundation in automation, infrastructure
            management, and modern deployment practices. Currently working at xFusionCorp while pursuing my studies at
            Mandsaur University, I'm dedicated to bridging the gap between development and operations through innovative
            solutions.
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {highlights.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div variants={itemVariants} whileHover={{ y: -8 }}>
                  <Card
                    sx={{
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "16px",
                      background:
                        theme.palette.mode === "dark"
                          ? "linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)"
                          : "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                      border: `1px solid ${theme.palette.divider}`,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: `0 12px 40px ${item.color}30`,
                      },
                    }}
                  >
                    {/* Colorful left border - Mandana art inspired */}
                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "6px",
                        background: `linear-gradient(to bottom, ${item.color}, ${theme.palette.primary.main})`,
                      }}
                    />

                    {/* Mandana art inspired decorative element */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        width: "60px",
                        height: "60px",
                        opacity: 0.05,
                        borderRadius: "50%",
                        background: item.color,
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          border: `2px solid ${theme.palette.background.paper}`,
                        },
                      }}
                    />

                    <CardContent sx={{ p: 3, pl: 4 }}>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: "12px",
                            backgroundColor: item.color + "20",
                            color: item.color,
                            mr: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                              fontWeight: 700,
                              fontSize: { xs: "1.1rem", sm: "1.25rem" },
                              color: item.color,
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontWeight: 500,
                            }}
                          >
                            {item.subtitle}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.6,
                          fontSize: { xs: "0.875rem", sm: "0.9rem" },
                        }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}
