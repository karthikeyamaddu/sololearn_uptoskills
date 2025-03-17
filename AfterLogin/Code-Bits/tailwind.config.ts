
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '1920px',
      }
    },
    extend: {
      fontFamily: {
        sans: ['SF Pro Display', 'Inter', 'sans-serif'],
        serif: ['SF Pro Text', 'serif'],
        mono: ['SF Mono', 'monospace'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'scale-out': {
          from: { transform: 'scale(1)', opacity: '1' },
          to: { transform: 'scale(0.95)', opacity: '0' }
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'slide-in-bottom': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        'slide-in-top': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        'blur-in': {
          '0%': { filter: 'blur(20px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' }
        },
        'perspective-in': {
          '0%': { 
            transform: 'perspective(1000px) rotateX(30deg)', 
            opacity: '0'
          },
          '100%': { 
            transform: 'perspective(1000px) rotateX(0deg)', 
            opacity: '1'
          }
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 255, 255, 0.8)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.7s ease-out',
        'fade-out': 'fade-out 0.7s ease-out',
        'scale-in': 'scale-in 0.7s ease-out',
        'scale-out': 'scale-out 0.7s ease-out',
        'slide-in-right': 'slide-in-right 0.7s ease-out',
        'slide-in-left': 'slide-in-left 0.7s ease-out',
        'slide-in-bottom': 'slide-in-bottom 0.7s ease-out',
        'slide-in-top': 'slide-in-top 0.7s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'blur-in': 'blur-in 1s cubic-bezier(0.16, 1, 0.3, 1)',
        'perspective-in': 'perspective-in 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'glow': 'glow 2s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.42, 0, 0.58, 1)',
        'bounce-soft': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaElEQVQ4y42TQWrCUBCG/y7FF3ADuwRDN26kOxdCVtKl0E16gl6gJ2jpDdxIV6WL0m0gLgQXguuit3Decy+NNS094Zv5J/P/82YmEoZhCDa14KFPArv1fEKXuIGHNt6wbXeNafs9A6CLS0MIYQycz+c07LpuaAq996Sgtm3JsixkWWa1R0rSNA0ty0JRFByAbdtWkqIoqK5rNE1jN8dxLHJd97cSx3GoKIoRQFVVSJIEQRBM3vA8D6ZpGgGu6xJjDJZlGUGcc5jP50YAwzAQRRGiKML9fidjWo4QgnQ6RdM0mEwmiKKIAKZp4nQ6IYRA27aY3e53MsbzPCyXSxJXVYXlcol+ePr7fEySBGEYYr1e43g8otfrWWl5nj/GdDgcMJvNsNvtsN/vR0CapjiOYwJEUURBECAIAhbAthOTJKF+vz9i2nO5XBCGIVarlVUA4ziGZVn45unO54M/V/n/1K/t9PaG3/S/AN9oy9Gtc1rfAAAAAElFTkSuQmCC')",
      },
      filter: {
        'none': 'none',
        'grayscale': 'grayscale(1)',
        'invert': 'invert(1)',
        'sepia': 'sepia(1)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
