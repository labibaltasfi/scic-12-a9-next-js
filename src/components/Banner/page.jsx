"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// ✅ IMPORTANT: dynamic import
const Carousel = dynamic(
  () =>
    import("react-responsive-carousel").then((mod) => mod.Carousel),
  { ssr: false }
);

const Banner = () => {
  return (
    <div className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        swipeable
      >
        <div className="relative h-100">
          <Image
            src="https://i.ibb.co/YBpv4BDH/headphones.png"
            alt="Banner 1"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative h-100">
          <Image
            src="https://i.ibb.co/9HvtpT8v/leptop.png"
            alt="Banner 2"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative h-100">
          <Image
            src="https://i.ibb.co/Vk2twQq/desk.png"
            alt="Banner 3"
            fill
            className="object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
