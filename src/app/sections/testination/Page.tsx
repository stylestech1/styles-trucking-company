import Image from "next/image";

const testimonialImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
];

export default function Testination() {
    return (
        <section className="py-14 md:py-20">
            <div className="container mx-auto px-5">
                <h2 className="mb-10 text-center text-2xl font-bold text-[hsl(var(--primary))] md:text-3xl">
                    Testimonials
                </h2>

                <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
                    <div className="order-2 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:order-1">
                        {testimonialImages.map((image, index) => (
                            <div
                                key={image}
                                className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm"
                            >
                                <Image
                                    src={`/assets/images/${image}`}
                                    alt={`Testimonial ${index + 1}`}
                                    fill
                                    sizes="(min-width: 1024px) 18vw, (min-width: 768px) 22vw, 45vw"
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="order-1 overflow-hidden rounded-xl bg-black shadow-lg lg:order-2">
                        <video
                            className="aspect-video w-full"
                            controls
                            playsInline
                            preload="metadata"
                            aria-label="Styles Trucking testimonial video"
                        >
                            <source
                                src="/assets/videos/Avatar%20Video_1080p.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}
