/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#5867DD',
        custombluedark: '#1E40AF',
      },
      fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
          nunito: ['Nunito', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
        },
        width: {
          custom: '340px', 
        },
        borderRadius: {
          'x4': '10px', 
        },
        borderWidth: {
          customBorder: '1px',
        },
        margin: {
          '30px': '30px', 
        },
        fontSize: {
          'custom-24': ['24px', '32.74px'], 
        },
  plugins: [],
}
}
}
