'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import IconifyIconClient from '@/src/IconifyIconClient';
import dynamic from 'next/dynamic';
const MobileMenu = dynamic(() => import('./component/MobileMenu'));
const NavMenu = dynamic(() => import('./component/NavMenu'));

const Topbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`bg-white sticky top-0 inset-x-0 w-screen z-20 transition-all duration-300 ${isSticky ? 'shadow-md' : ''
                    }`}
            >
                <div className="container">
                    <div className="flex items-center justify-between py-2.5 lg:py-4.5">
                        <div className="text-lg font-bold">
                            <Link href="/">
                                <Image
                                    src="/vallaroo-logo-black.png"
                                    alt="Vallaroo Logo"
                                    className="h-8.5 lg:h-9"
                                    width={120}
                                    height={36}
                                />
                            </Link>
                        </div>
                        <NavMenu />
                        <div className="flex flex-row justify-center items-center md:gap-4 gap-2.5">
                            <div className="md:flex hidden gap-4">
                                <Link
                                    href="https://app.vallaroo.com"
                                    className="bg-dark text-white hover:text-dark hover:bg-primary rounded-2xl px-7.5 py-3.5 font-medium transition-all duration-300"
                                >
                                    Try B2B App
                                </Link>
                                <Link
                                    href="https://app.vallaroo.com"
                                    className="bg-green-600 text-white hover:text-green-700 hover:bg-green-500 rounded-2xl px-7.5 py-3.5 font-medium transition-all duration-300"
                                >
                                    B2C App (Free)
                                </Link>
                            </div>
                            <div className="flex lg:hidden">
                                <button
                                    type="button"
                                    className="bg-dark  text-white focus:text-black focus:bg-primary inline-flex justify-center items-center rounded-2xl md:size-13 size-11 p-3.5 font-medium transition-all duration-300"
                                    aria-haspopup="dialog"
                                    aria-expanded="false"
                                    aria-controls="mobileMenuOffcanvas"
                                    onClick={() => setMenuOpen(true)}
                                >
                                    <IconifyIconClient icon="tabler:menu-2" className="text-2xl size-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
};

export default Topbar;
