"use client"

import { AppBar, Toolbar, Typography, Button, IconButton, useTheme } from "@mui/material"
import { Brightness4, Brightness7 } from "@mui/icons-material"
import { useColorMode } from "./ThemeProvider"
import { motion } from "framer-motion"

export default function Navigation() {
  const theme = useTheme()
  const { toggleColorMode } = useColorMode()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.mode === "dark" ? "rgba(10, 10, 10, 0.9)" : "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Aniket Purohit
          </Typography>

          {["About", "Projects", "Learning", "Blogs", "Contact"].map((item) => (
            <Button
              key={item}
              color="inherit"
              onClick={() => scrollToSection(item.toLowerCase())}
              sx={{ mx: 1, "&:hover": { backgroundColor: "rgba(100, 255, 218, 0.1)" } }}
            >
              {item}
            </Button>
          ))}

          <IconButton onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </motion.div>
  )
}
