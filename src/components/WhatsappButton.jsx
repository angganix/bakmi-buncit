"use client";
import React from 'react'
import { AiOutlineWhatsApp } from 'react-icons/ai'

const WhatsappButton = () => {
    const message = `Saya ingin tanya-tanya tentang Bakmi Buncit dong.`;
    const openWhatsapp = () => {
        window.open(`https://wa.me/6285280297288?text=${encodeURIComponent(message)}`, "_blank");
    }
    return (
        <button
            type="button"
            className="fixed transform hover:scale-105 transition-all duration-200 ease-in-out bottom-0 right-0 m-3 z-30 text-white w-12 h-12 rounded-full bg-green-500 flex justify-center items-center shadow"
            onClick={() => openWhatsapp()}
        >
            <AiOutlineWhatsApp size={26} />
        </button>
    )
}

export default WhatsappButton