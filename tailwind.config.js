/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
'./components/**/*.{js,ts,jsx,tsx}',
'./app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        themed4:'#6A5B0D',
        themed3:'#786818',
        themed2:'#97862F',
        themed1:'#B8A95E',
        themel1:'#D8BD3A',
        themel2:'#E3CA4E',
        themel3:'#EBD66E',
        themel4:'#F9E892',
        themeblue: '#3876CA',
        themered:'#F13914',
        themegreen:'#17A412',
        themeorange:"#E5AE1C",
        themegray:"#E9E9E8"
      },
      screens:{
        sm:"480px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
      },
      fontFamily:{
        nunito:['Nunito', 'sans-serif']
      },
    },
  },
  plugins: [],
}
