"use client"
import { createContext, useEffect, useState } from "react";

import cookie from 'js-cookie';

export const Themecontext=createContext();


export default function Themcontext({children}){
  const [resbar,setResbar]=useState('bar');
  const [resdiv,setResdiv]=useState('lists');
  
   const [mode, setMode] = useState(() => {
    const savedTheme = cookie.get('theme');
    return savedTheme || 'dark';
  });

useEffect(() => {
  cookie.set('theme', mode, { expires: 7 });
}, [mode]);
  

  useEffect(() => {
  if (cookie.get('theme') === 'light') {
    document.documentElement.style.setProperty('--background-mode', 'linear-gradient(#d8e3fa,white)');
    document.documentElement.style.setProperty('--background-header', 'linear-gradient(rgb(204, 219, 247),white)');
    document.documentElement.style.setProperty('--color-icon', '#0d134b');
    document.documentElement.style.setProperty('--chang-background', 'rgb(56, 198, 246)');

  }else{
    document.documentElement.style.setProperty('--background-mode', 'linear-gradient(to left ,rgb(18, 17, 17),#0a0e34)');
    document.documentElement.style.setProperty('--background-header', 'linear-gradient(to left ,rgb(18, 17, 17),#0a0e34)');
    document.documentElement.style.setProperty('--color-icon', '#bbb');
    document.documentElement.style.setProperty('--chang-background', '#0d134b');

  }
  },[])

    function toggle() {
        setMode(prev => prev === "light" ? "dark" : "light");
    
        if (mode==="light") {
          document.documentElement.style.setProperty('--background-header', 'linear-gradient(to left ,rgb(18, 17, 17),#0a0e34)');
    document.documentElement.style.setProperty('--color-icon', '#bbb');
    document.documentElement.style.setProperty('--chang-background', '#0d134b');
    document.documentElement.style.setProperty('--background-mode', 'linear-gradient(to left ,rgb(18, 17, 17),#0a0e34)');

        }else{
          document.documentElement.style.setProperty('--background-header', 'linear-gradient(rgb(204, 219, 247),white)');
    document.documentElement.style.setProperty('--color-icon', '#0d134b');
    document.documentElement.style.setProperty('--chang-background', 'rgb(56, 198, 246)');
    document.documentElement.style.setProperty('--background-mode', 'linear-gradient(#d8e3fa,white)');

          
        }
    }


function resnav(){
if(resbar=="bar")
{
setResbar("responsiveheader");
setResdiv('reslist');
}
else{
  setResbar("bar");
  setResdiv("lists");
}
}

function pages() {
    setResbar("bar");
    setResdiv("lists");

}


return (
    <Themecontext.Provider value={{mode,toggle,resnav,resbar,resdiv,pages}}>
    <div className={`theme`} >

    {children}
    
    </div>
    </Themecontext.Provider>
)
}