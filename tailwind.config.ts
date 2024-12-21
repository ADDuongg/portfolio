import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			caveat: ['Caveat', 'sans-serif'], 
		  },
		  backgroundImage: {
			'card-gradient': 'var(--gradient-background)',
			'card-gradient-secondary': 'var(--gradient-background-secondary)',
		  },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))',
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  keyframes: {
			scaleUp: {
			  "0%": { transform: "scale(0)", opacity: "0" },
			  "100%": { transform: "scale(1)", opacity: "1" },
			},
			moveLeftToRight: {
				"0%": { transform: "translateX(-100%)", opacity: "0" },
				"100%": { transform: "translateX(0)", opacity: "1" },
			  },
			  moveRightToLeft: {
				"0%": { transform: "translateX(100%)", opacity: "0" },
				"100%": { transform: "translateX(0)", opacity: "1" },
			  },
			  moveTopToBottom: {
				"0%": { transform: "translateY(-100%)", opacity: "0" },
				"100%": { transform: "translateY(0)", opacity: "1" },
			  },
			  moveBottomToTop: {
				"0%": { transform: "translateY(100%)", opacity: "0" },
				"100%": { transform: "translateY(0)", opacity: "1" },
			  },
		  },
		  animation: {
			scaleUp: "scaleUp 2s ease-in-out",
			moveLeftToRight: "moveLeftToRight 2s ease-in-out",
			moveRightToLeft: "moveRightToLeft 2s ease-in-out",
			moveTopToBottom: "moveTopToBottom 2s ease-in-out",
			moveBottomToTop: "moveBottomToTop 2s ease-in-out",
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;