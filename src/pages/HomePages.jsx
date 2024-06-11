import "./css/homepages.css";
import { dataImage } from "../assets/data/data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { NavLink } from "react-router-dom";

const HomePages = () => {
  return (
    <section className="beranda">
      <div className="beranda-content">
        <Swiper className="mySwiper">
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
      </div>
    </section>
  );
};

export default HomePages;
