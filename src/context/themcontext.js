"use client"
import { createContext, useState } from "react";

export const Themecontext=createContext();


export default function Themcontext({children}){
const [mode, setMode]=useState('dark');
const [resbar,setResbar]=useState("bar");
const [resdiv,setResdiv]=useState("lists");



const toggle=()=>{               
setMode(prev=> prev=="light"? "dark":"light");


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
setResbar("responsiveheader");
setResdiv("reslist");

}
else{
  setResbar("bar");
  setResdiv("lists");

}
};

const pages = () => {
    setResbar("bar");
    setResdiv("lists");

}


return (
    <Themecontext.Provider value={{ mode, toggle ,resnav,resbar,resdiv,pages }}>
    <div className={` ${mode}`} >

    {children}
    
    </div>
    </Themecontext.Provider>
)
}