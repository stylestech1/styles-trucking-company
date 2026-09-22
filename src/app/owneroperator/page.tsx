"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CalendarDays, CheckCircle2, FileText, Handshake, Headphones, Snowflake, SlidersHorizontal, Truck } from "lucide-react";
import Link from "next/link";

const ownerOperatorEndpoint = "https://styles-dispatch-management-dev.onrender.com/api/v1/owner-operators";

type OwnerOperatorForm = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    currentLocation: string;
    cdlExperienceYears: string;
    truckYear: string;
    truckMake: string;
    truckModel: string;
    preferredOperatingArea: string;
};

const initialForm: OwnerOperatorForm = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    currentLocation: "",
    cdlExperienceYears: "",
    truckYear: "",
    truckMake: "",
    truckModel: "",
    preferredOperatingArea: "",
};

const benefits = [
    { title: "Reefer Freight", description: "Operate in a market we know.", icon: Snowflake },
    { title: "Weekly Settlements", description: "Detailed weekly revenue and deduction breakdowns.", icon: CalendarDays },
    { title: "Dispatch Support", description: "Get help finding freight and coordinating each load while keeping control of your business.", icon: Headphones },
    { title: "Professional Operations", description: "Clear load information and reliable communication.", icon: CheckCircle2 },
    { title: "Owner Freedom", description: "Run your own truck under our carrier authority.", icon: SlidersHorizontal },
    { title: "Long-Term Opportunity", description: "Relationships built for sustainable growth.", icon: Handshake },
];

const settlementItems = ["Gross revenue", "Your percentage", "Fuel advances / deductions", "Tolls, if applicable", "Approved accessorials", "Final settlement amount"];

const supportItems = [
    { title: "Refrigerated Freight", description: "Our primary freight focus, supported by reefer operations experience.", icon: Snowflake },
    { title: "Operations Support", description: "Load assignments, broker communication, appointments, rate confirmations and delivery requirements.", icon: Headphones },
    { title: "Administrative Support", description: "Carrier-side administrative requirements associated with operating under Styles Trucking authority.", icon: FileText },
];

