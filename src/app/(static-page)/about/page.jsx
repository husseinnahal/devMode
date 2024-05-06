"use client"
import { usePathname } from "next/navigation";
import styles from "./page.module.css";
import Illustration from "/public/images/cm.png"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


export default function about() {

const pathname = usePathname();
const [clas,setclas]=useState("a");
const [clasimg,setclasimg]=useState("a");


const elementRef = useRef(null);
if (pathname==="/"){
useEffect(() => {
  if (elementRef.current) {
    const offsetTop = elementRef.current.offsetTop;

    window.addEventListener("scroll",()=>{
      if(window.scrollY>=(offsetTop/3)){
        setclas("animate__animated animate__backInRight");
       setclasimg("animate__animated animate__backInLeft");
      }
    })

  }
}, []);
}

  return (
    <div className={styles.main} ref={elementRef}>

<div className={styles.about}  style={{minHeight:`${pathname === '/about'? "80vh" : "50vh"}`}}>

<div className={clasimg}  style={{opacity:`${clasimg==="a" && pathname!="/about"? "0" :"1"}`}}>
<Image src={Illustration} width={500} height={420} className={styles.img} alt="about"></Image>

</div>


  <div className={clas} style={{opacity:`${clas==="a" && pathname!="/about"? "0" :"1"}`}}>
<div className={styles.desc} >
  <h1 className={styles.title}>Who We Are : </h1>
<p className={styles.aboutpar}>At DevMode, we're passionate about technology and innovation. 
Our mission is to provide you with the tools, knowledge, and 
services you need to excel in the world of web, mobile application development and 
programming. With years of experience and a team of experts, 
we're here to support your journey from coding novice to web 
development pro.</p>

</div>
  </div>

</div>

    </div>
  )
}
