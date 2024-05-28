import styles from "@/app/page.module.css";
import Link from "next/link";

export default function footer() {


  return (
    <div className={styles.footer}>

<div className={styles.boxfooter}>
<div className={styles.words}>

<div className={styles.line}>
<div className={styles.company}>
  <svg width="33" height="33" viewBox="0 0 53 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgg} >
<g clipPath="url(#clip0_24_519)">
<path d="M11.3419 0.353027H18.5748C19.1366 0.353027 19.5616 0.8627 19.4589 1.41508L9.27702 54.972C9.19859 55.3977 8.82639 55.7066 8.39288 55.7066H1.19425C0.632389 55.7066 0.20743 55.1969 0.310105 54.646L10.4578 1.08764C10.5362 0.661963 10.9084 0.353027 11.3419 0.353027Z" fill="var(--color-icon)"/>
<path d="M50.0546 29.628L47.7087 31.7592L45.5625 33.6883L13.8903 55.6028C13.4724 55.8918 12.9134 55.5302 13.0076 55.0319L14.9184 44.79C15.0183 44.2519 15.3277 43.775 15.7783 43.4632L45.1861 23.1133L50.0546 29.628Z" fill="var(--color-icon)"/>
<path d="M51.1683 29.6907C50.9529 29.9 50.7191 30.0894 50.4724 30.2616L44.9807 34.0913C49.7294 30.7813 38.3553 23.8082 22.3381 10.6919C21.7734 10.2093 21.511 9.46329 21.6465 8.73437L23.1338 0.76184C23.2137 0.330469 23.7313 0.149663 24.0636 0.434396L49.216 21.1943C54.1016 25.219 52.9608 27.951 51.1683 29.6907Z" fill="var(--color-icon)"/>
</g>
</svg>

  <h2 className={styles.title}>DevMode</h2>
  </div>
  <div className={styles.pages}>
  <Link href='/'>Home</Link>
  <Link href='/about'>About Us</Link>
  <Link href='/services'>Services</Link>
  </div>
</div>


<div className={styles.line}>
<h2 className={styles.title}>Contact Us</h2>

<Link href="tel:+96181717464" className={styles.comnication}>
<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512"><path fill="var(--color-icon)" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
<p>(+961) 70 883 675</p>
</Link>

<Link href="mailto:contact@devmode.tech"  className={styles.comnication}>
<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512"><path fill="var(--color-icon)" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
<p>contact@devmode.tech</p>
</Link>

</div>


<div className={styles.line}>
<h2 className={styles.title}>Social Media</h2>
Follow us on social media!
 <div className={styles.icon}>
 <Link href="https://api.whatsapp.com/send?phone=96181717464"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 448 512" className={styles.anicon}><path fill="var(--color-icon)" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg></Link>
 <Link href="https://www.instagram.com/devmodee"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 448 512" className={styles.anicon}><path fill="var(--color-icon)" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></Link>
 <Link href="https://www.tiktok.com/@devmodee"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 448 512" className={styles.anicon}><path fill="var(--color-icon)" d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg></Link>
</div> 

</div>



</div>
</div>



<div className={styles.right}> &copy; 2024 DevMode | All right reserved</div>
      </div>
  )
}
