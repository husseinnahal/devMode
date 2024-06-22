"use client"
import styles from "./page.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


export default function Team() {


  return (
    <div className={styles.main} >

   <h1 className={styles.title}>OUR TEAM</h1>


      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          605: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          770: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1220: {
            slidesPerView: 3,
            spaceBetween: 35,
          },
        }}
        
        modules={[Pagination]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperslide}>

          <div  className={styles.aliimg}   > </div>

  <div className={styles.desc}>
    <div className={styles.befor}>
    <h1 className={styles.name}>Ali Hazer</h1>
    <h3 className={styles.work}>Backend Developer</h3>
    </div>
    <p className={styles.para}>Expert in creating robust and scalable server-side solutions for web applications.</p>
  </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>
        <div  className={styles.husseinimg}   > </div>
        
     <div className={styles.desc}>
            <div className={styles.befor}>
              <h1 className={styles.name}>Hussein Nahhal</h1>
              <h3 className={styles.work}>Frontend Developer</h3>
            </div>
            <p className={styles.para}>specialist in crafting visually stunning and highly interactive user interfaces</p>
          </div>
    
        </SwiperSlide>

        <SwiperSlide className={styles.swiperslide}>

        <div className={styles.houmeneimg}></div>
        <div className={styles.desc}>
          <div className={styles.befor}>
          <h1 className={styles.name}>Mhmd Houmani</h1>
    <h3 className={styles.work}>Mobile Application developer</h3>
    </div>
    <p className={styles.para}>Specialist in creating high-performance mobile applications with stunning UI and seamless functionality.</p>
  </div>
    
        </SwiperSlide>

      </Swiper>

    </div>
  );
}
