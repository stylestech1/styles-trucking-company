export default function LeaderShipMessage() {
    return (
        <section
            aria-labelledby="leadership-message-title"
            className="bg-[#f7f9fc] px-5 py-14 md:py-20"
        >
            <div className="container mx-auto max-w-5xl">
                <h2
                    id="leadership-message-title"
                    className="mb-8 text-center text-2xl font-bold text-[hsl(var(--primary))] md:mb-10 md:text-3xl"
                >
                    A message from our leadership
                </h2>

                <div className="overflow-hidden rounded-xl bg-black shadow-xl">
                    <video
                        className="aspect-video w-full"
                        controls
                        playsInline
                        preload="metadata"
                        poster="/assets/images/leadership-video-poster.jpg"
                        aria-label="A message from our leadership"
                    >
                        <source
                            src="/assets/videos/Avatar_Video_g.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    )
}