"use client";
import "animate.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import About from "./(static-page)/about/page";
import Contact from "./(static-page)/contact/page";
import Services from "./(static-page)/services/page";
import Team from "./(static-page)/team/page";
import styles from "./page.module.css";
import Illustrion from "/public/images/ill.png";


export default function Home() {
  const up = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        document.documentElement.style.setProperty("--display-up", "block");
      } else {
        document.documentElement.style.setProperty("--display-up", "none");
      }
    });
  });



  return (
    <main className={styles.main}>
      <div className={styles.thefirst}>
        <div className={styles.words}>
          <div className="animate__animated animate__bounce">
            <h1 className={styles.title}>
            Transform Your Web Vision into Reality
            </h1>
          </div>
          <p className={styles.desc}>
          Empowering Your Digital Journey with Expertise and Innovation.
          </p>
          <Link href="/services" className={styles.button}>
            Explore Services
          </Link>
        </div>
        <div className="animate__animated animate__zoomInDown">
          <Image
            src={Illustrion}
            alt="ill"
            width={500}
            height={500}
            priority
            className={styles.img}
          />
        </div>
      </div>

      <About />
      <Services />
      <Team />

      <div className={styles.buildsomething}>
        <h1 className={styles.title}>Lets Build Something Exception </h1>
        <Link href="/contact" className={styles.getstarted}>
          Get Started
        </Link>
      </div>

      <Contact />

      <div className={styles.up} onClick={up} >
        <div className={styles.toup}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35"
            width="35"
            viewBox="0 0 320 512"
          >
            <path
              fill="var(--color-icon)"
              d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
            />
          </svg>
        </div>
      </div>


    </main>
  );
}
