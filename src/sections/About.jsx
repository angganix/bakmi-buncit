import React from 'react'
import aboutImage from "@/assets/images/about.jpg"
import Image from 'next/image'

const About = () => {
    return (
        <section id="about-section" className="px-4 md:px-24 pb-24 relative z-20">
            <div className="grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 relative">
                    <Image
                        alt="Bakmi Buncit Harga Irit"
                        src={aboutImage}
                        loading="lazy"
                        sizes="100vw"
                        id="about"
                        className="object-cover object-top rounded-3xl mt-16 lg:-mt-24"
                        style={{
                            width: "100%",
                            height: "auto"
                        }}
                    />
                </div>
                <div className="col-span-12 md:col-span-8">
                    <h1 className="font-bold text-2xl md:text-5xl mb-4 text-slate-800 lg:mt-3">Tentang <span className="text-green-800">Bakmi Buncit</span></h1>
                    <p className="mb-3">
                        Bakmi Buncit adalah restoran keluarga yang telah berdiri sejak tahun 2005. Kata “Buncit” pada nama restoran kami diambil dari lokasi outlet pertama kami yang berada di Komplek Buncit Indah, Banjarmasin.
                    </p>
                    <p className="mb-3">
                        Sebagai restoran keluarga kami menyediakan bakmi dan chinese food yang beraneka ragam. Seperti Puyunghai, Gurame Goreng, Sapo Tahu Seafood, Bistik Sapi, Bakmi Goreng, dan ada 50 lebih pilihan menu yang dapat dipilih oleh pelanggan.
                    </p>
                    <p className="mb-3">
                        Kami senantiasa memberikan kepuasan kepada setiap pelanggan dengan menyediakan produk yang berkualitas disertai dengan pelayanan yang cepat, ramah, dan harga terjangkau. Setelah 19 tahun berdiri, kami telah memiliki 4 cabang di daerah Jakarta - Tangerang diantara yaitu Gading Serpong Tangerang, BSD Tangerang, Bintaro, dan Green Lake City.
                    </p>
                    <p>
                        Dengan seiring berjalannya waktu kami menanggapi kebutuhan pelanggan kami, dengan melayani reservasi acara keluarga maupun acara kantor, dan kami menyediakan layanan pesan antar. Maka itu silahkan mampir ke Bakmi Buncit bersama keluarga, dan teman teman anda.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About