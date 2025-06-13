"use client"

import { Box, Typography, Container, Card, CardContent, Chip, useTheme } from "@mui/material"
import { School, Person, TrendingUp } from "@mui/icons-material"
import { motion } from "framer-motion"
import { useState } from "react"

export default function LearningSection() {
  const theme = useTheme()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const courses = [
    {
      title: "Red Hat Certified System Administrator",
      tutor: "Aaron Lockhart",
      level: "Advanced",
      category: "Linux Administration",
      color: "#FF6B6B",
    },
    {
      title: "Linux Foundation Certified System Administrator",
      tutor: "Alexandru Andrei, Jeremy Morgan",
      level: "Advanced",
      category: "Linux Administration",
      color: "#4ECDC4",
    },
    {
      title: "Golang Programming",
      tutor: "Priyanka Yadav",
      level: "Intermediate",
      category: "Programming",
      color: "#FFD166",
    },
    {
      title: "Rust Programming",
      tutor: "Priyanka Yadav",
      level: "Intermediate",
      category: "Programming",
      color: "#06D6A0",
    },
    {
      title: "Kubernetes CKA",
      tutor: "Mumshad Mannambeth",
      level: "Advanced",
      category: "Container Orchestration",
      color: "#118AB2",
    },
    {
      title: "EFK Stack",
      tutor: "Raghunandana Sanur",
      level: "Intermediate",
      category: "Logging & Monitoring",
      color: "#9B5DE5",
    },
    {
      title: "Jenkins CI/CD Project",
      tutor: "Sanjeev Thiyagarajan",
      level: "Intermediate",
      category: "CI/CD",
      color: "#FF6B6B",
    },
    {
      title: "AI Tutor",
      tutor: "KodeKloud AI",
      level: "Beginner",
      category: "Artificial Intelligence",
      color: "#4ECDC4",
    },
    {
      title: "Kubernetes Troubleshooting",
      tutor: "Nourhan Khaled",
      level: "Advanced",
      category: "Container Orchestration",
      color: "#FFD166",
    },
    {
      title: "AZ-400: Microsoft DevOps",
      tutor: "Jeremy Morgan, Alireza Chegini",
      level: "Advanced",
      category: "Cloud & DevOps",
      color: "#06D6A0",
    },
    {
      title: "AWS Certified AI Practitioner",
      tutor: "Michael Forrester, Alireza Chegini",
      level: "Intermediate",
      category: "Cloud & AI",
      color: "#118AB2",
    },
    {
      title: "Learning Linux Basics",
      tutor: "Mumshad Mannambeth",
      level: "Beginner",
      category: "Linux Administration",
      color: "#9B5DE5",
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <Box
      id="learning"
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23${theme.palette.primary.main.replace(
            "#",
            "",
          )}' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            Learning & Certifications
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
            Continuous learning through KodeKloud courses and industry certifications to stay current with DevOps and
            cloud technologies.
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" }, gap: 3 }}>
            {courses.map((course, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -5 }}
              >
                <Card
                  sx={{
                    height: "100%", // Make all cards the same height
                    background:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)"
                        : "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: "16px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    boxShadow:
                      hoveredIndex === index
                        ? `0 12px 40px ${course.color}30`
                        : `0 8px 30px ${theme.palette.mode === "dark" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"}`,
                  }}
                >
                  {/* Colorful top border - Mandana art inspired */}
                  <Box
                    sx={{
                      height: "6px",
                      background: `linear-gradient(90deg, ${course.color}, ${theme.palette.primary.main})`,
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
                      top: 15,
                      right: 15,
                      width: "40px",
                      height: "40px",
                      opacity: 0.1,
                      borderRadius: "50%",
                      background: course.color,
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        border: `2px solid ${theme.palette.background.paper}`,
                      },
                    }}
                  />

                  <CardContent
                    sx={{
                      p: 3,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: 2,
                          backgroundColor: course.color + "20",
                          color: course.color,
                          mr: 2,
                          mt: 0.5,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 40,
                          height: 40,
                          flexShrink: 0,
                        }}
                      >
                        {getCategoryIcon(course.category)}
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            lineHeight: 1.3,
                            color: course.color,
                            height: "2.6rem", // Fixed height for title
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {course.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            mb: 2,
                            height: "1.5rem", // Fixed height for tutor name
                            display: "-webkit-box",
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          Instructor: {course.tutor}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        flexWrap: "wrap",
                        mt: "auto", // Push chips to bottom
                      }}
                    >
                      <Chip
                        label={course.level}
                        size="small"
                        sx={{
                          backgroundColor: getLevelColor(course.level) + "20",
                          color: getLevelColor(course.level),
                          border: `1px solid ${getLevelColor(course.level)}40`,
                          fontWeight: 600,
                          borderRadius: "8px",
                        }}
                      />
                      <Chip
                        label={course.category}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: course.color + "40",
                          color: course.color,
                          borderRadius: "8px",
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}
