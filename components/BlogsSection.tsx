"use client"

import { Box, Typography, Container, Grid, Card, CardContent, Button, useTheme } from "@mui/material"
import { AccessTime, Launch, ArrowForward } from "@mui/icons-material"
import { motion } from "framer-motion"
import { useState } from "react"

export default function BlogsSection() {
  const theme = useTheme()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Mock blog data - in a real app, this would be fetched from Hashnode API
  const blogs = [
    {
      title: "Unleashing the Power of Amazon RDS and EC2",
      date: "2024-01-15",
      preview:
        "Explore how to effectively combine Amazon RDS and EC2 for scalable database solutions in the cloud. Learn best practices for performance optimization and cost management.",
      readTime: "8 min read",
      url: "https://aniketpurohit.hashnode.dev/unleashing-power-amazon-rds-ec2",
      color: "#FF6B6B",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Beginner's Guide to Kubernetes Worker Nodes",
      date: "2024-01-08",
      preview:
        "A comprehensive introduction to Kubernetes worker nodes, covering their architecture, components, and role in container orchestration.",
      readTime: "6 min read",
      url: "https://aniketpurohit.hashnode.dev/beginners-guide-kubernetes-worker-nodes",
      color: "#4ECDC4",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "The 7 Ways to Deploy Containers on AWS",
      date: "2023-12-22",
      preview:
        "Discover seven different methods to deploy containers on AWS, from ECS and EKS to Lambda and Fargate. Compare their pros and cons.",
      readTime: "10 min read",
      url: "https://aniketpurohit.hashnode.dev/7-ways-deploy-containers-aws",
      color: "#FFD166",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Building an Ideal CI/CD Pipeline",
      date: "2023-12-15",
      preview:
        "Step-by-step guide to creating an efficient CI/CD pipeline using modern DevOps tools and best practices for automated deployment.",
      readTime: "12 min read",
      url: "https://aniketpurohit.hashnode.dev/building-ideal-cicd-pipeline",
      color: "#06D6A0",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Infrastructure as Code with Terraform",
      date: "2023-12-01",
      preview:
        "Learn how to manage cloud infrastructure using Terraform, including best practices for state management and module organization.",
      readTime: "9 min read",
      url: "https://aniketpurohit.hashnode.dev/infrastructure-as-code-terraform",
      color: "#118AB2",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Monitoring Kubernetes Clusters at Scale",
      date: "2023-11-20",
      preview:
        "Comprehensive guide to monitoring Kubernetes clusters using Prometheus, Grafana, and other observability tools for production environments.",
      readTime: "11 min read",
      url: "https://aniketpurohit.hashnode.dev/monitoring-kubernetes-clusters-scale",
      color: "#9B5DE5",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
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
      id="blogs"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23${theme.palette.secondary.main.replace(
            "#",
            "",
          )}' fillOpacity='0.5'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            Latest Blog Posts
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
            Sharing insights and tutorials about DevOps, cloud computing, and modern infrastructure practices with
            colorful Mandana art-inspired designs.
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {blogs.map((blog, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ y: -10 }}
                  style={{ height: "100%" }} // Ensure the motion div takes full height
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
                          ? `0 20px 60px ${blog.color}30`
                          : `0 8px 30px ${theme.palette.mode === "dark" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)"}`,
                    }}
                  >
                    {/* Blog image with overlay - fixed height */}
                    <Box sx={{ position: "relative", height: 180, overflow: "hidden" }}>
                      <Box
                        component="img"
                        src={blog.image}
                        alt={blog.title}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                          transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(to bottom, ${blog.color}00, ${blog.color}90)`,
                        }}
                      />

                      {/* Mandana art inspired decorative elements */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 15,
                          right: 15,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          backgroundColor: "rgba(255,255,255,0.9)",
                          borderRadius: "20px",
                          padding: "4px 12px",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        }}
                      >
                        <AccessTime sx={{ fontSize: 14, color: blog.color }} />
                        <Typography
                          variant="caption"
                          sx={{
                            fontWeight: 600,
                            color: blog.color,
                          }}
                        >
                          {blog.readTime}
                        </Typography>
                      </Box>

                      {/* Mandana art inspired decorative circle */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: -20,
                          left: 20,
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          backgroundColor: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          border: `2px solid ${blog.color}`,
                          zIndex: 2,
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            fontWeight: 700,
                            color: blog.color,
                            fontSize: "0.7rem",
                          }}
                        >
                          {new Date(blog.date).toLocaleDateString("en-US", { day: "numeric" })}
                        </Typography>
                      </Box>
                    </Box>

                    <CardContent
                      sx={{
                        flexGrow: 1,
                        p: 3,
                        pt: 4,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontWeight: 500,
                          mb: 1,
                          display: "block",
                          height: "1.5rem", // Fixed height for date
                        }}
                      >
                        {formatDate(blog.date).split(" ").slice(0, 2).join(" ")} {new Date(blog.date).getFullYear()}
                      </Typography>

                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          lineHeight: 1.3,
                          fontSize: { xs: "1.25rem", sm: "1.5rem" },
                          color: blog.color,
                          height: "3.9rem", // Fixed height for title (2 lines)
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {blog.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 3,
                          lineHeight: 1.6,
                          fontSize: { xs: "0.875rem", sm: "0.9rem" },
                          height: "4.8rem", // Fixed height for preview (3 lines)
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {blog.preview}
                      </Typography>

                      <Box sx={{ mt: "auto" }}>
                        <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="text"
                            endIcon={<ArrowForward />}
                            href={blog.url}
                            target="_blank"
                            sx={{
                              color: blog.color,
                              fontWeight: 600,
                              p: 0,
                              "&:hover": {
                                backgroundColor: "transparent",
                              },
                              "& .MuiButton-endIcon": {
                                transition: "transform 0.3s ease",
                              },
                              "&:hover .MuiButton-endIcon": {
                                transform: "translateX(4px)",
                              },
                            }}
                          >
                            Read Article
                          </Button>
                        </motion.div>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
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
                href="https://aniketpurohit.hashnode.dev"
                target="_blank"
                endIcon={<Launch />}
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
                View All Posts
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}
