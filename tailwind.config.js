import forms from '@tailwindcss/forms';

export default {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  plugins: [forms],
  theme: {
    extend: {
      colors: {
        accent1: '#01fcfc',
        accent2: '#fd01f5',
      },
      textShadow: {
        neon: '0 0 5px rgba(0, 255, 0, 0.8), 0 0 10px rgba(0, 255, 0, 0.8)', // Neon green
        neonRed: '0 0 5px rgba(255, 0, 0, 0.8), 0 0 10px rgba(255, 0, 0, 0.8)', // Neon red
      },
      borderColor: {
        green: '#00ff00', // Green for online
        red: '#ff0000', // Red for offline
      },
    },
  },
};
