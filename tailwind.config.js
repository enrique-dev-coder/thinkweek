//NOTE: si usas el extend se quedan todas las clases anteriores, en vez de usar lo de ...current
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        amarilloThink: '#FFDD00',
        grisOscuroThink: '#515151',
        frisClaroThink: '#C4C4C4',
      },
    },
  },
  plugins: [],
};
