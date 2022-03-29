import React, { useContext } from "react";

const StyleContext = React.createContext();

export const useStyle = () => {
  return useContext(StyleContext);
};



export const StyleProvider = ({children}) => {
  const style = {
    mx: 'mx-5 md:mx-10 xl:mx-24',
    my: 'my-10 md:my-14',
    mb_sm: 'mb-8 md:mb-10',
    mb_md: 'mb-10 md:mb-14',
    mt_sm: 'mt-8 md:mt-10',
    mt_md: 'mt-10 md:mt-14',
    text : {
      action1:" ",
      action2:" text-sm md:text-base",
      body1:"text-16px md:text-18px",
      body2:"text-sm md:16px",
      body3:"",
      h1: " font-extrabold text-56px md:text-7xl", 
      h2: " font-bold text-2xl md:text-32px", 
      h3: " font-bold text-xl md:text-32px", 
      h4: "font-bold  text-base md:text-2xl", 
      p: "",
    }

}

  return (
    <StyleContext.Provider value={style}>
        {children}
    </StyleContext.Provider>
  );
};
