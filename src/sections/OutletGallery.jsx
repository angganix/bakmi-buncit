"use client";
import React from 'react'
import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";
import { IoStorefrontSharp } from "react-icons/io5";

const OutletGallery = () => {
    const outlets = [
        {
            title: "Gading Serpong",
            address: "Ruko Financial BA 2/39, Tangerang",
            time: "Buka Jam 09.00 - 21.30 WIB",
            phones: ["(021) 546 19 22", "(021) 29001810", "0811 8065 195"]
        },
        {
            title: "BSD City",
            address: "Ruko Tol Boulevard F/22",
            time: "Buka Jam 09.00 - 21.30 WIB",
            phones: ["(021) 531 58 240", "(021) 531 58 241", "(021) 222 350 29", "0851 030 65 195"]
        },
        {
            title: "Bintaro Jaya",
            address: "Ruko Kebayoran Arcade C 1/1",
            time: "Buka Jam 09.00 - 21.30 WIB",
            phones: ["(021) 748 70 787", "(021) 748 70 788", "(021) 748 70 788"]
        },
        {
            title: "Greenlake City - Cengkareng",
            address: "Ruko Food City No. 62",
            time: "Buka Jam 09.00 - 21.30 WIB",
            phones: ["(021) 22522757 (hunting)", "085 100 200 800"]
        }
    ];
    return (
        <section id="outlet-gallery" className="px-4 md:px-24 py-24 relative z-20 bg-gradient-to-bl from-amber-200 to-amber-500 overflow-x-hidden">
            <h4 className="text-white font-black text-3xl text-center drop-shadow mb-8">Outlet</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                {outlets?.map((item, index) => (
                    <div key={index} className="relative p-4 text-white rounded-xl bg-gradient-to-br from-green-800 via-green-700 to-green-600">
                        <h4 className="mb-2 font-semibold flex gap-x-2 text-sm">
                            <IoStorefrontSharp className="mt-0.5 flex-shrink-0" />
                            <span>{item?.title}</span>
                        </h4>
                        <p className="flex gap-x-2 text-xs">
                            <FiMapPin className="mt-1 lg:mt-px flex-shrink-0" />
                            <span>{item?.address}</span>
                        </p>
                        <p className="mb-3 text-xs flex gap-x-2">
                            <FiClock className="mt-1 lg:mt-px flex-shrink-0" />
                            <span>{item?.time}</span>
                        </p>
                        <ul className="flex flex-col gap-y-1 text-xs">
                            {item?.phones?.map((phone, phoneIndex) => (
                                <li key={phoneIndex}>
                                    <span className="flex gap-x-1">
                                        <FiPhone className="mt-px flex-shrink-0" />
                                        <span>{phone}</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OutletGallery