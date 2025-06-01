"use client"

import { Box, Typography, Container, Grid, Card, CardContent, Button, useTheme } from "@mui/material"
import { AccessTime, Launch } from "@mui/icons-material"
import { motion } from "framer-motion"

export default function BlogsSection() {
  const theme = useTheme()

  // Mock blog data - in a real app, this would be fetched from Hashnode API
  const blogs = [
    {
      title: "Unleashing the Power of Amazon RDS and EC2",
      date: "2024-01-15",
      preview:
        "Explore how to effectively combine Amazon RDS and EC2 for scalable database solutions in the cloud. Learn best practices for performance optimization and cost management.",
      readTime: "8 min read",
      url: "https://aniketpurohit.hashnode.dev/unleashing-power-amazon-rds-ec2",
    },
    {
      title: "Beginner's Guide to Kubernetes Worker Nodes",
      date: "2024-01-08",
      preview:
        "A comprehensive introduction to Kubernetes worker nodes, covering their architecture, components, and role in container orchestration.",
      readTime: "6 min read",
      url: "https://aniketpurohit.hashnode.dev/beginners-guide-kubernetes-worker-nodes",
    },
    {
      title: "The 7 Ways to Deploy Containers on AWS",
      date: "2023-12-22",
      preview:
        "Discover seven different methods to deploy containers on AWS, from ECS and EKS to Lambda and Fargate. Compare their pros and cons.",
      readTime: "10 min read",
      url: "https://aniketpurohit.hashnode.dev/7-ways-deploy-containers-aws",
    },
    {
      title: "Building an Ideal CI/CD Pipeline",
      date: "2023-12-15",
      preview:
        "Step-by-step guide to creating an efficient CI/CD pipeline using modern DevOps tools and best practices for automated deployment.",
      readTime: "12 min read",
      url: "https://aniketpurohit.hashnode.dev/building-ideal-cicd-pipeline",
    },
    {
      title: "Infrastructure as Code with Terraform",
      date: "2023-12-01",
      preview:
        "Learn how to manage cloud infrastructure using Terraform, including best practices for state management and module organization.",
      readTime: "9 min read",
      url: "https://aniketpurohit.hashnode.dev/infrastructure-as-code-terraform",
    },
    {
      title: "Monitoring Kubernetes Clusters at Scale",
      date: "2023-11-20",
      preview:
        "Comprehensive guide to monitoring Kubernetes clusters using Prometheus, Grafana, and other observability tools for production environments.",
      readTime: "11 min read",
      url: "https://aniketpurohit.hashnode.dev/monitoring-kubernetes-clusters-scale",
    },
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <Box id="blogs" sx={{ py: 10, backgroundColor: theme.palette.background.default }}>
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
            Latest Blog Posts
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
            Sharing insights and tutorials about DevOps, cloud computing, and modern infrastructure practices.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {blogs.map((blog, index) => (
            <Grid item xs={12} md={6} key={index}>
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
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2, lineHeight: 1.3 }}>
                      {blog.title}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
                      <Typography variant="caption" color="text.secondary">
                        {formatDate(blog.date)}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <AccessTime sx={{ fontSize: 14, mr: 0.5, color: "text.secondary" }} />
                        <Typography variant="caption" color="text.secondary">
                          {blog.readTime}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                      {blog.preview}
                    </Typography>

                    <Button
                      variant="outlined"
                      endIcon={<Launch />}
                      href={blog.url}
                      target="_blank"
                      sx={{
                        mt: "auto",
                        "&:hover": {
                          backgroundColor: theme.palette.primary.main + "10",
                          transform: "translateY(-1px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              href="https://aniketpurohit.hashnode.dev"
              target="_blank"
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
              View All Posts
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}
