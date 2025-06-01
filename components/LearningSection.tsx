"use client"

import { Box, Typography, Container, Grid, Card, CardContent, Chip, useTheme } from "@mui/material"
import { School, Person, TrendingUp } from "@mui/icons-material"
import { motion } from "framer-motion"

export default function LearningSection() {
  const theme = useTheme()

  const courses = [
    {
      title: "Red Hat Certified System Administrator",
      tutor: "Aaron Lockhart",
      level: "Advanced",
      category: "Linux Administration",
    },
    {
      title: "Linux Foundation Certified System Administrator",
      tutor: "Alexandru Andrei, Jeremy Morgan",
      level: "Advanced",
      category: "Linux Administration",
    },
    {
      title: "Golang Programming",
      tutor: "Priyanka Yadav",
      level: "Intermediate",
      category: "Programming",
    },
    {
      title: "Rust Programming",
      tutor: "Priyanka Yadav",
      level: "Intermediate",
      category: "Programming",
    },
    {
      title: "Kubernetes CKA",
      tutor: "Mumshad Mannambeth",
      level: "Advanced",
      category: "Container Orchestration",
    },
    {
      title: "EFK Stack",
      tutor: "Raghunandana Sanur",
      level: "Intermediate",
      category: "Logging & Monitoring",
    },
    {
      title: "Jenkins CI/CD Project",
      tutor: "Sanjeev Thiyagarajan",
      level: "Intermediate",
      category: "CI/CD",
    },
    {
      title: "AI Tutor",
      tutor: "KodeKloud AI",
      level: "Beginner",
      category: "Artificial Intelligence",
    },
    {
      title: "Kubernetes Troubleshooting",
      tutor: "Nourhan Khaled",
      level: "Advanced",
      category: "Container Orchestration",
    },
    {
      title: "AZ-400: Microsoft DevOps",
      tutor: "Jeremy Morgan, Alireza Chegini",
      level: "Advanced",
      category: "Cloud & DevOps",
    },
    {
      title: "AWS Certified AI Practitioner",
      tutor: "Michael Forrester, Alireza Chegini",
      level: "Intermediate",
      category: "Cloud & AI",
    },
    {
      title: "Learning Linux Basics",
      tutor: "Mumshad Mannambeth",
      level: "Beginner",
      category: "Linux Administration",
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "#4CAF50"
      case "Intermediate":
        return "#FF9800"
      case "Advanced":
        return "#F44336"
      default:
        return theme.palette.primary.main
    }
  }

  const getCategoryIcon = (category: string) => {
    if (category.includes("Linux")) return <School />
    if (category.includes("Programming")) return <TrendingUp />
    return <Person />
  }

  return (
    <Box id="learning" sx={{ py: 10, backgroundColor: theme.palette.background.paper }}>
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
            Learning & Certifications
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
            Continuous learning through KodeKloud courses and industry certifications to stay current with DevOps and
            cloud technologies.
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
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
                      boxShadow: `0 8px 30px ${theme.palette.primary.main}15`,
                      borderColor: theme.palette.primary.main + "30",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: 2,
                          backgroundColor: theme.palette.primary.main + "20",
                          color: theme.palette.primary.main,
                          mr: 2,
                          mt: 0.5,
                        }}
                      >
                        {getCategoryIcon(course.category)}
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1, lineHeight: 1.3 }}>
                          {course.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          Instructor: {course.tutor}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                      <Chip
                        label={course.level}
                        size="small"
                        sx={{
                          backgroundColor: getLevelColor(course.level) + "20",
                          color: getLevelColor(course.level),
                          border: `1px solid ${getLevelColor(course.level)}40`,
                          fontWeight: 600,
                        }}
                      />
                      <Chip
                        label={course.category}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: theme.palette.primary.main + "40",
                          color: theme.palette.primary.main,
                        }}
                      />
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
