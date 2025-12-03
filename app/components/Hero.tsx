import React from 'react';
import Apple from '@/src/assets/images/logo/apple-store.svg';
import Play from '@/src/assets/images/logo/play-store.svg';
import hero from '@/src/assets/images/hero/1.png';
import element from '@/src/assets/images/element/16.svg';
import Link from 'next/link';
import Image from 'next/image';
import IconifyIconClient from '@/src/IconifyIconClient';

const Hero = () => {
    return (
        <>
            <section className="bg-dark py-12.5 lg:py-40 md:py-17.5">
                <div className="container">
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-37.5 gap-10">
                        <div data-aos="fade-right">
                            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
                                Complete Shop Management Platform
                            </div>
                            <h1 className="text-white lg:text-6xl md:text-5.5xl text-4xl mb-2.5 box">
                                Manage Multiple Shops from One Dashboard
                            </h1>
                            <p className="lg:mt-5 lg:mb-12.5 mt-2.5 mb-5 text-white">
                                Power your retail business with Vallaroo's comprehensive B2B and B2C platform. Streamline inventory, orders, and customer management across all locations.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="https://app.vallaroo.com"
                                    className="py-3.5 md:px-7.5 px-6 inline-flex bg-white font-medium rounded-2xl text-dark transition-all duration-300 hover:bg-primary"
                                >
                                    Start now, it's free!
                                </Link>
                                <Link
                                    href="/downloads/vallaroo.apk"
                                    className="py-3.5 md:px-7.5 px-6 inline-flex bg-transparent border border-white font-medium rounded-2xl text-white transition-all duration-300 hover:bg-white/10"
                                    download
                                >
                                    <IconifyIconClient icon="tabler:download" className="mr-2 text-xl" />
                                    Download App
                                </Link>
                            </div>


                            {/* Apps ratings can be included in future versions */}
                            {/* <div className="md:flex md:items-center md:gap-12.5 md:flex-row lg:mt-20 md:mt7.5 mt-7.5 flex gap-2.5 flex-col">
                                <div className="flex items-center gap-2.5 text-white">
                                    <Image src={Apple} alt="App Store" className="size-7.5" />
                                    <span className="text-base font-medium">4.8</span>
                                    <IconifyIconClient icon="tabler:star-filled" className="text-yellow-400" />
                                    <span className="text-base text-white">on App Store</span>
                                </div>

                                
                                <div className="flex items-center gap-2.5 text-white">
                                    <Image src={Play} alt="Play Store" className="size-7.5" />
                                    <span className="text-base font-medium">4.8</span>
                                    <IconifyIconClient icon="tabler:star-filled" className="text-yellow-400" />

                                    <span className="text-base text-white">on Play Store</span>
                                </div>
                            </div> */}
                        </div>
                        <div>
                            <div className="relative">
                                <Image
                                    src={hero}
                                    alt="Vallaroo Hero - Business Management Dashboard"
                                    className="rounded-2xl"
                                    quality={100}
                                    priority
                                    width={600}
                                    height={400}
                                />
                                <Image
                                    src={element}
                                    alt="Decorative element"
                                    className="md:absolute md:block md:-end-10 -end-7.5 -bottom-10 hidden"
                                    quality={100}
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
