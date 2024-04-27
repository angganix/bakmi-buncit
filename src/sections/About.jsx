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
                    <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur blanditiis nobis, totam sed, praesentium aspernatur eveniet molestiae dolore numquam cupiditate dolorum beatae! Sint voluptate inventore autem magnam ullam? Accusantium, voluptatibus?</p>
                    <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur blanditiis nobis, totam sed, praesentium aspernatur eveniet molestiae dolore numquam cupiditate dolorum beatae! Sint voluptate inventore autem magnam ullam? Accusantium, voluptatibus?</p>
                    <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur blanditiis nobis, totam sed, praesentium aspernatur eveniet molestiae dolore numquam cupiditate dolorum beatae! Sint voluptate inventore autem magnam ullam? Accusantium, voluptatibus?</p>
                </div>
            </div>
        </section>
    )
}

export default About