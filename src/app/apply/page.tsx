/* eslint-disable @typescript-eslint/no-namespace */
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import Stepper, { Step } from "@/components/Stepper";
import { useEffect, useMemo, useState } from "react";
import { Country, State, City } from "country-state-city";
import Grainient from "@/components/Grainient";
import { ArrowRight, IdCard, Route, ShieldCheck, ShieldUser } from "lucide-react";
import Image from "next/image";
import AnimatedList from "@/components/AnimatedList";
import React from "react";
import Script from "next/script";

<Script src="https://cdn.lordicon.com/lordicon.js" strategy="afterInteractive" />
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "lord-icon": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                src?: string;
                trigger?: string;
                colors?: string;
                style?: React.CSSProperties;
            };
        }
    }
}
type FormState = {
    fullName: string;
    phone: string;
    email: string;

    address: string;
    country: string;
    zip: string;
    state: string;
    city: string;

    cdlYears: string;
    carriers3y: string;
    preventableAccidents1y: string;
    totalViolations: string;
};

type ErrorState = Partial<Record<keyof FormState, string>>;
type SubmitResult = "success" | "error" | null;

const digitsOnly = (v: string) => v.replace(/\D/g, "");

// must contain @ and end with .com (as you asked)
const isValidEmailCom = (email: string) => {
    const e = email.trim().toLowerCase();
    return e.includes("@") && e.endsWith(".com");
};
const trackLead = () => {
    if (typeof window === "undefined") return;
    const fbq = (window as any).fbq;
    if (typeof fbq === "function") {
        fbq("track", "Lead", {
            form: "driver_application",
            source: "website",
        });
    }
};

