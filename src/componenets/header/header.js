"use client"
import styles from "@/app/page.module.css";
import { useContext, useState } from "react";
import  {Themecontext}  from "@/context/themcontext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "/public/images/logo.png"
import Image from "next/image";

export default function Header() {
const {mode, toggle,resnav,resbar,resdiv,pages }=useContext(Themecontext);

const pathname = usePathname();




  return (
<div className={styles.mainheader}> 
<div className={styles.header} >

<Link href='/'><div className={styles.logo}>
<Image src={Logo} width={50} height={50} alt="logo" ></Image>
  <h3>DevMode</h3>
  </div></Link>

<div className={styles.clicks}> 

<div className={`${styles[resbar]}`} onClick={resnav}>
<span className={styles.one}></span>
<span className={styles.two}></span>
<span className={styles.three}></span>
</div>

<div className={`${styles[resdiv]}`} >

  <div className={styles.mode} onClick={toggle}  > 
 <div>☀️</div>
 <div>🌑</div>
 <div className={styles.buton} style={mode==="dark" ? {right:"2px"} : {left:"2px"}}></div>
</div>

<ul className={styles.list}>
<li className={styles.lii}><Link href={"/"} style={{color:`${pathname === '/'? "#10d3ff": ""}`}}  onClick={pages}>Home</Link></li>
<li className={styles.lii}><Link href={"/about"}  style={{color:`${pathname === '/about'? "#10d3ff": ""}`}}   onClick={pages}>About us</Link></li>
<li className={styles.lii}><Link href={"/services"}   style={{color:`${pathname === '/services'? "#10d3ff": ""}`}}  onClick={pages}>Services</Link></li>
<li className={styles.lii}><Link href={"/team"}   style={{color:`${pathname === '/team'? "#10d3ff": ""}`}}  onClick={pages}>Team</Link></li>
<li className={styles.lii}><Link href={"/contact"}  style={{color:`${pathname === '/contact'? "#10d3ff": ""}`}}  onClick={pages}>Contact</Link></li>
</ul>

</div>


</div>






</div>
</div>
  )
}
