"use client"

import { Box, Typography, Container, Card, CardContent, Chip, Button, useTheme } from "@mui/material"
import { GitHub, Launch, Star, Code } from "@mui/icons-material"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ProjectsSection() {
  const theme = useTheme()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Mock project data - in a real app, this would be fetched from GitHub API
  const projects = [
    {
      name: "AWS Infrastructure Automation",
      description: "Terraform modules for automated AWS infrastructure provisioning with CI/CD integration.",
      languages: ["Terraform", "Python", "Bash"],
      stars: 45,
      url: "https://github.com/aniketpuro/aws-infra-automation",
      demo: null,
      color: "#FF6B6B",
    },
    {
      name: "Kubernetes Monitoring Stack",
      description: "Complete monitoring solution using Prometheus, Grafana, and AlertManager for K8s clusters.",
      languages: ["YAML", "Go", "Docker"],
      stars: 32,
      url: "https://github.com/aniketpuro/k8s-monitoring",
      demo: "https://monitoring-demo.example.com",
      color: "#4ECDC4",
    },
    {
      name: "CI/CD Pipeline Templates",
      description: "Reusable Jenkins and GitHub Actions templates for various application deployment scenarios.",
      languages: ["Groovy", "YAML", "Shell"],
      stars: 28,
      url: "https://github.com/aniketpuro/cicd-templates",
      demo: null,
      color: "#FFD166",
    },
    {
      name: "Docker Multi-Stage Optimizer",
      description: "Tool to optimize Docker images using multi-stage builds and security best practices.",
      languages: ["Python", "Docker", "Shell"],
      stars: 23,
      url: "https://github.com/aniketpuro/docker-optimizer",
      demo: null,
      color: "#06D6A0",
    },
    {
      name: "Cloud Cost Monitor",
      description: "Multi-cloud cost monitoring and alerting system with detailed usage analytics.",
      languages: ["Python", "JavaScript", "SQL"],
      stars: 19,
      url: "https://github.com/aniketpuro/cloud-cost-monitor",
      demo: "https://cost-monitor-demo.example.com",
      color: "#118AB2",
    },
    {
      name: "Infrastructure as Code Scanner",
      description: "Security and compliance scanner for Terraform and CloudFormation templates.",
      languages: ["Go", "YAML", "JSON"],
      stars: 15,
      url: "https://github.com/aniketpuro/iac-scanner",
      demo: null,
      color: "#9B5DE5",
    },
  ]

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      Terraform: "#7B42BC",
      Python: "#3776AB",
      JavaScript: "#F7DF1E",
      Go: "#00ADD8",
      Docker: "#2496ED",
      YAML: "#CB171E",
      Shell: "#89E051",
      Bash: "#4EAA25",
      Groovy: "#4298B8",
      SQL: "#336791",
      JSON: "#000000",
    }
    return colors[language] || theme.palette.primary.main
  }

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
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        backgroundColor: theme.palette.background.default,
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23${theme.palette.primary.main.replace(
            "#",
            "",
          )}' fillOpacity='0.4' fillRule='evenodd'/%3E%3C/svg%3E")`,
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
            Featured Projects
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
            A collection of my DevOps and cloud infrastructure projects showcasing automation, monitoring, and
            deployment solutions with colorful Mandana art-inspired designs.
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" }, gap: 3 }}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    height: "100%", // Make all cards the same height
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "16px",
                    background:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%)"
                        : "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                    border: `1px solid ${theme.palette.divider}`,
                    transition: "all 0.4s ease",
                    boxShadow:
                      hoveredIndex === index
                        ? `0 20px 60px ${project.color}30`
                        : `0 8px 30px ${theme.palette.mode === "dark" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"}`,
                  }}
                >
                  {/* Colorful top border - Mandana art inspired */}
                  <Box
                    sx={{
                      height: "6px",
                      background: `linear-gradient(90deg, ${project.color}, ${theme.palette.primary.main})`,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
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
                      opacity: 0.1,
                      borderRadius: "50%",
                      background: project.color,
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
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: theme.palette.background.paper,
                      },
                    }}
                  />

                  <CardContent
                    sx={{
                      flexGrow: 1,
                      p: 3,
                      zIndex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          flexGrow: 1,
                          color: project.color,
                          fontSize: { xs: "1.1rem", sm: "1.25rem" },
                          height: "2.5rem", // Fixed height for title
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {project.name}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
                        <Star sx={{ fontSize: 16, color: "#FFD700", mr: 0.5 }} />
                        <Typography variant="caption" color="text.secondary">
                          {project.stars}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 3,
                        lineHeight: 1.6,
                        fontSize: { xs: "0.875rem", sm: "0.9rem" },
                        height: "4.8rem", // Fixed height for description (3 lines)
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Box
                      sx={{
                        mb: 3,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        height: "2.5rem", // Fixed height for language tags
                        overflow: "hidden",
                      }}
                    >
                      {project.languages.map((lang, langIndex) => (
                        <Chip
                          key={langIndex}
                          label={lang}
                          size="small"
                          icon={<Code sx={{ fontSize: 16 }} />}
                          sx={{
                            backgroundColor: getLanguageColor(lang) + "20",
                            color: getLanguageColor(lang),
                            border: `1px solid ${getLanguageColor(lang)}40`,
                            fontWeight: 500,
                            borderRadius: "8px",
                            "& .MuiChip-icon": {
                              color: getLanguageColor(lang),
                            },
                          }}
                        />
                      ))}
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        mt: "auto", // Push buttons to bottom
                      }}
                    >
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<GitHub />}
                          href={project.url}
                          target="_blank"
                          sx={{
                            borderRadius: "8px",
                            borderColor: project.color,
                            color: project.color,
                            "&:hover": {
                              backgroundColor: project.color + "10",
                              borderColor: project.color,
                            },
                          }}
                        >
                          Code
                        </Button>
                      </motion.div>
                      {project.demo && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="contained"
                            size="small"
                            startIcon={<Launch />}
                            href={project.demo}
                            target="_blank"
                            sx={{
                              borderRadius: "8px",
                              backgroundColor: project.color,
                              "&:hover": {
                                backgroundColor: project.color + "DD",
                                boxShadow: `0 4px 12px ${project.color}40`,
                              },
                            }}
                          >
                            Demo
                          </Button>
                        </motion.div>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mt: { xs: 5, md: 8 } }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                size="large"
                href="https://github.com/aniketpuro"
                target="_blank"
                startIcon={<GitHub />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "50px",
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  boxShadow: `0 4px 20px ${theme.palette.primary.main}40`,
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: `0 8px 25px ${theme.palette.primary.main}60`,
                  },
                  transition: "all 0.3s ease",
                }}
              >
                View All Projects
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}
