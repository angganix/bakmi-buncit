"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import hero1 from "@/assets/hero-images/bakmi1.jpg"
import hero2 from "@/assets/hero-images/fuyunghai1.jpg"
import hero3 from "@/assets/hero-images/tahu1.jpg"

const Hero = () => {
    const images = [
        {
            image: hero1,
            title: "Bakmi <span class='font-light'>Special</span>",
            caption: "Bakmi Dengan Cita Rasa Spesial",
        },
        {
            image: hero3,
            title: "Tahu Cabe Garam",
            caption: "Menu Ter-favorit"
        },
        {
            image: hero2,
            title: "Fuyunghai <span class='font-light'>Ayam Udang</span>",
            caption: "Rekomendasi Chef Kami"
        }
    ]
    return (
        <section id="hero" className="pb-12 lg:pb-24 relative">
            <svg className="absolute -bottom-2 md:-bottom-12 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9fafb" fillOpacity={1} d="M0,128L60,106.7C120,85,240,43,360,69.3C480,96,600,192,720,213.3C840,235,960,181,1080,176C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" /></svg>
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                loop
                autoplay={{
                    delay: 5000
                }}
                speed={1500}
                navigation
            >
                {images?.map((item, index) => (
                    <SwiperSlide key={index} className="relative py-24">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 md:px-24">
                            <div className="col-span-12 order-last md:order-first md:col-span-6 flex flex-col gap-4 justify-center">
                                <h1 className="p-3 text-center md:text-start md:self-start rounded border-2 border-dashed border-green-800 text-green-800 text-xl md:text-2xl font-semibold">{item?.caption}</h1>
                                <h4
                                    className="text-center md:text-start text-5xl md:text-7xl font-bold text-green-800 hero-title"
                                    dangerouslySetInnerHTML={{ __html: item?.title }}
                                ></h4>
                            </div>
                            <div className="col-span-12 md:col-span-1"></div>
                            <div className="order-first md:order-last col-span-12 md:col-span-5">
                                <Image
                                    alt={item?.title}
                                    src={item?.image}
                                    priority
                                    sizes="100vw"
                                    className="object-cover rounded-3xl shadow-lg transform -rotate-6"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Hero