import { ArrowRight, Check, MapPin, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CareerSection = () => {
  return (
    <section className="container mx-auto px-5 py-14 md:py-20" id="career-details">
      <div className="grid items-center gap-8 overflow-hidden rounded-xl bg-[#edf5ff] md:grid-cols-2">
        <div className="p-7 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--primary))]">Your next mile starts here</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">Strong Miles. Competitive Pay.</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">You are on the road because you want to move forward. We keep our trucks moving with consistent reefer freight and support you can count on.</p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[['$0.70', 'Starting CPM'], ['$0.80', 'After 90 days*'], ['$1,920-$2,500+', 'Typical weekly pay*'], ['2,800-3,200', 'Miles per week']].map(([value, label]) => <div key={label}><p className="text-lg font-bold text-[hsl(var(--primary))]">{value}</p><p className="text-xs text-slate-500">{label}</p></div>)}
          </div>
          <p className="mt-5 text-xs text-slate-500">*Pay ranges are typical/expected and may vary based on miles, performance, and available freight.</p>
        </div>
        <Image src="/assets/images/photo_4981127818515254451_y.jpg" width={700} height={480} alt="Styles Trucking driver" className="h-full min-h-64 w-full object-cover" />
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 p-5"><ShieldCheck className="text-[hsl(var(--primary))]" size={22} /><h3 className="mt-3 font-semibold">What We&apos;re Looking For</h3><p className="mt-2 text-sm text-slate-500">Valid CDL-A, clean driving record, minimum two years of experience, and a professional safety mindset.</p></div>
        <div className="rounded-lg border border-slate-200 p-5"><MapPin className="text-[hsl(var(--primary))]" size={22} /><h3 className="mt-3 font-semibold">Our Lanes</h3><p className="mt-2 text-sm text-slate-500">AR, OK, MO, KS, IL, OH, PA, MD, VA, NC, SC, GA, TN, MS, KY, AL, LA, and TX. No NY or CA.</p></div>
        <div className="rounded-lg border border-slate-200 p-5"><Check className="text-[hsl(var(--primary))]" size={22} /><h3 className="mt-3 font-semibold">Home Time</h3><p className="mt-2 text-sm text-slate-500">Choose from three weeks out with four days home or four weeks out with one week home.</p></div>
      </div>
      <div className="mt-8 text-center"><Link href="/apply" className="inline-flex items-center gap-2 rounded-md bg-[hsl(var(--primary))] px-7 py-3 font-semibold text-white shadow-md hover:opacity-90">Apply Now <ArrowRight size={18} /></Link></div>
    </section>
  );
};

export default CareerSection;
