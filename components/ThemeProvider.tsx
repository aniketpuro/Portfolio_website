"use client"

import type React from "react"

import { createTheme, ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material"
import { createContext, useContext, useEffect, useState } from "react"

const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const useColorMode = () => useContext(ColorModeContext)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("dark")

  useEffect(() => {
    const savedMode = localStorage.getItem("theme") as "light" | "dark"
    if (savedMode) {
      setMode(savedMode)
    }
  }, [])

  const colorMode = {
    toggleColorMode: () => {
      const newMode = mode === "light" ? "dark" : "light"
      setMode(newMode)
      localStorage.setItem("theme", newMode)
    },
  }

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#64ffda" : "#1976d2",
      },
      secondary: {
        main: mode === "dark" ? "#ff6b6b" : "#dc004e",
      },
      background: {
        default: mode === "dark" ? "#0a0a0a" : "#ffffff",
        paper: mode === "dark" ? "#1a1a1a" : "#f5f5f5",
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: "3.5rem",
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: "2.5rem",
        fontWeight: 600,
        lineHeight: 1.3,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
            fontWeight: 600,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: mode === "dark" ? "0 4px 20px rgba(100, 255, 218, 0.1)" : "0 4px 20px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
  })

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ColorModeContext.Provider>
  )
}
