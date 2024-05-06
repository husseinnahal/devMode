"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Illustration from "/public/images/cm.png";

export default function About() {
  const pathname = usePathname();
  const [clas, setClas] = useState("a");
  const [clasimg, setClasImg] = useState("a");
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const offsetTop = elementRef.current.offsetTop;
        if (window.scrollY >= offsetTop / 3) {
          setClas("animate__animated animate__backInRight");
          setClasImg("animate__animated animate__backInLeft");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.main} ref={elementRef}>
      <div className={styles.about} style={{ minHeight: `${pathname === '/about' ? "80vh" : "50vh"}` }}>
        <div className={clasimg} style={{ opacity: `${clasimg === "a" && pathname !== "/about" ? "0" : "1"}` }}>
          <Image src={Illustration} width={500} height={420} className={styles.img} alt="about" />
        </div>
        <div className={clas} style={{ opacity: `${clas === "a" && pathname !== "/about" ? "0" : "1"}` }}>
          <div className={styles.desc}>
            <h1 className={styles.title}>Who We Are:</h1>
            <p className={styles.aboutpar}>At DevMode, we are passionate about technology and innovation. Our mission is to provide you with the tools, knowledge, and services you need to excel in the world of web and mobile application development and programming. With years of experience and a team of experts, we are here to support your journey from coding novice to web development pro.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
