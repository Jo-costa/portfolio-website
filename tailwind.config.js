/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation:{
        'bounce-once': "bounce 8s ease-in-out 1"
      },
      
    },
    screens: {
      'md': '700px',
      'mds':'715px',
      'mdm':'730px',
      'lg':'921px',
      'betterhover': {'raw': '(hover: hover)'},
    }
  },
  plugins: [],
}

