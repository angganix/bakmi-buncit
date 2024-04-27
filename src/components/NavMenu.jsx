import Link from 'next/link'
import React from 'react'

const NavMenu = ({ item, closeDrawer = () => null, activePath = "/", setActivePath }) => {
    const onNavClick = () => {
        closeDrawer();
        setActivePath(item?.path);
    }

    return (
        <Link
            href={item?.path}
            className={`p-3 py-5 hover:text-orange-500 font-semibold transition-all duration-200 ease-linear ${activePath === item?.path ? "text-orange-500" : ""}`}
            onClick={onNavClick}
        >
            {item?.title}
        </Link>
    )
}

export default NavMenu