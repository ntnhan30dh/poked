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
        '16px': ['16px', '28px'],
        '18px': ['18px', '32px'],
        '24px': ['24px', '28px'],
        '30px': ['30px', '36px'],
        '32px': ['32px', '44px'],
        '40px': ['40px', '44px'],
        '56px': ['56px', '60px'],
    },
    maxWidth: {
      '409px': '409px',
      '500px': '500px',
      '1200px': '1200px',
      '1/2': '50%',
      '2/3': '66%',
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
    margin: {
      '1/10': '10%',
      '1/5': '20%',
      '1/4': '25%',
      '1/3': '30%',
    }
    },
  },
  plugins: [],
}
