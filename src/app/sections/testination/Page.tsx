/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testination() {
    const items = [
        {
            type: "video" as const,
            src: "/assets/images/v1.mp4",
            poster: "/assets/images/1.jpg",
        },
        {
            type: "video" as const,
            src: "/assets/images/v2.mp4",
            poster: "/assets/images/2.jpg",
        },
        {
            type: "video" as const,
            src: "/assets/images/v3.mp4",
            poster: "/assets/images/3.jpg",
        },

        {
            type: "image" as const,
            src: "/assets/images/1.jpg",
        },
        {
            type: "image" as const,
            src: "/assets/images/2.jpg",
        },
        {
            type: "image" as const,
            src: "/assets/images/3.jpg",
        },
        {
            type: "image" as const,
            src: "/assets/images/4.jpg",
        },
        {
            type: "image" as const,
            src: "/assets/images/5.jpg",
        },
        {
            type: "image" as const,
            src: "/assets/images/6.jpg",
        },
        {
            type: "image" as const,
            src: "/assets/images/7.jpg",
        },
        {
            type: "image" as const,
            src: "/assets/images/8.jpg",
        },
    ];

    return (
        <section className="py-14 md:py-20">
            <div className="container mx-auto px-5">
                <h2 className="mb-10 text-center text-2xl font-bold text-[hsl(var(--primary))] md:text-3xl">
                    Testimonials
                </h2>

                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    speed={800}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    navigation
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="pb-12"
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="overflow-hidden rounded-xl">
                                {item.type === "video" ? (
                                    <video
                                        src={item.src}
                                        poster={item.poster}
                                        controls
                                        preload="metadata"
                                        className="h-[300px] w-full object-cover"
                                    />
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={`Testimonial ${index + 1}`}
                                        className="h-[300px] w-full object-cover"
                                    />
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}