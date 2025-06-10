/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },    extend: {
      fontFamily: {
        'sans': ['"Muli"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        'heading': ['"Varela Round"', 'Helvetica', 'Arial', 'sans-serif'],
      },      colors: {
        // Bootstrap colors from original website
        'blue': 'var(--blue)',
        'indigo': 'var(--indigo)',
        'purple': 'var(--purple)',
        'pink': 'var(--pink)',
        'red': 'var(--red)',
        'orange': 'var(--orange)',
        'yellow': 'var(--yellow)',
        'green': 'var(--green)',
        'teal': 'var(--teal)',
        'cyan': 'var(--cyan)',
        'white': 'var(--white)',
        'gray': 'var(--gray)',
        'gray-dark': 'var(--gray-dark)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'success': 'var(--success)',
        'info': 'var(--info)',
        'warning': 'var(--warning)',
        'danger': 'var(--danger)',
        'light': 'var(--light)',
        'dark': 'var(--dark)',
        // Custom colors for the design
        'primary-custom': '#30baa7',
        'primary-dark-custom': '#1b695e',
        'text-light': '#666',
        'text-dark': '#333',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulse: {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.05)',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
