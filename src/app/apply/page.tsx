/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMemo, useState } from "react";
import Stepper, { Step } from "@/components/Stepper";

type FormState = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    experienceYears: string;
    violations: string;
    readyDate: string;
};

type ErrorState = Partial<Record<keyof FormState, string>>;

const digitsOnly = (value: string) => value.replace(/\D/g, "");

export default function ApplyPage() {
    const [activeStep, setActiveStep] = useState(1);
    const [errors, setErrors] = useState<ErrorState>({});
    const [form, setForm] = useState<FormState>({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        experienceYears: "",
        violations: "",
        readyDate: "",
    });
    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    };
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

    const setField = (key: keyof FormState, value: string) => {
        if (key === "phone") {
            value = value.replace(/\D/g, "");
        }

        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));

        setErrors((prev) => {
            const next = { ...prev };

            switch (key) {
                case "firstName":
                    next.firstName = value.trim()
                        ? ""
                        : "First name is required";
                    break;

                case "lastName":
                    next.lastName = value.trim()
                        ? ""
                        : "Last name is required";
                    break;

                case "phone":
                    if (!value.trim()) {
                        next.phone = "Phone number is required";
                    } else if (value.length < 7) {
                        next.phone = "Phone number must be at least 7 digits";
                    } else {
                        next.phone = "";
                    }
                    break;

                case "email":
                    if (!value.trim()) {
                        next.email = "Email is required";
                    } else if (!isValidEmail(value)) {
                        next.email = "Please enter a valid email address";
                    } else {
                        next.email = "";
                    }
                    break;

                default:
                    break;
            }

            return next;
        });
    };


    const validateStep = (step: number) => {
        const nextErrors: ErrorState = {};

        if (step === 1) {
            if (!form.firstName.trim()) nextErrors.firstName = "First name is required";
            if (!form.lastName.trim()) nextErrors.lastName = "Last name is required";

            if (!form.phone.trim()) {
                nextErrors.phone = "Phone number is required";
            } else if (digitsOnly(form.phone).length < 7) {
                nextErrors.phone = "Phone number is invalid";
            }

            if (!form.email.trim()) {
                nextErrors.email = "Email is required";
            } else if (!isValidEmail(form.email)) {
                nextErrors.email = "Please enter a valid email address";
            }
        }

        if (step === 2) {
            if (!form.experienceYears.trim()) {
                nextErrors.experienceYears = "Experience is required";
            }

            if (!form.violations.trim()) {
                nextErrors.violations = "This field is required";
            }

            if (!form.readyDate.trim()) {
                nextErrors.readyDate = "Ready start date is required";
            }
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const canProceed = useMemo(() => {
        if (activeStep === 1) {
            return Boolean(
                form.firstName.trim() &&
                form.lastName.trim() &&
                form.phone.trim() &&
                form.phone.length >= 7 &&
                form.email.trim() &&
                isValidEmail(form.email)
            );
        }

        if (activeStep === 2) {
            return (
                form.experienceYears.trim() &&
                form.violations.trim() &&
                form.readyDate.trim()
            );
        }

        return false;
    }, [activeStep, form]);

    const handleSubmit = async () => {
        const isValid = validateStep(2);

        if (!isValid) return false;

        try {
            const payload = {
                firstName: form.firstName,
                lastName: form.lastName,
                phone: form.phone,
                email: form.email,
                experienceYears: form.experienceYears,
                violations: form.violations,
                readyDate: form.readyDate,
            };

            const response = await fetch(
                `${baseUrl}/api/v1driver-applicants/public`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result?.message || "Failed to submit application");
            }

            alert("Application submitted successfully");

            setForm({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                experienceYears: "",
                violations: "",
                readyDate: "",
            });

            setActiveStep(1);

            return false;
        } catch (error: any) {
            console.error(error);

            alert(error?.message || "Failed to submit application");

            return false;
        }
    };
    const onBeforeNext = async (step: number) => {
        if (step === 1) {
            return validateStep(1);
        }

        if (step === 2) {
            return handleSubmit();
        }

        return true;
    };

    return (
        <main className="min-h-screen bg-[#f5f6f8] pt-[110px] pb-10 px-4">
            <section className="mx-auto w-full max-w-[760px]">
                <div className="p-4">
                    <Stepper
                        initialStep={activeStep}
                        onStepChange={(step) => setActiveStep(step)}
                        onBeforeNext={onBeforeNext}
                        onFinalStepCompleted={() => { }}
                        backButtonText="Previous"
                        nextButtonText={activeStep === 2 ? "Submit" : "Next"}
                        nextButtonProps={{
                            disabled: !canProceed,
                        }}
                    >
                        {/* STEP 1 */}
                        <Step>
                            <div className="space-y-4 sm:space-y-5">
                                <Field
                                    label="First Name"
                                    required
                                    placeholder="First name"
                                    value={form.firstName}
                                    onChange={(value) => setField("firstName", value)}
                                    error={errors.firstName}
                                />

                                <Field
                                    label="Last Name"
                                    required
                                    placeholder="Last name"
                                    value={form.lastName}
                                    onChange={(value) => setField("lastName", value)}
                                    error={errors.lastName}
                                />

                                <Field
                                    label="Phone Number"
                                    required
                                    placeholder="Phone number"
                                    value={form.phone}
                                    onChange={(value) => setField("phone", value)}
                                    error={errors.phone}
                                    inputMode="numeric"
                                />

                                <Field
                                    label="Email"
                                    required
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={(value) => setField("email", value)}
                                    error={errors.email}
                                    type="email"
                                />
                            </div>
                        </Step>

                        {/* STEP 2 */}
                        <Step>
                            <div className="space-y-4 sm:space-y-5">
                                <Field
                                    label="How many years of experience do you have?"
                                    required
                                    placeholder="Example: 2 years"
                                    value={form.experienceYears}
                                    onChange={(value) => setField("experienceYears", value)}
                                    error={errors.experienceYears}
                                />

                                <TextAreaField
                                    label="Do you have any tickets or accidents for the last 1 year?"
                                    required
                                    placeholder="yes/no..."
                                    value={form.violations}
                                    onChange={(value) => setField("violations", value)}
                                    error={errors.violations}
                                    maxLength={70}
                                />

                                <Field
                                    label="When are you ready to start?"
                                    required
                                    value={form.readyDate}
                                    onChange={(value) => setField("readyDate", value)}
                                    error={errors.readyDate}
                                    type="date"
                                />
                            </div>
                        </Step>
                    </Stepper>
                </div>
            </section>
        </main>
    );
}

