import Image from 'next/image'
import React from 'react'
import logo from "@/assets/images/logo.svg"
import Link from 'next/link'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

const Credit = () => {
    return (
        <>
            <footer className="px-4 lg:px-24 py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12">
                    <div className="flex flex-col col-span-12 md:col-span-4">
                        <Image alt="Bakmi Buncit Harga Irit" src={logo} sizes="100vw" className="mb-3 -mt-4" style={{ width: 280, height: "auto" }} />
                        <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum inventore consectetur blanditiis earum, suscipit, accusamus quasi, quae laborum architecto laudantium sapiente! Esse dignissimos illo dolore nobis ut eveniet aut et.</p>
                    </div>
                    <div className="col-span-12 md:col-span-2">
                        <h4 className="font-semibold text-slate-700 mb-3">Social Media</h4>
                        <ul className="flex flex-col text-slate-600 text-sm gap-y-2">
                            <li>
                                <Link href="#" className="flex items-center gap-x-1">
                                    <AiOutlineFacebook size={16} />
                                    <span>Facebook</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center gap-x-1">
                                    <AiOutlineInstagram size={16} />
                                    <span>Instagram</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center gap-x-1">
                                    <AiOutlineWhatsApp size={16} />
                                    <span>Whatsapp</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <iframe className="rounded-lg overflow-hidden ring-0 outline-none" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6337811574213!2d106.70593227387629!3d-6.17974896055058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8332bc8343d%3A0x14e387e7ea616d78!2sBakmi%20Buncit%20-%20Green%20Lake%20City!5e0!3m2!1sid!2sid!4v1714251676354!5m2!1sid!2sid" width="100%" height={280} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </footer>
            <div className="bg-green-950 flex items-center justify-between p-2 px-4 md:px-24 text-white text-xs">
                <span>&copy; 2024 | Bakmi Buncit</span>
                <span>Developed by Bakmi Buncit</span>
            </div>
        </>
    )
}

export default Credit