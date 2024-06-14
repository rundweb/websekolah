import "./css/homepages.css";
import kepsek from "../assets/images/kepsek.jpg";

import { dataImage } from "../assets/data/data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";

const HomePages = () => {
  return (
    <>
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
      <section className="sambutan">
        <div className="sambutan-content">
          <div className="sambutan-img">
            <img src={kepsek} alt="" />
          </div>
          <div className="sambutan-text">
            <h1>Sambutan Kepala Sekolah</h1>
            <h2>Drs. Nadien Amizah, M.Pd.</h2>
            <h3>
              Marilah kita bersama-sama membentuk masa depan yang gemilang! Di
              sekolah ini, kami bukan hanya menyediakan{" "}
              <span>pendidikan berkualitas</span>, tetapi juga menciptakan
              lingkungan yang mendukung, inspiratif, dan penuh dengan kesempatan
              untuk <span>berkembang</span>. Saya mengajak setiap siswa dan
              siswi untuk bergabung dengan keluarga besar kami di{" "}
              <span>SMAN 1 Indonesia</span> untuk mengeksplorasi potensi
              tersembunyi, menemukan bakat, dan bersama-sama meraih mimpi-mimpi
              kita. Bersama, kita akan melangkah maju menuju{" "}
              <span>kesuksesan!</span> Ayo bergabung dan jadilah bagian dari
              perjalanan pendidikan yang menginspirasi di{" "}
              <span>SMAN 1 Indonesia!</span>
            </h3>
            <a href="">Daftar Sekarang</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePages;
