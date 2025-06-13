"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Award, Clock } from "lucide-react"
import { Box } from "@mui/material"
import { useTheme } from "@mui/material/styles"

interface Course {
  title: string
  provider: string
  progress: number
  completionDate?: string
  skills: string[]
  status: "completed" | "in-progress" | "planned"
  color: string
}

export default function LearningSection() {
  const theme = useTheme()

  const courses: Course[] = [
    {
      title: "Red Hat Certified System Administrator",
      provider: "Aaron Lockhart",
      progress: 100,
      completionDate: "March 2023",
      skills: ["Linux", "System Administration", "Red Hat"],
      status: "completed",
      color: "#FF6B6B",
    },
    {
      title: "Linux Foundation Certified System Administrator",
      provider: "Alexandru Andrei, Jeremy Morgan",
      progress: 100,
      completionDate: "January 2023",
      skills: ["Linux", "System Administration", "LFCS"],
      status: "completed",
      color: "#4ECDC4",
    },
    {
      title: "Golang Programming",
      provider: "Priyanka Yadav",
      progress: 85,
      skills: ["Go", "Programming", "Backend Development"],
      status: "in-progress",
      color: "#FFD166",
    },
    {
      title: "Rust Programming",
      provider: "Priyanka Yadav",
      progress: 60,
      skills: ["Rust", "Systems Programming", "Performance"],
      status: "in-progress",
      color: "#06D6A0",
    },
    {
      title: "Kubernetes CKA",
      provider: "Mumshad Mannambeth",
      progress: 100,
      completionDate: "February 2023",
      skills: ["Kubernetes", "Container Orchestration", "CKA"],
      status: "completed",
      color: "#118AB2",
    },
    {
      title: "EFK Stack",
      provider: "Raghunandana Sanur",
      progress: 75,
      skills: ["Elasticsearch", "Fluentd", "Kibana", "Logging"],
      status: "in-progress",
      color: "#9B5DE5",
    },
    {
      title: "Jenkins CI/CD Project",
      provider: "Sanjeev Thiyagarajan",
      progress: 90,
      skills: ["Jenkins", "CI/CD", "Pipeline Automation"],
      status: "in-progress",
      color: "#FF6B6B",
    },
    {
      title: "AI Tutor",
      provider: "KodeKloud AI",
      progress: 40,
      skills: ["AI", "Machine Learning", "Automation"],
      status: "in-progress",
      color: "#4ECDC4",
    },
    {
      title: "Kubernetes Troubleshooting",
      provider: "Nourhan Khaled",
      progress: 100,
      completionDate: "April 2023",
      skills: ["Kubernetes", "Troubleshooting", "Debugging"],
      status: "completed",
      color: "#FFD166",
    },
    {
      title: "AZ-400: Microsoft DevOps",
      provider: "Jeremy Morgan, Alireza Chegini",
      progress: 30,
      skills: ["Azure", "DevOps", "Microsoft", "CI/CD"],
      status: "in-progress",
      color: "#06D6A0",
    },
    {
      title: "AWS Certified AI Practitioner",
      provider: "Michael Forrester, Alireza Chegini",
      progress: 20,
      skills: ["AWS", "AI", "Machine Learning", "Cloud"],
      status: "in-progress",
      color: "#118AB2",
    },
    {
      title: "Learning Linux Basics",
      provider: "Mumshad Mannambeth",
      progress: 100,
      completionDate: "December 2022",
      skills: ["Linux", "Command Line", "System Administration"],
      status: "completed",
      color: "#9B5DE5",
    },
  ]

  const getStatusIcon = (status: Course["status"]) => {
    switch (status) {
      case "completed":
        return <Award className="h-5 w-5" style={{ color: theme.palette.primary.main }} />
      case "in-progress":
        return <Clock className="h-5 w-5" style={{ color: theme.palette.primary.main }} />
      case "planned":
        return <BookOpen className="h-5 w-5" style={{ color: theme.palette.primary.main }} />
    }
  }

  const getStatusText = (status: Course["status"]) => {
    switch (status) {
      case "completed":
        return "Completed"
      case "in-progress":
        return "In Progress"
      case "planned":
        return "Planned"
    }
  }

  return (
    <section
      id="learning"
      className="py-16 md:py-24 relative"
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "#111111" : "#f8f9fa",
        color: theme.palette.text.primary,
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 relative inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              style={{ color: theme.palette.text.primary }}
            >
              Learning & Certifications
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform -translate-y-2"></span>
            </h2>
          </motion.div>

          <p style={{ color: theme.palette.text.secondary }} className="max-w-2xl mx-auto">
            Continuous learning through KodeKloud courses and industry certifications to stay current with DevOps and
            cloud technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card
                className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:border-primary/50 relative"
                style={{
                  backgroundColor: theme.palette.background.paper,
                  borderColor: theme.palette.divider,
                }}
              >
                {/* Colorful top border - Mandana art inspired */}
                <div
                  className="h-2 absolute top-0 left-0 right-0"
                  style={{ background: `linear-gradient(90deg, ${course.color}, ${theme.palette.primary.main})` }}
                />

                {/* Mandana art inspired decorative element */}
                <div
                  className="absolute top-4 right-4 w-10 h-10 rounded-full opacity-10"
                  style={{ backgroundColor: course.color }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2"
                    style={{ borderColor: theme.palette.background.paper }}
                  />
                </div>

                <CardContent className="p-6 flex flex-col h-full mt-2">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                      style={{ borderColor: course.color, color: course.color }}
                    >
                      {getStatusIcon(course.status)}
                      <span>{getStatusText(course.status)}</span>
                    </Badge>
                    {course.completionDate && (
                      <span className="text-xs" style={{ color: theme.palette.text.secondary }}>
                        {course.completionDate}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold mb-1" style={{ color: course.color }}>
                    {course.title}
                  </h3>
                  <p style={{ color: theme.palette.text.secondary }} className="mb-4">
                    Instructor: {course.provider}
                  </p>

                  <div className="mt-auto">
                    <div className="flex justify-between text-sm mb-1">
                      <span style={{ color: theme.palette.text.primary }}>Progress</span>
                      <span className="font-medium" style={{ color: course.color }}>
                        {course.progress}%
                      </span>
                    </div>
                    <Progress value={course.progress} className="h-2" />

                    <div className="flex flex-wrap gap-2 mt-4">
                      {course.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="border-primary/20"
                          style={{
                            backgroundColor: `${course.color}20`,
                            color: course.color,
                            borderColor: `${course.color}40`,
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
