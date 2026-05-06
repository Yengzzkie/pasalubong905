"use client";

import { useRef } from "react";
import Slider, { Settings } from "react-slick";
import type { CustomArrowProps } from "react-slick";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type featuredItemProps = {
  name: string;
  category: string;
  image: string;
  description: string;
  price: string;
};

type itemProps = { items: featuredItemProps[] };

const SampleNextArrow = ({ onClick }: CustomArrowProps) => (
  <button
    onClick={onClick}
    className="
      hidden md:block
      absolute right-[-3%] top-1/2 -translate-y-1/2 z-10
      border border-[#8e3a1f] text-[#8e3a1f]
      p-3
      transition-all duration-300
      hover:bg-[#8e3a1f]
      hover:text-white
      hover:scale-110
    "
  >
    <GoArrowRight />
  </button>
);

const SamplePrevArrow = ({ onClick }: CustomArrowProps) => (
  <button
    onClick={onClick}
    className="
      hidden md:block
      absolute left-[-3%] top-1/2 -translate-y-1/2 z-10
      border border-[#8e3a1f] text-[#8e3a1f]
      p-3
      transition-all duration-300
      hover:bg-[#8e3a1f]
      hover:text-white
      hover:scale-110
    "
  >
    <GoArrowLeft />
  </button>
);

export default function Carousel({ items }: itemProps) {
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container md:px-8">
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-1 lg:px-3 h-full">
            <div className="flex flex-col h-full group">
              <div className="aspect-square overflow-hidden mb-2 lg:mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="text-sm lg:text-2xl font-bold mb-2">
                {item.name}
              </h3>

              {/* 👇 this makes heights consistent */}
              <p className="mb-2 lg:mb-4 text-xs lg:text-sm text-gray-500 flex-grow">
                {item.description}
              </p>

              <span className="bg-(--primary) text-(--neutral) text-xs lg:text-sm w-fit px-1 py-0.5">${item.price}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
