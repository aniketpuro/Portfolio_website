"use client"

import { Box, Typography, Container, Grid, Card, CardContent, Chip, Button, useTheme } from "@mui/material"
import { GitHub, Launch, Star } from "@mui/icons-material"
import { motion } from "framer-motion"

export default function ProjectsSection() {
  const theme = useTheme()

  // Mock project data - in a real app, this would be fetched from GitHub API
  const projects = [
    {
      name: "AWS Infrastructure Automation",
      description: "Terraform modules for automated AWS infrastructure provisioning with CI/CD integration.",
      languages: ["Terraform", "Python", "Bash"],
      stars: 45,
      url: "https://github.com/aniketpuro/aws-infra-automation",
      demo: null,
    },
    {
      name: "Kubernetes Monitoring Stack",
      description: "Complete monitoring solution using Prometheus, Grafana, and AlertManager for K8s clusters.",
      languages: ["YAML", "Go", "Docker"],
      stars: 32,
      url: "https://github.com/aniketpuro/k8s-monitoring",
      demo: "https://monitoring-demo.example.com",
    },
    {
      name: "CI/CD Pipeline Templates",
      description: "Reusable Jenkins and GitHub Actions templates for various application deployment scenarios.",
      languages: ["Groovy", "YAML", "Shell"],
      stars: 28,
      url: "https://github.com/aniketpuro/cicd-templates",
      demo: null,
    },
    {
      name: "Docker Multi-Stage Optimizer",
      description: "Tool to optimize Docker images using multi-stage builds and security best practices.",
      languages: ["Python", "Docker", "Shell"],
      stars: 23,
      url: "https://github.com/aniketpuro/docker-optimizer",
      demo: null,
    },
    {
      name: "Cloud Cost Monitor",
      description: "Multi-cloud cost monitoring and alerting system with detailed usage analytics.",
      languages: ["Python", "JavaScript", "SQL"],
      stars: 19,
      url: "https://github.com/aniketpuro/cloud-cost-monitor",
      demo: "https://cost-monitor-demo.example.com",
    },
    {
      name: "Infrastructure as Code Scanner",
      description: "Security and compliance scanner for Terraform and CloudFormation templates.",
      languages: ["Go", "YAML", "JSON"],
      stars: 15,
      url: "https://github.com/aniketpuro/iac-scanner",
      demo: null,
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

  return (
    <Box id="projects" sx={{ py: 10, backgroundColor: theme.palette.background.default }}>
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
            Featured Projects
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
            A collection of my DevOps and cloud infrastructure projects showcasing automation, monitoring, and
            deployment solutions.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
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
                    "&:hover": {
                      boxShadow: `0 12px 40px ${theme.palette.primary.main}20`,
                      borderColor: theme.palette.primary.main + "50",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600, flexGrow: 1 }}>
                        {project.name}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
                        <Star sx={{ fontSize: 16, color: "#FFD700", mr: 0.5 }} />
                        <Typography variant="caption" color="text.secondary">
                          {project.stars}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                      {project.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      {project.languages.map((lang, langIndex) => (
                        <Chip
                          key={langIndex}
                          label={lang}
                          size="small"
                          sx={{
                            mr: 1,
                            mb: 1,
                            backgroundColor: getLanguageColor(lang) + "20",
                            color: getLanguageColor(lang),
                            border: `1px solid ${getLanguageColor(lang)}40`,
                          }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ display: "flex", gap: 1, mt: "auto" }}>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<GitHub />}
                        href={project.url}
                        target="_blank"
                        sx={{
                          "&:hover": {
                            backgroundColor: theme.palette.primary.main + "10",
                          },
                        }}
                      >
                        Code
                      </Button>
                      {project.demo && (
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<Launch />}
                          href={project.demo}
                          target="_blank"
                          sx={{
                            "&:hover": {
                              transform: "translateY(-1px)",
                            },
                          }}
                        >
                          Demo
                        </Button>
                      )}
                    </Box>
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
