import Link from "next/link";
import Image from "next/image";
import IconifyIconClient from "@/src/IconifyIconClient";
import Topbar from "@/src/layout/Topbar";
import Footer from "@/src/layout/Footer/Footer";

export default function NotFound() {
  return (
    <>
      <Topbar />
      
      {/* Hero Section */}
      <section className="bg-dark py-12.5 lg:py-40 md:py-17.5">
        <div className="container">
          <div className="text-center">
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Oops! Page Not Found
            </div>
            <h1 className="text-white lg:text-6xl md:text-5.5xl text-4xl mb-2.5 box">
              404 Error
            </h1>
            <p className="lg:mt-5 lg:mb-12.5 mt-2.5 mb-5 text-white max-w-3xl mx-auto">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div
              className="bg-dark rounded-2xl lg:p-12.5 p-8"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="300"
            >
              <div className="text-center mb-10">
                <div className="md:size-15 size-12.5 mb-5 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <IconifyIconClient icon="solar:compass-linear" className="lg:size-7.5 size-6.5 text-dark" />
                </div>
                <h4 className="text-white lg:text-2.5xl md:text-2.5xl text-1.5xl mb-2.5">
                  Quick Navigation
                </h4>
                <p className="text-white/80 text-lg">
                  Find what you're looking for with these helpful links
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                <Link href="/" className="flex flex-col items-center gap-3 hover:bg-white/10 p-6 rounded-xl transition-colors group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <IconifyIconClient icon="solar:home-2-linear" className="text-xl text-primary" />
                  </div>
                  <div className="text-center">
                    <div className="text-white text-base font-medium">Homepage</div>
                    <div className="text-white/60 text-sm">Back to home</div>
                  </div>
                </Link>
                
                <Link href="/products/b2b" className="flex flex-col items-center gap-3 hover:bg-white/10 p-6 rounded-xl transition-colors group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <IconifyIconClient icon="solar:shop-linear" className="text-xl text-primary" />
                  </div>
                  <div className="text-center">
                    <div className="text-white text-base font-medium">B2B App</div>
                    <div className="text-white/60 text-sm">Business solution</div>
                  </div>
                </Link>
                
                <Link href="/products/b2c" className="flex flex-col items-center gap-3 hover:bg-white/10 p-6 rounded-xl transition-colors group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <IconifyIconClient icon="solar:smartphone-2-linear" className="text-xl text-primary" />
                  </div>
                  <div className="text-center">
                    <div className="text-white text-base font-medium">B2C App</div>
                    <div className="text-white/60 text-sm">Mobile app</div>
                  </div>
                </Link>
                
                <Link href="/pricing" className="flex flex-col items-center gap-3 hover:bg-white/10 p-6 rounded-xl transition-colors group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <IconifyIconClient icon="solar:dollar-minimalistic-linear" className="text-xl text-primary" />
                  </div>
                  <div className="text-center">
                    <div className="text-white text-base font-medium">Pricing</div>
                    <div className="text-white/60 text-sm">View plans</div>
                  </div>
                </Link>
                
                <Link href="/contact" className="flex flex-col items-center gap-3 hover:bg-white/10 p-6 rounded-xl transition-colors group">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <IconifyIconClient icon="solar:phone-linear" className="text-xl text-primary" />
                  </div>
                  <div className="text-center">
                    <div className="text-white text-base font-medium">Support</div>
                    <div className="text-white/60 text-sm">Get help</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div
            className="mt-10 bg-primary rounded-2xl lg:p-10 p-5"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <div className="grid md:grid-cols-3 lg:gap-10 gap-5">
              <div>
                <h5 className="md:text-2.5xl text-1.5xl">
                  Need help finding what you're looking for?
                </h5>
              </div>

              <div>
                <div className="lg:flex items-center gap-5">
                  <h6 className="lg:text-5.5xl md:text-4.6xl text-3.4xl">24/7</h6>
                  <div className="fs-base">Customer support available</div>
                </div>
              </div>

              <div>
                <div className="lg:flex items-center gap-5">
                  <h6 className="lg:text-5.5xl md:text-4.6xl text-3.4xl">99%</h6>
                  <div className="fs-base">Customer satisfaction rate</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex md:justify-center gap-2.5 mt-10 flex-wrap justify-start"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <IconifyIconClient icon="solar:dialog-2-bold" className="size-5.5" />
            <div className="text-dark fs-base">Still can't find what you need?</div>
            <Link href="/contact" className="flex items-center gap-1 text-dark font-medium">
              <div className="underline gap-1">Let's chat</div>
              <IconifyIconClient icon="tabler:arrow-right" className="size-6" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}





