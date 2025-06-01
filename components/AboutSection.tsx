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
    },
    {
      icon: <School />,
      title: "Student",
      subtitle: "Mandsaur University",
      description: "Pursuing computer science education while gaining hands-on experience in modern DevOps practices.",
    },
    {
      icon: <Cloud />,
      title: "Cloud Enthusiast",
      subtitle: "AWS, GCP, Azure",
      description: "Passionate about cloud technologies and multi-cloud architectures for scalable solutions.",
    },
    {
      icon: <Code />,
      title: "Automation Expert",
      subtitle: "DevOps & Infrastructure",
      description: "Specializing in infrastructure as code, containerization, and automated deployment strategies.",
    },
  ]

  return (
    <Box id="about" sx={{ py: 10, backgroundColor: theme.palette.background.paper }}>
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
            About Me
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 6,
              textAlign: "center",
              color: theme.palette.text.secondary,
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            I'm a passionate DevOps Engineer and Cloud Enthusiast with a strong foundation in automation, infrastructure
            management, and modern deployment practices. Currently working at xFusionCorp while pursuing my studies at
            Mandsaur University, I'm dedicated to bridging the gap between development and operations through innovative
            solutions.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {highlights.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    background:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)"
                        : "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                    border: `1px solid ${theme.palette.divider}`,
                    "&:hover": {
                      boxShadow: `0 8px 30px ${theme.palette.primary.main}20`,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: 2,
                          backgroundColor: theme.palette.primary.main + "20",
                          color: theme.palette.primary.main,
                          mr: 2,
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="subtitle2" color="primary">
                          {item.subtitle}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
