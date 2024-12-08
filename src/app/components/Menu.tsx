/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const menus = [
    {
        label: "Home",
        path: "",
        submenus: [
            { label: "Lorem Ipsum", path: "/" },
            { label: "Lorem Ipsum", path: "/" },
            { label: "Lorem Ipsum", path: "/" },
            { label: "Lorem Ipsum", path: "/" },
        ],
        img: "/images/home/arrow-down.png",
    },
    {
        label: "About Us",
        path: "",
        submenus: [
            { label: "Lorem Ipsum", path: "/about" },
            { label: "Lorem Ipsum", path: "/about" },
        ],
        img: "/images/home/arrow-down.png",
    },
    {
        label: "Blog",
        path: "/blog",
        img: "/images/home/arrow-right.png",
    },
    {
        label: "Contact Us",
        path: "/contact",
        img: "/images/home/arrow-right.png",
    },
];

const Menu = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(
        menus.findIndex((menu) => menu.path === pathname)
    );
    const [hoverIndex, setHoverIndex] = useState(null);

    useEffect(() => {
        const currentIndex = menus.findIndex((menu) => menu.path === pathname);
        setActiveIndex(currentIndex);
    }, [pathname]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <section className="fixed top-0 left-0 w-full z-20 bg-white">
            <nav className="flex items-center justify-between h-16 px-4 sm:px-8 bg-[#a70000] text-white">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <img
                            src="\Image\download.png"
                            alt="Logo"
                            className="h-20 w-48 text-white"
                        />
                    </Link>
                </div>

                <div className="sm:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isMenuOpen ? (
                            <img src="/Image/close.png" alt="Close Menu" className="h-6 w-6" />
                        ) : (
                            <img src="/Image/menu.png" alt="Open Menu" className="h-16 w-16" />
                        )}
                    </button>
                </div>
                <div className="hidden sm:flex items-center gap-6">
                    {menus.map((menu, index:any) => (
                        <div
                            key={menu.label}
                            className="relative"
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            <Link
                                href={menu.path}
                                className={`text-white text-xl font-bold mb-4 font-sans relative 
                                    ${activeIndex === index
                                        ? "bg-white text-[#800080]"
                                        : "hover:bg-opacity-70"}
                                    after:bg-[#F9F49F] after:absolute after:h-1 after:w-0 after:bottom-[-6px] after:left-0 
                                    hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}
                            >
                                {menu.label}
                            </Link>
                            {hoverIndex === index && menu.submenus && (
                                <div className="absolute text-nowrap top-full left-0 bg-white text-black shadow-md rounded-lg mt-2">
                                    {menu.submenus.map((submenu) => (
                                        <Link
                                            key={submenu.label}
                                            href={submenu.path}
                                            className="block px-10 hover:bg-gray-100"
                                        >
                                            {submenu.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/login"
                            className="text-white text-xl font-bold font-sans relative 
                                    after:bg-[#F9F49F] after:absolute after:h-1 after:w-0 after:bottom-[-6px] after:left-0 
                                    hover:after:w-full after:transition-all after:duration-300 cursor-pointer hover:bg-opacity-70"
                        >
                            Login
                        </Link>
                        <button className="bg-white text-[#800080] py-2 px-4 rounded-lg hover:bg-opacity-80">
                            Request Demo
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <div className="sm:hidden absolute top-full left-0 w-full bg-white text-black shadow-lg">
                        {menus.map((menu, index) => (
                            <div key={menu.label} className="border-b">
                                <Link
                                    href={menu.path}
                                    onClick={closeMenu}
                                    className={`block px-4 py-3 ${activeIndex === index
                                        ? "bg-gray-100 text-[#800080]"
                                        : "hover:bg-gray-50"
                                        }`}
                                >
                                    {menu.label}
                                </Link>
                                {menu.submenus && (
                                    <div className="pl-6">
                                        {menu.submenus.map((submenu) => (
                                            <Link
                                                key={submenu.label}
                                                href={submenu.path}
                                                onClick={closeMenu}
                                                className="block py-2 text-sm hover:text-[#800080]"
                                            >
                                                {submenu.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="flex flex-col items-center gap-4 py-4">
                            <Link
                                href="/login"
                                className="text-[#800080] text-lg hover:underline"
                            >
                                Login
                            </Link>
                            <button className="bg-[#800080] text-white py-2 px-6 rounded-lg hover:bg-opacity-90">
                                Request Demo
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </section>
    );
};

export default Menu;
