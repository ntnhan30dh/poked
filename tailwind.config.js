module.exports = {
  content: [   "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: { 
        grayBlack: "#333333",
        grayScale: "#D1D1D1",
        green:"#009341",
        pink1:"#FF7CF8",
        pink2:"#FFE8FC",
      },
      fontSize: {
        //'2xl': ['24px', '28px'],
        '16px': ['16px', '20px'],
        '18px': ['18px', '24px'],
        '24px': ['24px', '28px'],
        '30px': ['30px', '36px'],
        '40px': ['40px', '44px'],
    },
    maxWidth: {
      '500px': '500px',
      '1/2': '50%',
    },
    width:{
      '298px':'298px'
    }
    },
  },
  plugins: [],
}
