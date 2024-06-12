import "./css/homepages.css";
import { dataImage } from "../assets/data/data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";

const HomePages = () => {
  return (
    <section className="beranda">
      <div className="beranda-content">
        <Swiper
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {dataImage.map((datas) => {
            return (
              <SwiperSlide key={datas.id} className="beranda-img-content">
                <div className="beranda-crop-img">
                  <img
                    src={datas.image}
                    alt="foto bangunan sekolah"
                    className="beranda-img"
                  />
                  <div className="text-beranda">
                    <h1>Selamat Datang Di SMAN 1 Indonesia</h1>
                    <h2>{datas.text}</h2>
                    <NavLink to="/berita">Hubungi Kami</NavLink>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="beranda-count">
          <div className="count-content">
            <div className="count-list">
              <h1>37k+</h1>
              <h2>Total Murid</h2>
            </div>
            <div className="count-list">
              <h1>10k+</h1>
              <h2>Total Alumni</h2>
            </div>
            <div className="count-list">
              <h1>20+</h1>
              <h2>Total Ekstakulikuler</h2>
            </div>
            <div className="count-list">
              <h1>100k+</h1>
              <h2>Total Penghargaan</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePages;
