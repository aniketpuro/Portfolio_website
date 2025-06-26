"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ExternalLink } from "lucide-react"
import { Box } from "@mui/material"
import { useTheme } from "@mui/material/styles"

interface Blog {
  title: string
  excerpt: string
  date: string
  readTime: string
  categories: string[]
  image: string
  url: string
  color: string
}

export default function BlogsSection() {
  const theme = useTheme()

  const blogs: Blog[] = [
    {
      title: "Unleashing the Power of Amazon RDS and EC2",
      excerpt:
        "Explore how to effectively combine Amazon RDS and EC2 for scalable database solutions in the cloud. Learn best practices for performance optimization and cost management.",
      date: "September 15, 2024",
      readTime: "4 min read",
      categories: ["AWS", "RDS", "EC2"],
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1726384950091/faad326b-a463-4a90-93a1-cecb00c0731b.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      url: "https://aniketpurohit.hashnode.dev/unleashing-the-power-of-amazon-rds-and-ec2-a-step-by-step-journey",
      color: "#FF6B6B",
    },
    {
      title: "Beginner's Guide to Kubernetes Worker Nodes",
      excerpt:
        "A comprehensive introduction to Kubernetes worker nodes, covering their architecture, components, and role in container orchestration.",
      date: "August 8, 2024",
      readTime: "3 min read",
      categories: ["Kubernetes", "Containers", "DevOps"],
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1725010612331/46be73c2-6d10-41cf-9e0d-69f687b5e4d8.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      url: "https://aniketpurohit.hashnode.dev/beginners-guide-to-kubernetes-worker-nodes",
      color: "#4ECDC4",
    },
    {
      title: "The 7 Ways to Deploy Containers on AWS",
      excerpt:
        "Discover seven different methods to deploy containers on AWS, from ECS and EKS to Lambda and Fargate. Compare their pros and cons.",
      date: "August 14, 2024",
      readTime: "4 min read",
      categories: ["AWS", "Containers", "Deployment"],
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1723577566402/2d416d52-3adf-424e-88bc-2d5fd63d3151.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      url: "https://aniketpurohit.hashnode.dev/the-7-ways-to-deploy-containers-on-aws-a-quick-guide",
      color: "#FFD166",
    },
    {
      title: "Building an Ideal CI/CD Pipeline",
      excerpt:
        "Step-by-step guide to creating an efficient CI/CD pipeline using modern DevOps tools and best practices for automated deployment.",
      date: "August 5, 2024",
      readTime: "4 min read",
      categories: ["CI/CD", "DevOps", "Automation"],
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1722876117271/939bd1bf-6c36-478d-88f6-e70d9d460d90.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      url: "https://aniketpurohit.hashnode.dev/building-ideal-cicd-pipeline",
      color: "#06D6A0",
    },
    {
      title: "Exploring Kubernetes Worker Nodes",
      excerpt:
        "Kubernetes worker nodes! Think of Kubernetes as a big, organized city where each worker node plays a key role. Let’s break down the essential components of a worker node in an easy-to-understand way.",
      date: "Augustr 30, 2024",
      readTime: "3 min read",
      categories: ["Kubernetes", "Node Agent", "CRI Shims", "Proxy"],
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1725009276324/f2686ef5-cbde-4ae6-bdb1-dba465193568.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      url: "https://aniketpurohit.hashnode.dev/exploring-kubernetes-worker-nodes-a-simple-guide",
      color: "#118AB2",
    },
    {
      title: "Mastering GitLab CI/CD",
      excerpt:
        "Let’s break down how GitLab’s core components—the server, runner, and executor—work together to automate and streamline your development process.",
      date: "August 2, 2024",
      readTime: "11 min read",
      categories: ["Runner", "Jobs", "CICD", "GitLab"],
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1723123107740/585489fc-fc92-4cae-9b76-f6539d6b1d51.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      url: "https://aniketpurohit.hashnode.dev/mastering-gitlab-cicd-how-runners-executors-and-the-gitlab-server-work-together",
      color: "#9B5DE5",
    },
  ]

  return (
    <section
      id="blogs"
      className="py-16 md:py-24 relative"
      style={{
        backgroundColor: theme.palette.background.default,
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23${theme.palette.secondary.main.replace(
            "#",
            "",
          )}' fillOpacity='0.5'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              Latest Blog Posts
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform -translate-y-2"></span>
            </h2>
          </motion.div>

          <p style={{ color: theme.palette.text.secondary }} className="max-w-2xl mx-auto">
            Sharing insights and tutorials about DevOps, cloud computing, and modern infrastructure practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
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
                  style={{ background: `linear-gradient(90deg, ${blog.color}, ${theme.palette.primary.main})` }}
                />

                {/* Mandana art inspired decorative element */}
                <div
                  className="absolute top-4 right-4 w-12 h-12 rounded-full opacity-10"
                  style={{ backgroundColor: blog.color }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2"
                    style={{ borderColor: theme.palette.background.paper }}
                  />
                </div>

                <div className="h-48 overflow-hidden mt-2">
                  <img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center justify-between mb-3 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" style={{ color: blog.color }} />
                      <span style={{ color: theme.palette.text.secondary }}>{blog.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" style={{ color: blog.color }} />
                      <span style={{ color: theme.palette.text.secondary }}>{blog.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2" style={{ color: blog.color }}>
                    {blog.title}
                  </h3>
                  <p style={{ color: theme.palette.text.secondary }} className="mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {blog.categories.map((category, catIndex) => (
                      <Badge
                        key={catIndex}
                        variant="secondary"
                        className="border-primary/20"
                        style={{
                          backgroundColor: `${blog.color}20`,
                          color: blog.color,
                          borderColor: `${blog.color}40`,
                        }}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0" style={{ borderTopColor: theme.palette.divider }}>
                  <Button asChild className="w-full hover:opacity-90" style={{ backgroundColor: blog.color }}>
                    <a href={blog.url} target="_blank" rel="noopener noreferrer">
                      Read Article
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