export default function ApplyPage() {
    const [completed, setCompleted] = useState(false);
    const [activeStep, setActiveStep] = useState(1); // 1..3

    // ✅ NEW: success/error result + loading
    const [submitResult, setSubmitResult] = useState<SubmitResult>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [form, setForm] = useState<FormState>({
        fullName: "",
        phone: "",
        email: "",

        address: "",
        country: "United States",
        zip: "",
        state: "",
        city: "",

        cdlYears: "",
        carriers3y: "",
        preventableAccidents1y: "",
        totalViolations: "",
    });

    const [errors, setErrors] = useState<ErrorState>({});

    const countries = useMemo(() => Country.getAllCountries(), []);

    // selected codes
    const [countryIso, setCountryIso] = useState<string>("US");
    const [stateIso, setStateIso] = useState<string>("");
    const [cityName, setCityName] = useState<string>("");

    const items = [
        {
            label: "Minimum 1 year experience",
            icon: <Route className="h-5 w-5 text-[#ff9f81] bg-[#fff1ec]" />,
        },
        {
            label: "Clean driving history",
            icon: <ShieldCheck className="h-5 w-5 text-[#ff9f81] bg-[#fff1ec]" />,
        },
        {
            label: "Incident and violation free for the last 2 years",
            icon: <ShieldUser className="h-5 w-5 text-[#ff9f81] bg-[#fff1ec]" />,
        },
        {
            label: "Valid CDL-A & Medical Card",
            icon: <IdCard className="h-5 w-5 text-[#ff9f81] bg-[#fff1ec]" />,
        },
    ];

    const states = useMemo(() => {
        if (!countryIso) return [];
        return State.getStatesOfCountry(countryIso);
    }, [countryIso]);

    const cities = useMemo(() => {
        if (!countryIso || !stateIso) return [];
        return City.getCitiesOfState(countryIso, stateIso);
    }, [countryIso, stateIso]);

    // keep form.country synced with countryIso
    useEffect(() => {
        const c = countries.find((x) => x.isoCode === countryIso);
        setForm((p) => ({ ...p, country: c?.name || "" }));
        setErrors((prev) => {
            const next = { ...prev };
            delete next.country;
            return next;
        });
    }, [countryIso, countries]);

    // reset state/city on country change
    useEffect(() => {
        setStateIso("");
        setCityName("");
        setForm((p) => ({ ...p, state: "", city: "" }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryIso]);

    // sync form.state on stateIso change
    useEffect(() => {
        const s = states.find((x) => x.isoCode === stateIso);
        setCityName("");
        setForm((p) => ({ ...p, state: s?.name || "", city: "" }));
    }, [stateIso, states]);

    // sync form.city on cityName change
    useEffect(() => {
        setForm((p) => ({ ...p, city: cityName || "" }));
    }, [cityName]);

    const setField = (key: keyof FormState, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));

        setErrors((prev) => {
            const next = { ...prev };
            delete next[key];

            if (key === "phone") {
                if (!value.trim()) next.phone = "Phone number is required";
                else if (digitsOnly(value).length < 7)
                    next.phone = "Phone must be numbers only (min 7 digits)";
            }

            if (key === "email") {
                const v = value.trim().toLowerCase();
                if (!v) next.email = "Email is required";
                else if (!v.includes("@") || !v.endsWith(".com"))
                    next.email = "Email must contain @ and end with .com";
            }

            if (key === "fullName") {
                if (!value.trim()) next.fullName = "Full name is required";
            }

            return next;
        });
    };

    const isEmpty = (v: string) => !v || v.trim().length === 0;

    const validateStep = (step: number) => {
        const nextErrors: ErrorState = {};

        if (step === 1) {
            if (isEmpty(form.fullName)) nextErrors.fullName = "Full name is required";

            if (isEmpty(form.phone)) {
                nextErrors.phone = "Phone number is required";
            } else if (digitsOnly(form.phone).length < 7) {
                nextErrors.phone = "Phone must be numbers only (min 7 digits)";
            }

            if (isEmpty(form.email)) {
                nextErrors.email = "Email is required";
            } else if (!isValidEmailCom(form.email)) {
                nextErrors.email = "Email must contain @ and end with .com";
            }
        }

        if (step === 2) {
            if (isEmpty(form.address)) nextErrors.address = "Address is required";
            if (isEmpty(form.country)) nextErrors.country = "Country is required";
            if (isEmpty(form.state)) nextErrors.state = "State is required";
            if (isEmpty(form.city)) nextErrors.city = "City is required";
        }

        if (step === 3) {
            if (isEmpty(form.cdlYears) || form.cdlYears.startsWith("Select"))
                nextErrors.cdlYears = "CDL years is required";

            if (
                isEmpty(form.preventableAccidents1y) ||
                form.preventableAccidents1y.startsWith("Enter")
            )
                nextErrors.preventableAccidents1y = "Accidents is required";

            if (isEmpty(form.totalViolations) || form.totalViolations.startsWith("Total"))
                nextErrors.totalViolations = "Violations is required";
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    // ✅ canProceed depends on VALID phone/email in step 1
    const canProceed = useMemo(() => {
        if (activeStep === 1) {
            const phoneDigits = digitsOnly(form.phone);
            return (
                !isEmpty(form.fullName) &&
                !isEmpty(form.phone) &&
                phoneDigits.length >= 7 &&
                !isEmpty(form.email) &&
                isValidEmailCom(form.email)
            );
        }
        if (activeStep === 2) {
            return (
                !isEmpty(form.address) &&
                !isEmpty(form.country) &&
                !isEmpty(form.state) &&
                !isEmpty(form.city)
            );
        }
        if (activeStep === 3) {
            return (
                !isEmpty(form.cdlYears) &&
                !form.cdlYears.startsWith("Select") &&
                !isEmpty(form.preventableAccidents1y) &&
                !form.preventableAccidents1y.startsWith("Enter") &&
                !isEmpty(form.totalViolations) &&
                !form.totalViolations.startsWith("Total")
            );
        }
        return true;
    }, [activeStep, form]);

    const lookupZipUS = async (zip: string) => {
        if (countryIso !== "US") return;

        const clean = zip.replace(/\s/g, "");
        if (clean.length < 5) return;

        try {
            const res = await fetch(`https://api.zippopotam.us/us/${clean}`);
            if (!res.ok) return;
            const data = await res.json();

            const place = data?.places?.[0];
            if (!place) return;

            const nextCity: string = place["place name"];
            const stateAbbr: string = place["state abbreviation"]; // CA, NY...

            setStateIso(stateAbbr);
            queueMicrotask(() => setCityName(nextCity));
        } catch {
            // ignore
        }
    };

    // ✅ NEW: your real submit here
    const submitApplication = async () => {
        // Example:
        // const res = await fetch("/api/apply", { method: "POST", body: JSON.stringify(form) });
        // if (!res.ok) throw new Error("failed");

        await new Promise((r) => setTimeout(r, 900)); // demo latency

        // ✅ to test failure:
        // throw new Error("failed");

        return true;
    };

    // ✅ NEW: intercept final step
    const onBeforeNext = async (step: number) => {
        // validate step 1/2 normally
        if (step === 1 || step === 2) return validateStep(step);

        // step 3: validate then submit → show success/error card
        if (step === 3) {
            const ok = validateStep(3);
            if (!ok) return false;

            setIsSubmitting(true);
            try {
                await submitApplication();
                trackLead();
                setSubmitResult("success");
            } catch {
                setSubmitResult("error");
            } finally {
                setIsSubmitting(false);
            }
            return false;
        }

        return true;
    };

    return (
        <div className="min-h-screen bg-white  pb-28 mb-14">
            <div className="mx-auto w-full ">
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    {/* Grainient Background */}
                    <div className="absolute inset-0 z-0 opacity-20">
                        <Grainient
                            color1="#7eace7"
                            color2="#ff9f81"
                            // color3="#a29fac"
                            timeSpeed={0.25}
                            colorBalance={0}
                            warpStrength={1}
                            warpFrequency={5}
                            warpSpeed={2}
                            warpAmplitude={50}
                            blendAngle={0}
                            blendSoftness={0.05}
                            rotationAmount={500}
                            noiseScale={2}
                            grainAmount={0.1}
                            grainScale={2}
                            grainAnimated={false}
                            contrast={1.5}
                            gamma={1}
                            saturation={1}
                            centerX={0}
                            centerY={0}
                            zoom={0.9}
                        />
                    </div>

                    {/* Optional overlay for readability */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] z-10" />

                    {/* Content */}
                    <div className="relative z-20 flex flex-col items-center text-center max-w-3xl px-6">
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                            <span className="text-[#FF7043]">Better pay</span>
                            <span className="text-[#205DAC]">{", steady miles,"}</span>
                            <br />
                            <span className="text-[#205DAC]">and trucks you can rely on.</span>
                        </h1>

                        <p className="text-slate-700 text-base md:text-lg max-w-2xl mb-8">
                            Experience modern equipment and steady freight backed by real-time road support.
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                document.getElementById("apply-form")?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }}
                            className="bg-[#205DAC] text-white px-8 py-3 rounded-full text-sm md:text-base font-medium shadow-md transition-all duration-300"
                        >
                            Apply Now
                        </button>
                    </div>
                </section>

                <section className="relative w-full py-16 md:py-24">
                    <div className="mx-auto w-[85%]">
                        {/* Title */}
                        <h2 className="text-center text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#0B47A1]">
                            The Rewards of Joining Our Fleet
                        </h2>

                        {/* Layout */}
                        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-12">
                            {/* LEFT CARD */}
                            <div className="md:col-span-4">
                                <div className="h-full rounded-[10px] border border-[#9DBBFF] bg-white p-6">
                                    {/* image area */}
                                    <div className="mx-auto flex items-center justify-center rounded-[8px] ">
                                        <Image
                                            src="/assets/images/stock.svg"
                                            width={140}
                                            height={140}
                                            alt="Weekly earnings"
                                            priority
                                        />
                                    </div>

                                    <p className="mt-5 text-center text-[13px] font-semibold text-[#0B47A1]">
                                        Weekly Earnings
                                    </p>

                                    <p className="mt-1 text-center text-[28px] font-extrabold text-[#0B47A1]">
                                        $1,920 - $2,500
                                    </p>

                                    <ul className="mt-5 space-y-3 text-[13px] text-[#2A4C8C]">
                                        <li className="flex items-start gap-2">
                                            <ArrowRight className="mt-[2px] h-4 w-4 text-[#0B47A1]" />
                                            <span>Start at $0.70 CPM (Reefer)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ArrowRight className="mt-[2px] h-4 w-4 text-[#0B47A1]" />
                                            <span>Up to $0.80 CPM based on your performance.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="md:col-span-8">
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
                                    {/* TOP WIDE */}
                                    <div className="md:col-span-12">
                                        <div className="rounded-[10px] border border-[#9DBBFF] bg-white p-6">
                                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                                {/* IMAGE */}
                                                <div className="order-1 flex justify-center md:order-2 md:shrink-0">
                                                    <Image
                                                        src="/assets/images/home.svg"
                                                        width={160}
                                                        height={160}
                                                        alt="Home"
                                                        priority
                                                        className="h-[110px] w-[110px] md:h-[140px] md:w-[140px]"
                                                    />
                                                </div>

                                                {/* TEXT */}
                                                <div className="order-2 md:order-1 md:flex-1">
                                                    <p className="text-[13px] font-semibold text-[#0B47A1]">
                                                        Your Time at Home is Non-Negotiable
                                                    </p>

                                                    <p className="mt-2 text-[18px] md:text-[20px] font-extrabold leading-snug">
                                                        <span className="text-[#F26C3A]">4 Days OFF</span>{" "}
                                                        <span className="text-[#0B47A1]">for every 3 weeks out.</span>
                                                    </p>

                                                    <p className="mt-2 text-[12px] leading-relaxed text-[#2A4C8C]">
                                                        Because a well-rested driver is a safe driver.
                                                        <br />
                                                        We plan our routes to keep you moving comfortably, avoiding NYC
                                                        and snow lanes whenever possible.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* BOTTOM LEFT */}
                                    <div className="md:col-span-6">
                                        <div className="h-full rounded-[10px] border border-[#9DBBFF] bg-white p-6">
                                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                                {/* IMAGE */}
                                                <div className="order-1 flex justify-center md:order-2 md:shrink-0">
                                                    <Image
                                                        src="/assets/images/love.svg"
                                                        width={120}
                                                        height={120}
                                                        alt="Love"
                                                        priority
                                                    />
                                                </div>

                                                {/* TEXT */}
                                                <div className="order-2 md:order-1 md:flex-1">
                                                    <p className="text-[13px] font-semibold text-[#0B47A1]">Peace of Mind</p>

                                                    <p className="mt-2 font-medium leading-relaxed text-[#2A4C8C]">
                                                        Full Health, Dental, and Vision coverage after .
                                                        <span className="text-[#2A4C8C] font-semibold">90 days</span>
                                                        <br />
                                                        Bring your family along pet and rider policies are included from day one
                                                        because you shouldn’t have to drive alone.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* BOTTOM RIGHT */}
                                    <div className="md:col-span-6">
                                        <div className="h-full rounded-[10px] border border-[#9DBBFF] bg-white p-6">
                                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                                {/* IMAGE */}
                                                <div className="order-1 flex justify-center md:order-2 md:shrink-0">
                                                    <Image
                                                        src="/assets/images/truck.svg"
                                                        width={120}
                                                        height={120}
                                                        alt="Truck"
                                                        priority
                                                    />
                                                </div>

                                                {/* TEXT */}
                                                <div className="order-2 md:order-1 md:flex-1">
                                                    <p className="text-[13px] font-semibold text-[#0B47A1]">
                                                        Modern Trucks You Can Rely On
                                                    </p>

                                                    <p className="mt-2 leading-relaxed text-[#2A4C8C]">
                                                        Drive a 2019 or newer Freightliner. Equipped for your comfort, so the road
                                                        feels a little more like home.
                                                    </p>

                                                    <div className="mt-4 flex flex-wrap gap-3">
                                                        {["Microwave", "Refrigerator", "PrePass", "GPS", "Inverter"].map((t) => (
                                                            <div
                                                                key={t}
                                                                className="rounded-full p-[1px] bg-gradient-to-r from-[#FF7043] to-[#205DAC]"
                                                            >
                                                                <span className="block rounded-full bg-white px-2 py-1.5 text-[13px] font-semibold text-[#0B47A1]">
                                                                    {t}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* end right */}
                        </div>
                    </div>
                </section>

                <section className="relative w-full py-16 mb-6 md:py-24">
                    {/* background */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            background: `
                linear-gradient(
                  to bottom,
                  #FFE9E4 0%,
                  #F8FAFF 25%,
                  #DCE7F7 55%,
                  #9DBBFF 100%
                )
              `,
                        }}
                    />
                    <div className="relative z-10 mx-auto max-w-xl px-4">
                        <h2 className="text-center text-[36px] font-bold text-[#205DAC] mb-10">
                            What We’re Looking For
                        </h2>

                        <AnimatedList
                            items={items}
                            onItemSelect={(item, index) => console.log(item, index)}
                            showGradients
                            enableArrowNavigation
                            displayScrollbar
                            className="max-h-[240px] md:max-h-[260px]"
                        />
                    </div>
                </section>

                <section id="apply-section" className="w-full py-20">
                    <div className="mx-auto w-[90%] max-w-6xl flex flex-col lg:flex-row gap-12 items-start">
                        {/* LEFT CONTENT */}
                        <div className="w-full lg:w-[42%]">
                            {/* Title (smaller like second screenshot) */}
                            <h2 className="text-[26px] md:text-[30px] font-extrabold leading-tight">
                                <span className="text-[#205DAC]">Start </span>
                                <span className="text-[#FF7043]">Earning Your Worth</span>
                            </h2>

                            <p className="mt-2 text-[14px] md:text-[15px] font-medium text-[#205DAC]">
                                Everything You Need, Right in Your Pocket
                            </p>

                            {/* Cards wrapper (DON’T stretch full width) */}
                            <div className="mt-6 space-y-3">
                                {[
                                    {
                                        title: "Direct Dispatcher Chat",
                                        desc: "No more waiting on hold. Chat directly with your dispatcher through our driver app and get answers in seconds.",
                                        icon: "/assets/images/engagment.png",
                                    },
                                    {
                                        title: "Real-Time Load Tracking",
                                        desc: "Know exactly where your next load is. Track your shipments and schedules without the back-and-forth phone calls.",
                                        icon: "/assets/images/location.png",
                                    },
                                    {
                                        title: "Simple & Paperless",
                                        desc: "Scan documents and manage your paperwork instantly. We built it to be simple, so you can focus on the road.",
                                        icon: "/assets/images/documents.png",
                                    },
                                ].map((card) => (
                                    <div key={card.title} className="relative">
                                        <div
                                            className="w-[92%] rounded-[20px] bg-white px-4 py-3 shadow-[0_18px_50px_rgba(83,144,223,0.18)]"
                                            style={{ border: "1.2px solid #5390DF" }}
                                        >
                                            <div className="flex items-start gap-3">
                                                {/* icon pill */}
                                                <div
                                                    className="mt-[1px] grid h-[42px] w-[42px] place-items-center rounded-full overflow-hidden"
                                                    style={{
                                                        border: "1.2px solid #5390DF",
                                                        background: "rgba(83,144,223,0.06)",
                                                    }}
                                                >
                                                    <Image
                                                        src={card.icon}
                                                        alt={card.title}
                                                        width={24}
                                                        height={24}
                                                        className="object-contain"
                                                        priority={false}
                                                    />
                                                </div>

                                                <div className="pt-[2px]">
                                                    <p className="text-[13px] font-extrabold text-[#205DAC] leading-tight">
                                                        {card.title}
                                                    </p>

                                                    <p className="mt-1 text-[11px] text-[#2A4C8C] leading-[1.35] max-w-[360px]">
                                                        {card.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT FORM (Stepper) */}
                        <div id="apply-form" className="w-full lg:flex-1">
                            <div className="max-w-[720px] ml-auto">
                                {submitResult ? (
                                    <ResultCard
                                        type={submitResult}
                                        onPrevious={() => {
                                            setSubmitResult(null);
                                            setActiveStep(3);
                                        }}
                                    />
                                ) : (
                                    <Stepper
                                        key={activeStep} // keep stepper synced
                                        initialStep={activeStep}
                                        onStepChange={(s) => setActiveStep(s)}
                                        onFinalStepCompleted={() => setCompleted(true)} // keep your original
                                        onBeforeNext={onBeforeNext as any} // ✅ now handles submit + errors
                                        backButtonText="Previous"
                                        nextButtonText={isSubmitting ? "Submitting..." : "Next"}
                                        nextButtonProps={{
                                            disabled: !canProceed || isSubmitting,
                                        }}
                                        renderStepIndicator={({ step, currentStep, onStepClick }) => {
                                            const status =
                                                currentStep === step ? "active" : currentStep > step ? "complete" : "inactive";

                                            return (
                                                <button
                                                    type="button"
                                                    onClick={() => onStepClick(step)}
                                                    className="relative grid place-items-center"
                                                    style={{
                                                        width: 34,
                                                        height: 34,
                                                        borderRadius: 999,
                                                        border:
                                                            status === "active" ? "2px solid #FF7043" : "2px solid transparent",
                                                        background:
                                                            status === "inactive"
                                                                ? "#205DAC"
                                                                : status === "complete"
                                                                    ? "#FF7043"
                                                                    : "transparent",
                                                        color: "#fff",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    {status === "active" ? (
                                                        <span
                                                            style={{
                                                                width: 10,
                                                                height: 10,
                                                                borderRadius: 999,
                                                                background: "#FF7043",
                                                                display: "block",
                                                            }}
                                                        />
                                                    ) : status === "complete" ? (
                                                        <span style={{ fontSize: 16, lineHeight: 1 }}>✓</span>
                                                    ) : (
                                                        <span style={{ fontWeight: 800, fontSize: 14 }}>{step}</span>
                                                    )}
                                                </button>
                                            );
                                        }}
                                    >
                                        {/* STEP 1 */}
                                        <Step>
                                            <div className="space-y-5">
                                                <Field
                                                    label="Full Name"
                                                    required
                                                    placeholder="e.g. John Wade"
                                                    value={form.fullName}
                                                    onChange={(v) => setField("fullName", v)}
                                                    error={errors.fullName}
                                                />

                                                <Field
                                                    label="Phone Number"
                                                    required
                                                    placeholder="(555) 000-0000"
                                                    value={form.phone}
                                                    onChange={(v) => setField("phone", v)}
                                                    inputMode="tel"
                                                    error={errors.phone}
                                                />

                                                <Field
                                                    label="Email Address"
                                                    required
                                                    placeholder="name@example.com"
                                                    value={form.email}
                                                    onChange={(v) => setField("email", v)}
                                                    type="email"
                                                    error={errors.email}
                                                />
                                            </div>
                                        </Step>

                                        {/* STEP 2 */}
                                        <Step>
                                            <div className="space-y-5">
                                                <Field
                                                    label="Home Address"
                                                    required
                                                    placeholder="e.g., 123 Main St"
                                                    value={form.address}
                                                    onChange={(v) => setField("address", v)}
                                                    error={errors.address}
                                                />

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <SelectObj
                                                        label="Country"
                                                        required
                                                        value={countryIso}
                                                        onChange={(v) => setCountryIso(v)}
                                                        options={countries.map((c) => ({ value: c.isoCode, label: c.name }))}
                                                        error={errors.country}
                                                    />

                                                    <Field
                                                        label="ZIP Code"
                                                        placeholder="e.g., 60601"
                                                        value={form.zip}
                                                        onChange={(v) => {
                                                            setField("zip", v);
                                                            lookupZipUS(v);
                                                        }}
                                                        inputMode="numeric"
                                                    />
                                                </div>

                                                <SelectObj
                                                    label="State / Province"
                                                    required
                                                    value={stateIso}
                                                    onChange={(v) => setStateIso(v)}
                                                    options={[
                                                        { value: "", label: "Select State" },
                                                        ...states.map((s) => ({ value: s.isoCode, label: s.name })),
                                                    ]}
                                                    disabled={!countryIso}
                                                    error={errors.state}
                                                />

                                                <SelectObj
                                                    label="City"
                                                    required
                                                    value={cityName}
                                                    onChange={(v) => setCityName(v)}
                                                    options={[
                                                        { value: "", label: "Select City" },
                                                        ...cities.map((c) => ({ value: c.name, label: c.name })),
                                                    ]}
                                                    disabled={!stateIso}
                                                    error={errors.city}
                                                />
                                            </div>
                                        </Step>

                                        {/* STEP 3 */}
                                        <Step>
                                            <div className="space-y-5">
                                                <SelectField
                                                    label="Years of CDL Experience?"
                                                    required
                                                    value={form.cdlYears || "Select years (e.g., 5+ years)"}
                                                    onChange={(v) => setField("cdlYears", v)}
                                                    options={[
                                                        "Select years (e.g., 5+ years)",
                                                        "0-1 years",
                                                        "1-2 years",
                                                        "2-5 years",
                                                        "5+ years",
                                                    ]}
                                                    error={errors.cdlYears}
                                                />

                                                <SelectField
                                                    label="Number of carriers in past 3 years?"
                                                    value={form.carriers3y || "Select number of previous employers"}
                                                    onChange={(v) => setField("carriers3y", v)}
                                                    options={[
                                                        "Select number of previous employers",
                                                        "0",
                                                        "1",
                                                        "2",
                                                        "3+",
                                                    ]}
                                                />

                                                <SelectField
                                                    label="Any preventable accidents in the last year?"
                                                    required
                                                    value={form.preventableAccidents1y || "Enter number (0 if none)"}
                                                    onChange={(v) => setField("preventableAccidents1y", v)}
                                                    options={["Enter number (0 if none)", "0", "1", "2", "3+"]}
                                                    error={errors.preventableAccidents1y}
                                                />

                                                <SelectField
                                                    label="Total violations on your permanent record?"
                                                    required
                                                    value={form.totalViolations || "Total count (include criminal & traffic)"}
                                                    onChange={(v) => setField("totalViolations", v)}
                                                    options={[
                                                        "Total count (include criminal & traffic)",
                                                        "0",
                                                        "1",
                                                        "2",
                                                        "3+",
                                                    ]}
                                                    error={errors.totalViolations}
                                                />
                                            </div>
                                        </Step>
                                    </Stepper>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

/* -------------------------------- Result Card -------------------------------- */

function ResultCard({
    type,
    onPrevious,
}: {
    type: "success" | "error";
    onPrevious: () => void;
}) {
    const isSuccess = type === "success";

    return (
        <div
            className="rounded-[30px] bg-white p-6 shadow-[0_18px_45px_rgba(32,93,172,0.12)]"
            style={{ border: "1.5px solid #5390DF" }}
        >
            {/* indicators row */}
            <div className="flex items-center gap-4 px-2 pt-2">
                <Indicator status="complete" />
                <Connector />
                <Indicator status="complete" />
                <Connector />
                <Indicator status={isSuccess ? "complete" : "error"} />
            </div>

            {/* content */}
            <div className="py-10 px-6 text-center">
                <div className="mx-auto w-[150px] h-[150px] flex items-center justify-center">
                    {isSuccess ? <ConfettiIcon /> : <WarningIcon />}
                </div>

                {isSuccess ? (
                    <>
                        <p className="mt-6 text-[#205DAC] font-bold">
                            Application Received! Thanks for taking the time to apply.
                        </p>
                        <p className="mt-2 text-slate-500">
                            Our team will review your profile and reach out
                            <br />
                            to you soon if it’s a match.
                        </p>
                    </>
                ) : (
                    <>
                        <p className="mt-6 text-[#205DAC] font-bold">Oops! Something went wrong on our end.</p>
                        <p className="mt-2 text-slate-500">
                            We’re having trouble connecting to our server right now.
                            <br />
                            Don’t worry, your progress is safe.
                            <br />
                            Please wait a moment and try clicking the previous button again.
                        </p>

                        <div className="mt-8">
                            <button
                                onClick={onPrevious}
                                className="rounded-full bg-[#205DAC] px-7 py-3 text-white font-semibold shadow-md hover:opacity-95"
                            >
                                Previous
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

function Connector() {
    return (
        <div className="h-[2px] flex-1 rounded-full" style={{ background: "#205DAC" }} />
    );
}

function Indicator({ status }: { status: "complete" | "error" }) {
    if (status === "complete") {
        return (
            <div
                className="grid place-items-center"
                style={{
                    width: 34,
                    height: 34,
                    borderRadius: 999,
                    background: "#FF7043",
                    color: "#fff",
                    fontWeight: 900,
                }}
            >
                ✓
            </div>
        );
    }

    return (
        <div
            className="grid place-items-center"
            style={{
                width: 34,
                height: 34,
                borderRadius: 999,
                background: "#9CA3AF",
                color: "#fff",
                fontWeight: 900,
            }}
        >
            ×
        </div>
    );
}

function ConfettiIcon() {
    return (
        <Image
            src="/assets/images/sucess.png"
            width={450}
            height={450}
            alt="success"
            loading="eager"
            className="rounded-lg"
        />
    );
}

function WarningIcon() {
    return (
        <Image
            src="/assets/images/error.png"
            width={450}
            height={450}
            alt="error"
            loading="eager"
            className="rounded-lg"
        />
    );
}

/* --------------------------------- Inputs --------------------------------- */

function Field({
    label,
    required,
    placeholder,
    value,
    onChange,
    type = "text",
    error,
    inputMode,
}: {
    label: string;
    required?: boolean;
    placeholder?: string;
    value: string;
    onChange: (v: string) => void;
    type?: string;
    error?: string;
    inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800">
                {label} {required ? <span className="text-red-500">*</span> : null}
            </label>

            <input
                type={type}
                inputMode={inputMode}
                className={`w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none focus:border-slate-300 ${error ? "border-red-400" : "border-slate-200"
                    }`}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />

            {error ? <p className="text-xs text-red-500">{error}</p> : null}
        </div>
    );
}

function SelectField({
    label,
    required,
    value,
    onChange,
    options,
    error,
}: {
    label: string;
    required?: boolean;
    value: string;
    onChange: (v: string) => void;
    options: string[];
    error?: string;
}) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800">
                {label} {required ? <span className="text-red-500">*</span> : null}
            </label>

            <select
                className={`w-full appearance-none rounded-lg border bg-white px-4 py-3 text-sm outline-none focus:border-slate-300 ${error ? "border-red-400" : "border-slate-200"
                    }`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((o) => (
                    <option key={o} value={o}>
                        {o}
                    </option>
                ))}
            </select>

            {error ? <p className="text-xs text-red-500">{error}</p> : null}
        </div>
    );
}

function SelectObj({
    label,
    required,
    value,
    onChange,
    options,
    error,
    disabled,
}: {
    label: string;
    required?: boolean;
    value: string;
    onChange: (v: string) => void;
    options: { value: string; label: string }[];
    error?: string;
    disabled?: boolean;
}) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800">
                {label} {required ? <span className="text-red-500">*</span> : null}
            </label>

            <select
                disabled={disabled}
                className={`w-full appearance-none rounded-lg border bg-white px-4 py-3 text-sm outline-none focus:border-slate-300 disabled:bg-slate-50 ${error ? "border-red-400" : "border-slate-200"
                    }`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((o) => (
                    <option key={o.value || o.label} value={o.value}>
                        {o.label}
                    </option>
                ))}
            </select>

            {error ? <p className="text-xs text-red-500">{error}</p> : null}
        </div>
    );
}