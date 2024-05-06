"use client"
import { createContext, useEffect, useState } from "react";

export const Themecontext=createContext();


export default function Themcontext({children}){
const [mode, setmode]=useState('dark');
const [resbar,setresbar]=useState("bar");
const [resdiv,setresdiv]=useState("lists");



const toggle=()=>{               
setmode(prev=> prev=="light"? "dark":"light");


if (mode=="light") {
    document.documentElement.style.setProperty('--background-header', 'linear-gradient(to left ,rgb(18, 17, 17),#0a0e34)');
    document.documentElement.style.setProperty('--chang-background','#0d134b');
    document.documentElement.style.setProperty('--color-icon','#bbb');
}else{
    document.documentElement.style.setProperty('--background-header','linear-gradient(rgb(204, 219, 247),white)');
    document.documentElement.style.setProperty('--chang-background','rgb(56, 198, 246)');
    document.documentElement.style.setProperty('--color-icon','#0d134b');
}

}


const resnav = () => {
if(resbar=="bar")
{
setresbar("responsiveheader");
setresdiv("reslist");

}
else{
  setresbar("bar");
  setresdiv("lists");

}
};

const pages = () => {
    setresbar("bar");
    setresdiv("lists");

}


return (
    <Themecontext.Provider value={{ mode, toggle,resnav,resbar,resdiv,pages }}>
    <div className={` ${mode}`} >

    {children}
    
    </div>
    </Themecontext.Provider>
)
}