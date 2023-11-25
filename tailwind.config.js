/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       'bannerbgColor': "#FAE3B6",
        'btnColor': "#FAE3B",
        'btnborderColor':"#FFD687",
        'shadowColor':"rgba(0, 0, 0, 0.25)",
       'fashionCounter': "#FEECC8",
        'btnhover': "#FDBB57",
        'bestsellbg':"#CFA485",
        'priceColor':"#C4C4C4",
        'starColor':"#FFAF37",
      },
      fontSize: {
        mainHeading:"64px",
        bannerp:"22px"
      },
      fontFamily: {
        'pop' :["poppins"],
        'frank': ["Frank Ruhl Libre"],
        'Podkova':["Podkova"]
      },
      maxWidth: {
        "container": "1320px",
      },
     
      zIndex: {
        '100': '100',
      },
      margin: {
        '185': '185px',
        '76' :'76px',
      },
      padding: {
        '68px': '68px',
      },
      borderRadius: {
        '20': '20px',
     
      },
    },
  },
  plugins: [],
}

