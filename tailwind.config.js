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
    },
    gridTemplateRows: {
      // Simple 8 row grid
      '8': 'repeat(8, minmax(0, 1fr))',
      '10': 'repeat(10, minmax(0, 1fr))',
      '12': 'repeat(12, minmax(0, 1fr))',
    },
    gridRowStart: {
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
    },
    gridRowEnd: {
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
    },
    
    },
  },
  plugins: [],
}
