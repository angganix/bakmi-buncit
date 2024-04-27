"use client";
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/images/logo.svg'
import Link from 'next/link'
import NavMenu from '@/components/NavMenu'
import halal1 from '@/assets/images/halal1.webp'
import halal2 from '@/assets/images/halal2.webp'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoChevronUp } from "react-icons/io5";

const TopNav = () => {
    const navRef = useRef(null);
    const [showDrawer, setShowDrawer] = useState(false);
    const [showTopScroll, setShowTopScroll] = useState(false);
    const [activePath, setActivePath] = useState("/");
    const menuList = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "#about",
            title: "About"
        },
        {
            path: "#menu",
            title: "Menu"
        },
        // {
        //     path: "#outlet-gallery",
        //     title: "Outlet"
        // },
        {
            path: "#contact-location",
            title: "Contact"
        }
    ];

    const scrollEffect = () => {
        if (window.scrollY > 0) {
            navRef.current.classList.remove("py-3");
            navRef.current.classList.add("shadow-lg", "shadow-slate-500/10");
            setShowTopScroll(true);
        } else {
            navRef.current.classList.add("py-3");
            navRef.current.classList.remove("shadow-lg", "shadow-slate-500/10");
            setShowTopScroll(false);
        }
    }

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        document.addEventListener("scroll", scrollEffect);
        setActivePath(window.location.hash === "" ? "/" : window.location.hash)
        return (() => {
            document.removeEventListener("scroll", scrollEffect);
        })
    }, []);

    return (
        <>
            <header ref={navRef} className="bg-gray-50 sticky top-0 z-30 py-3 transition-all duration-200 ease-in-out">
                <nav className="grid grid-cols-12 px-4 lg:px-24">
                    <div className="col-span-4 md:col-span-3 flex lg:hidden justify-start items-center gap-x-1 py-3">
                        <HalalLogo height={35} />
                    </div>
                    <Link href="/" className="relative col-span-4 lg:col-span-4 flex items-center">
                        <SiteLogo />
                    </Link>
                    <div className="col-span-4 hidden lg:flex items-center">
                        <div className="flex items-center justify-center gap-x-1 w-full">
                            {menuList?.map(item => (
                                <NavMenu key={item?.path} item={item} activePath={activePath} setActivePath={setActivePath} />
                            ))}
                        </div>
                    </div>
                    <div className="col-span-4 hidden lg:flex justify-end items-center gap-x-1">
                        <HalalLogo height={55} />
                    </div>
                    <div className="col-span-4 flex lg:hidden justify-end items-center">
                        <button type="button" className="p-2 rounded" onClick={() => setShowDrawer(true)}>
                            <AiOutlineMenu size={18} />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Drawer */}
            <div className={`block lg:hidden fixed transition-all duration-300 ease-in-out top-0 right-0 w-full h-full bg-white z-40 ${showDrawer ? "-translate-x-0" : "-translate-x-full"}`}>
                <div className="flex flex-col relative">
                    <button type="button" className="p-2 rounded absolute top-0 right-0 m-2" onClick={() => setShowDrawer(false)}>
                        <AiOutlineClose size={18} />
                    </button>
                    <div className="flex justify-center p-4">
                        <SiteLogo />
                    </div>
                    <div className="flex flex-col p-4">
                        {menuList?.map(item => (
                            <NavMenu key={item?.path} item={item} closeDrawer={() => setShowDrawer(false)} activePath={activePath} setActivePath={setActivePath} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Go To Top Button */}
            <button
                type="button"
                className={`w-12 z-30 shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out h-12 flex justify-center items-center rounded-full bg-orange-500 text-white fixed bottom-0 right-0 m-3 mb-16 ${showTopScroll ? "opacity-1" : "opacity-0"}`}
                onClick={() => goToTop()}
            >
                <IoChevronUp size={28} />
            </button>
        </>
    )
}

const SiteLogo = () => (
    <Image
        alt="Bakmi Buncit Paling Irit"
        src={logo}
        height={70}
        className="-mt-2 lg:-mt-1 transform hover:-translate-y-1 transition-all duration-200 ease-in-out"
        priority
    />
)

const HalalLogo = ({ height }) => (
    <>
        <Image
            alt="Bakmi Buncit Halal"
            src={halal1}
            width={height}
            height={height}
            className="rounded cursor-pointer transform hover:-translate-y-1 transition-all duration-200 ease-in-out"
        />
        <Image
            alt="Bakmi Buncit Halal"
            src={halal2}
            width={height}
            height={height}
            className="rounded cursor-pointer transform hover:-translate-y-1 transition-all duration-200 ease-in-out"
        />
    </>
)

export default TopNav