function Field({
    label,
    required,
    placeholder,
    value,
    onChange,
    error,
    type = "text",
    inputMode,
}: {
    label: string;
    required?: boolean;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    type?: string;
    inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            <input
                type={type}
                inputMode={inputMode}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none transition focus:border-[#205DAC] ${error ? "border-red-400" : "border-slate-200"
                    }`}
            />

            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
}

function TextAreaField({
    label,
    required,
    placeholder,
    value,
    onChange,
    error,
    maxLength,
}: {
    label: string;
    required?: boolean;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    maxLength: number;
}) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            <textarea
                placeholder={placeholder}
                value={value}
                maxLength={maxLength}
                onChange={(e) => onChange(e.target.value)}
                className={`min-h-[110px] w-full resize-none rounded-lg border bg-white px-4 py-3 text-sm outline-none transition focus:border-[#205DAC] ${error ? "border-red-400" : "border-slate-200"
                    }`}
            />

            <div className="flex items-center justify-between mt-1">
                <p className="text-xs text-red-500 min-h-[18px]">
                    {error || ""}
                </p>

                <p
                    className={`text-xs ${value.length >= maxLength
                        ? "text-red-500 font-medium"
                        : "text-slate-400"
                        }`}
                >
                    {value.length}/{maxLength}
                </p>
            </div>
        </div>
    );
}