"use client";
import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import menu1 from "@/assets/menu-images/menu-1.jpg";
import menu2 from "@/assets/menu-images/menu-2.jpg";
import menu3 from "@/assets/menu-images/menu-3.jpg";
import menu4 from "@/assets/menu-images/menu-4.jpg";

const Menu = () => {
    const images = [menu1, menu2, menu3, menu4];
    return (
        <section id="menu" className="px-4 md:px-24 pt-24 relative z-20 bg-gradient-to-br from-amber-500 to-amber-200 overflow-hidden">
            <svg className="absolute -top-6 lg:-top-16 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9fafb" fillOpacity={1} d="M0,192L80,165.3C160,139,320,85,480,96C640,107,800,181,960,213.3C1120,245,1280,235,1360,229.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" /></svg>
            <h4 className="absolute top-8 lg:top-16 lg:left-80 text-white font-black text-3xl">Daftar Menu</h4>
            <Swiper
                modules={[EffectCards, Autoplay]}
                slidesPerView={1}
                autoplay={{
                    delay: 15000
                }}
                speed={1500}
                effect={'cards'}
                grabCursor={true}
                className="w-full lg:max-w-4xl mt-2 lg:mt-24"
            >
                {images?.map((item, index) => (
                    <SwiperSlide key={index} className="relative rounded-xl">
                        <Image
                            alt="Bakmi Buncit Harga Irit"
                            src={item}
                            className="rounded-xl"
                            sizes="100vw"
                            loading="lazy"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Menu