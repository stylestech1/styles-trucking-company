import {
    ArrowRight,
    Check,
    Clock3,
    DollarSign,
    Heart,
    Truck,
    type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Benefit = {
    icon: LucideIcon;
    title: string;
    description: string;
};

const benefits: Benefit[] = [
    {
        icon: DollarSign,
        title: "$1,920-$2,500+ weekly",
        description: "Typical pay range",
    },
    {
        icon: Truck,
        title: "2,800-3,200 miles",
        description: "Every week",
    },
    {
        icon: Clock3,
        title: "Predictable home time",
        description: "Two schedule options",
    },
    {
        icon: Heart,
        title: "Rider & pet friendly",
        description: "Bring your companion",
    },
];

export default function CdlDriverJobsPage() {
    return (
        <main className="bg-[#f7f9fc] pt-[90px]">
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#102c56] text-white">
                <Image
                    src="/assets/images/photo_4981127818515254448_y.jpg"
                    alt="Styles Trucking reefer truck"
                    fill
                    priority
                    className="object-cover opacity-40"
                />

                <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
                    <p className=" font-semibold uppercase tracking-widest text-[#e2b45d]">
                        CDL-A Company Drivers
                    </p>

                    <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
                        CDL-A Reefer Truck Driver Jobs
                    </h1>

                    <p className="mt-5 max-w-xl text-base leading-7 text-white/85">
                        Drive with Styles Trucking from Northwest Arkansas. Steady miles,
                        quality equipment, and a team that knows your name.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/apply"
                            className="inline-flex items-center justify-center gap-2 rounded-md bg-[hsl(var(--primary))] px-6 py-3 font-semibold transition hover:opacity-90"
                        >
                            Apply in 2 Minutes
                            <ArrowRight size={18} />
                        </Link>

                        <a
                            href="tel:+14794803064"
                            className="inline-flex items-center justify-center rounded-md border border-white/60 px-6 py-3 font-semibold transition hover:bg-white/10"
                        >
                            Call Recruiting
                        </a>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
                {/* What You Can Expect - FIRST */}
                <div className="rounded-2xl bg-white p-6 shadow-sm md:p-10">
                    <p className=" font-semibold uppercase tracking-widest text-[hsl(var(--primary))]">
                        What You Can Expect
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-slate-900">
                        Strong Miles. Competitive Pay.
                    </h2>

                    <p className="mt-4 max-w-2xl  leading-6 text-slate-600">
                        Drivers start at $0.70 CPM, with the potential to earn up to $0.80
                        CPM after 90 days based on performance. With typical weekly mileage
                        of 2,800–3,200 miles, drivers can typically expect to earn
                        $1,920–$2,500+ per week.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-xl border border-slate-200 bg-[#f9fbff] p-5">
                            <p className="text-2xl font-bold text-[hsl(var(--primary))]">
                                $1,920–$2,500+
                            </p>
                            <p className="mt-1  font-semibold text-slate-900">
                                Typical Weekly Earnings
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-[#f9fbff] p-5">
                            <p className="text-2xl font-bold text-[hsl(var(--primary))]">
                                2,800–3,200
                            </p>
                            <p className="mt-1  font-semibold text-slate-900">
                                Miles Per Week
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-[#f9fbff] p-5">
                            <p className="text-2xl font-bold text-[hsl(var(--primary))]">
                                $0.70 CPM
                            </p>
                            <p className="mt-1  font-semibold text-slate-900">
                                Starting Pay
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-[#f9fbff] p-5">
                            <p className="text-2xl font-bold text-[hsl(var(--primary))]">
                                Up to $0.80 CPM
                            </p>
                            <p className="mt-1  font-semibold text-slate-900">
                                After 90 Days
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                                Based on performance
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Drive With Styles */}
                <div className="mt-14">
                    <h2 className="text-center text-3xl font-bold text-[hsl(var(--primary))]">
                        Why Drive With Styles?
                    </h2>

                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                        {benefits.map(({ icon: Icon, title, description }) => (
                            <div
                                key={title}
                                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                            >
                                <Icon
                                    className="text-[hsl(var(--primary))]"
                                    size={22}
                                />

                                <h3 className="mt-4  font-semibold text-slate-900">
                                    {title}
                                </h3>

                                <p className="mt-1 text-xs text-slate-500">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Equipment / Image */}
                <div className="mt-14 grid items-center gap-8 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">
                            Quality Equipment for the Road
                        </h2>

                        <ul className="mt-5 space-y-3  text-slate-600">
                            {[
                                "2022+ Freightliners",
                                "Microwave, fridge, and inverter",
                                "PrePass and GPS",
                                "Steady reefer freight",
                                "No NY or CA",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-2"
                                >
                                    <Check
                                        className="mt-0.5 shrink-0 text-[hsl(var(--primary))]"
                                        size={18}
                                    />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Image
                        src="/assets/images/photo_4981127818515254452_y.jpg"
                        width={700}
                        height={500}
                        alt="Styles Trucking reefer equipment"
                        className="h-80 w-full rounded-xl object-cover"
                    />
                </div>

                {/* CTA */}
                <div className="mt-14 rounded-xl bg-[#edf5ff] p-7 text-center md:p-12">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Ready to Drive With Styles?
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl  text-slate-600">
                        Start with a short application. Our recruiting team will follow up
                        to answer your questions.
                    </p>

                    <Link
                        href="/apply"
                        className="mt-7 inline-flex items-center gap-2 rounded-md bg-[hsl(var(--primary))] px-7 py-3 font-semibold text-white transition hover:opacity-90"
                    >
                        Start Application
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
    );
}