export default function OwnerOperatorPage() {
    const [form, setForm] = useState<OwnerOperatorForm>(initialForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    const updateField = (field: keyof OwnerOperatorForm, value: string) => {
        setForm((current) => ({ ...current, [field]: value }));
        setSubmitMessage(null);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(null);

        try {
            const response = await fetch(ownerOperatorEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    cdlExperienceYears: Number(form.cdlExperienceYears),
                    truckYear: Number(form.truckYear),
                }),
            });

            if (!response.ok) throw new Error("Unable to submit your application");

            setForm(initialForm);
            setSubmitMessage({ type: "success", text: "Application submitted successfully. Our team will contact you soon." });
        } catch (error) {
            setSubmitMessage({ type: "error", text: error instanceof Error ? error.message : "Something went wrong. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="bg-white pt-20 text-[#183b63]">
            <section className="bg-white">
                <div className="mx-auto grid min-h-[590px] max-w-7xl items-center gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
                    <div>
                        <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.22em] text-[#2160a8]">Owner Operator</p>
                        <h1 className="max-w-xl text-5xl font-extrabold leading-[1.05] tracking-tight text-[#14579d] sm:text-6xl">Drive your truck.<br />Build your business.</h1>
                        <p className="mt-7 max-w-xl text-lg leading-8 text-[#7891ad]">Join the Styles Trucking Owner-Operator Lease-On Program for consistent freight opportunities, clear weekly settlements and reliable dispatch support.</p>
                        <div className="mt-9 flex flex-wrap items-center gap-8">
                            <a href="#apply" className="inline-flex items-center gap-2 rounded-xl bg-[#edf3f9] px-7 py-5 font-extrabold text-[#2160a8] transition-colors hover:bg-[#dce9f5]">Apply <ArrowRight size={19} /></a>
                            <a href="#program" className="font-extrabold text-[#14579d] hover:text-[#0f4177]">Explore the Program</a>
                        </div>
                        <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-[#b3c4d6]">
                            {["Weekly settlements", "No forced dispatch", "Professional support"].map((item) => <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 size={18} className="text-[#216dcc]" />{item}</span>)}
                        </div>
                    </div>
                    <div className="flex min-h-[430px] flex-col items-center justify-center rounded-[30px] bg-[#f4f7fb] px-8 py-12 text-center shadow-[0_20px_50px_rgba(33,96,168,0.12)]">
                        <div className="mb-auto flex w-full items-center justify-between"><span className="rounded-full bg-[#d9e5f1] px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-white">Owner Operator</span><Snowflake className="text-sky-300" size={23} /></div>
                        <Truck className="my-8 text-[#2160a8]" size={72} strokeWidth={1.7} />
                        <h2 className="text-2xl font-extrabold text-[#2160a8]">Your truck. Our freight network.</h2>
                        <p className="mt-3 max-w-md text-base leading-7 text-[#7891ad]">Operate independently while working under an established carrier authority.</p>
                    </div>
                </div>
            </section>

            <section id="program" className="bg-[#f7f9fc] px-6 py-20 md:px-10 lg:px-16">
                <div className="mx-auto max-w-7xl text-center">
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#2160a8]">Why Styles Trucking</p>
                    <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-extrabold leading-tight text-[#14579d] md:text-5xl">Built around professional owner-operators</h2>
                    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#345a80]">The support of an established carrier while you retain the independence of operating your own equipment.</p>
                </div>
                <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map(({ title, description, icon: Icon }) => (
                        <article key={title} className="min-h-[205px] rounded-2xl border border-[#e0e8f1] bg-white p-7 shadow-[0_16px_35px_rgba(35,72,109,0.08)] transition-transform hover:-translate-y-1">
                            <span className="inline-flex rounded-xl bg-[#2160a8] p-3 text-white"><Icon size={22} /></span>
                            <h3 className="mt-5 text-xl font-extrabold text-[#2160a8]">{title}</h3>
                            <p className="mt-2 leading-7 text-[#345a80]">{description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="compensation" className="bg-white">
                <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1fr_0.8fr] lg:px-16">
                    <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#2160a8]">Compensation</p>
                        <h2 className="mt-3 max-w-xl text-4xl font-extrabold leading-tight text-[#14579d] md:text-5xl">Competitive percentage-based pay</h2>
                        <p className="mt-6 max-w-xl text-lg leading-8 text-[#345a80]">Owner-Operators receive <strong className="text-[#183b63]">[85]% of gross linehaul revenue</strong> on qualifying loads. Weekly settlement statements provide a clear breakdown of revenue and authorized deductions.</p>
                        <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">{settlementItems.map((item) => <div key={item} className="flex items-center gap-3 rounded-xl bg-[#f5f8fb] px-4 py-4 font-semibold text-[#183b63]"><CheckCircle2 size={18} className="shrink-0 text-[#216dcc]" />{item}</div>)}</div>
                    </div>
                    <div className="flex flex-col justify-center rounded-[30px] bg-[#2861a5] p-10 text-white shadow-[0_18px_35px_rgba(33,96,168,0.18)]"><span className="text-xs font-extrabold uppercase tracking-[0.22em]">Settlement schedule</span><strong className="mt-3 text-4xl font-extrabold">Weekly</strong><div className="my-7 h-px bg-white/20" /><p className="leading-7 text-blue-100">Detention, layover, TONU and other approved accessorials are paid according to the lease agreement and amounts actually collected from the customer or broker.</p></div>
                </div>
            </section>

            <section id="support" className="bg-[#f7f9fc] px-6 py-20 md:px-10 lg:px-16"><div className="mx-auto max-w-7xl text-center"><p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#2160a8]">Freight &amp; Support</p><h2 className="mt-3 text-4xl font-extrabold text-[#14579d]">We help keep your truck moving</h2><p className="mt-4 text-lg text-[#345a80]">Regional, OTR, dedicated, contract, brokered and direct customer freight as available.</p><div className="mt-11 grid gap-5 text-left md:grid-cols-3">{supportItems.map(({ title, description, icon: Icon }) => <article key={title} className="min-h-[230px] rounded-2xl border border-[#dbe5ef] bg-white p-7 shadow-sm"><Icon className="text-[#2160a8]" size={30} /><h3 className="mt-5 text-xl font-extrabold text-[#2160a8]">{title}</h3><p className="mt-3 leading-7 text-[#345a80]">{description}</p></article>)}</div></div></section>

            <section id="apply" className="bg-[#2861a5] px-6 py-16 text-white md:px-10">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold md:text-5xl">Ready to drive with Styles Trucking?</h2>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">Complete the initial information below. A qualified applicant will receive full lease-on requirements and compensation details.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-10 grid gap-x-5 gap-y-5 rounded-[30px] bg-white p-6 text-[#183b63] shadow-2xl sm:grid-cols-2 sm:p-10">
                        {([
                            ["firstName", "First name", "First name", "text"],
                            ["lastName", "Last name", "Last name", "text"],
                            ["phone", "Phone number", "+1 555 123 4567", "tel"],
                            ["email", "Email address", "Email address", "email"],
                            ["currentLocation", "Current location", "Dallas, TX", "text"],
                            ["cdlExperienceYears", "Years of CDL experience", "8", "number"],
                            ["truckYear", "Truck year", "2022", "number"],
                            ["truckMake", "Truck make", "Freightliner", "text"],
                            ["truckModel", "Truck model", "Cascadia", "text"],
                            ["preferredOperatingArea", "Preferred operating area", "Texas and surrounding states", "text"],
                        ] as const).map(([field, label, placeholder, type]) => (
                            <label key={field} className="block text-sm font-extrabold">
                                {label}
                                <input required type={type} value={form[field]} onChange={(event) => updateField(field, event.target.value)} placeholder={placeholder} className="mt-2 h-12 w-full rounded-xl border border-[#c8d7e6] px-4 text-base font-normal outline-none transition-colors placeholder:text-[#91a4b8] focus:border-[#2861a5] focus:ring-2 focus:ring-[#2861a5]/15" />
                            </label>
                        ))}
                        <div className="sm:col-span-2">
                            <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 rounded-xl bg-[#2861a5] px-7 py-4 font-extrabold text-white transition-colors hover:bg-[#1d508d] disabled:cursor-not-allowed disabled:opacity-60">
                                {isSubmitting ? "Submitting..." : "Submit Application"} {!isSubmitting && <ArrowRight size={18} />}
                            </button>
                            {submitMessage && <p role="status" className={`mt-4 text-sm font-semibold ${submitMessage.type === "success" ? "text-green-600" : "text-red-600"}`}>{submitMessage.text}</p>}
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}