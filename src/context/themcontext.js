"use client"
import { createContext, useEffect, useState } from "react";


export const Themecontext=createContext();


export default function Themcontext({children}){
  const [resbar,setResbar]=useState('bar');
  const [resdiv,setResdiv]=useState('lists');

useEffect(()=>{
  window.localStorage.theme;
},[])

const [mode, setMode] = useState(()=>{
  if (typeof window !== 'undefined' && window.localStorage.theme !== "undefined") {
    console.log(typeof(window.localStorage.theme));

    return localStorage.theme;
  } else {
    console.log('else');
    return 'dark';
  }
  if(window.localStorage.theme!=="undefined") {
    return localStorage.theme;
  }else{  return 'dark'}}

);

useEffect(() => {
    localStorage.theme=mode;
  }, [mode]);
  

  useEffect(() => {
  if (localStorage.getItem('theme')==='dark') {
    document.documentElement.style.setProperty('--background-header', 'linear-gradient(to left ,rgb(18, 17, 17),#0a0e34)');
    document.documentElement.style.setProperty('--color-icon', '#bbb');
    document.documentElement.style.setProperty('--chang-background', '#0d134b');
  }else{
    document.documentElement.style.setProperty('--background-header', 'linear-gradient(rgb(204, 219, 247),white)');
    document.documentElement.style.setProperty('--color-icon', '#0d134b');
    document.documentElement.style.setProperty('--chang-background', 'rgb(56, 198, 246)');
  
  }
  },[])

    function toggle() {
        setMode(prev => prev === "light" ? "dark" : "light");
    
        if (mode==="light") {
          document.documentElement.style.setProperty('--background-header', 'linear-gradient(to left ,rgb(18, 17, 17),#0a0e34)');
    document.documentElement.style.setProperty('--color-icon', '#bbb');
    document.documentElement.style.setProperty('--chang-background', '#0d134b');
        }else{
          document.documentElement.style.setProperty('--background-header', 'linear-gradient(rgb(204, 219, 247),white)');
    document.documentElement.style.setProperty('--color-icon', '#0d134b');
    document.documentElement.style.setProperty('--chang-background', 'rgb(56, 198, 246)');
          
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
    <Themecontext.Provider value={{ mode,toggle,resnav,resbar,resdiv,pages}}>
    <div className={` ${mode}`} >

    {children}
    
    </div>
    </Themecontext.Provider>
)
}