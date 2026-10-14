
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Stepper, { Step } from "@/components/Stepper";

type FormState = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    state: string;
    experienceYears: string;
    violations: string;
    readyDate: string;
};

type ErrorState = Partial<Record<keyof FormState, string>>;

type ToastState = {
    type: "success" | "error";
    message: string;
};

const API_URL =
    "https://styles-dispatch-management-prod.onrender.com/api/v1/driver-applicants/public";

const initialForm: FormState = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    state: "",
    experienceYears: "",
    violations: "",
    readyDate: "",
};

const digitsOnly = (value: string) =>
    value.replace(/\D/g, "");

const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

export default function ApplyPage() {
    const [activeStep, setActiveStep] = useState(1);

    const [form, setForm] = useState<FormState>({
        ...initialForm,
    });

    const [errors, setErrors] = useState<ErrorState>({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [toast, setToast] = useState<ToastState | null>(
        null
    );

    const submittingRef = useRef(false);

    // Automatically hide toast
    useEffect(() => {
        if (!toast) return;

        const timeout = setTimeout(() => {
            setToast(null);
        }, 4000);

        return () => clearTimeout(timeout);
    }, [toast]);

    // Update form fields
    const setField = (
        key: keyof FormState,
        value: string
    ) => {
        const nextValue =
            key === "phone" ? digitsOnly(value) : value;

        setForm((prev) => ({
            ...prev,
            [key]: nextValue,
        }));

        setErrors((prev) => ({
            ...prev,
            [key]: undefined,
        }));
    };

    // Validate each step
    const validateStep = (step: number): boolean => {
        const nextErrors: ErrorState = {};

        if (step === 1) {
            if (!form.firstName.trim()) {
                nextErrors.firstName =
                    "First name is required";
            }

            if (!form.lastName.trim()) {
                nextErrors.lastName =
                    "Last name is required";
            }

            if (!form.phone.trim()) {
                nextErrors.phone =
                    "Phone number is required";
            } else if (digitsOnly(form.phone).length < 7) {
                nextErrors.phone =
                    "Phone number must be at least 7 digits";
            }

            if (!form.email.trim()) {
                nextErrors.email = "Email is required";
            } else if (!isValidEmail(form.email)) {
                nextErrors.email =
                    "Please enter a valid email address";
            }

            if (!form.state.trim()) {
                nextErrors.state = "State is required";
            }
        }

        if (step === 2) {
            if (!form.experienceYears.trim()) {
                nextErrors.experienceYears =
                    "Experience is required";
            }

            if (!form.violations.trim()) {
                nextErrors.violations =
                    "This field is required";
            }

            if (!form.readyDate.trim()) {
                nextErrors.readyDate =
                    "Ready start date is required";
            }
        }

        setErrors(nextErrors);

        return Object.keys(nextErrors).length === 0;
    };

    // Enable or disable Next / Submit
    const canProceed = useMemo(() => {
        if (isSubmitting) return false;

        if (activeStep === 1) {
            return Boolean(
                form.firstName.trim() &&
                form.lastName.trim() &&
                digitsOnly(form.phone).length >= 7 &&
                isValidEmail(form.email) &&
                form.state.trim()
            );
        }

        if (activeStep === 2) {
            return Boolean(
                form.experienceYears.trim() &&
                form.violations.trim() &&
                form.readyDate.trim()
            );
        }

        return false;
    }, [activeStep, form, isSubmitting]);

    // Submit application

    const handleSubmit = async (): Promise<boolean> => {
        if (submittingRef.current) {
            console.warn("Submission already in progress");
            return false;
        }

        const isValid = validateStep(2);

        if (!isValid) {
            console.warn("Form validation failed");
            return false;
        }

        submittingRef.current = true;
        setIsSubmitting(true);
        setToast(null);

        try {
            const payload = {
                firstName: form.firstName.trim(),
                lastName: form.lastName.trim(),
                phone: digitsOnly(form.phone),
                email: form.email.trim(),
                state: form.state.trim(),
                experienceYears: form.experienceYears.trim(),
                violations: form.violations.trim(),
                readyDate: form.readyDate,
            };

       

            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });


            const responseText = await response.text();


            let responseData: {
                message?: string;
                error?: string;
            } | null = null;

            try {
                responseData = JSON.parse(responseText);
            } catch {
                console.warn("Response is not valid JSON");
            }

            if (!response.ok) {
                throw new Error(
                    responseData?.message ||
                    responseData?.error ||
                    `Failed to submit application (${response.status})`
                );
            }


            setToast({
                type: "success",
                message: "Application submitted successfully!",
            });

            setForm({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                state: "",
                experienceYears: "",
                violations: "",
                readyDate: "",
            });

            setErrors({});
            setActiveStep(1);

            return true;
        } catch (error: unknown) {
            console.error("5. FETCH ERROR:", error);

            const errorMessage =
                error instanceof Error
                    ? error.message
                    : "Failed to submit application";

            setToast({
                type: "error",
                message: errorMessage,
            });

            return false;
        } finally {
            submittingRef.current = false;
            setIsSubmitting(false);

        }
    };


    // Stepper navigation
    const onBeforeNext = async (
        step: number
    ): Promise<boolean> => {

        if (step === 1) {
            return validateStep(1);
        }

        if (step === 2) {
            return await handleSubmit();
        }

        return false;
    };

    return (
        <main className="min-h-screen bg-[#f5f6f8] pt-[110px] pb-10 px-4">
            <section className="mx-auto w-full max-w-[760px]">
                {/* Header */}
                <div className="mb-5 rounded-xl bg-[#edf5ff] p-6 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--primary))]">
                        Styles Trucking Recruiting
                    </p>

                    <h1 className="mt-2 text-3xl font-bold text-slate-900">
                        Apply to Drive With Styles
                    </h1>

                    <p className="mt-2 text-sm text-slate-600">
                        Start with a short application. Our
                        recruiting team will contact you about
                        available CDL-A reefer positions.
                    </p>
                </div>

                {/* Application Form */}
                <div className="p-4">
                    <Stepper
                        initialStep={activeStep}
                        onStepChange={(step) => {
                            setActiveStep(step);
                        }}
                        onBeforeNext={onBeforeNext}
                        onFinalStepCompleted={() => { }}
                        disableStepIndicators
                        backButtonText="Previous"
                        nextButtonText={
                            activeStep === 2
                                ? isSubmitting
                                    ? "Submitting..."
                                    : "Submit"
                                : "Next"
                        }
                        nextButtonProps={{
                            disabled: !canProceed,
                            type: "button",
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
                                    onChange={(value) =>
                                        setField("firstName", value)
                                    }
                                    error={errors.firstName}
                                />

                                <Field
                                    label="Last Name"
                                    required
                                    placeholder="Last name"
                                    value={form.lastName}
                                    onChange={(value) =>
                                        setField("lastName", value)
                                    }
                                    error={errors.lastName}
                                />

                                <Field
                                    label="Phone Number"
                                    required
                                    placeholder="Phone number"
                                    value={form.phone}
                                    onChange={(value) =>
                                        setField("phone", value)
                                    }
                                    error={errors.phone}
                                    inputMode="numeric"
                                />

                                <Field
                                    label="Email"
                                    required
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={(value) =>
                                        setField("email", value)
                                    }
                                    error={errors.email}
                                    type="email"
                                />

                                <Field
                                    label="State"
                                    required
                                    placeholder="State"
                                    value={form.state}
                                    onChange={(value) =>
                                        setField("state", value)
                                    }
                                    error={errors.state}
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
                                    onChange={(value) =>
                                        setField("experienceYears", value)
                                    }
                                    error={errors.experienceYears}
                                />

                                <TextAreaField
                                    label="Do you have any tickets or accidents for the last 1 year?"
                                    required
                                    placeholder="yes/no..."
                                    value={form.violations}
                                    onChange={(value) =>
                                        setField("violations", value)
                                    }
                                    error={errors.violations}
                                    maxLength={70}
                                />

                                <Field
                                    label="When are you ready to start?"
                                    required
                                    value={form.readyDate}
                                    onChange={(value) =>
                                        setField("readyDate", value)
                                    }
                                    error={errors.readyDate}
                                    type="date"
                                />
                            </div>
                        </Step>
                    </Stepper>
                </div>
            </section>

            {/* Toast Notification */}
            {toast && (
                <div
                    role="alert"
                    className="fixed top-5 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 rounded-2xl border px-4 py-3 shadow-xl sm:px-5"
                    style={{
                        backgroundColor:
                            toast.type === "success"
                                ? "#ecfdf5"
                                : "#fef2f2",
                        borderColor:
                            toast.type === "success"
                                ? "#10b981"
                                : "#ef4444",
                    }}
                >
                    <p
                        className={`text-sm font-semibold ${toast.type === "success"
                            ? "text-emerald-700"
                            : "text-red-700"
                            }`}
                    >
                        {toast.type === "success"
                            ? "Success"
                            : "Error"}
                    </p>

                    <p className="mt-1 text-sm text-slate-700">
                        {toast.message}
                    </p>
                </div>
            )}
        </main>
    );
}

// Reusable input field
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
                {label}{" "}
                {required && (
                    <span className="text-red-500">*</span>
                )}
            </label>

            <input
                type={type}
                inputMode={inputMode}
                placeholder={placeholder}
                value={value}
                onChange={(event) =>
                    onChange(event.target.value)
                }
                className={`w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none transition focus:border-[#205DAC] ${error
                    ? "border-red-400"
                    : "border-slate-200"
                    }`}
            />

            {error && (
                <p className="text-xs text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}

// Reusable textarea field
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
                {label}{" "}
                {required && (
                    <span className="text-red-500">*</span>
                )}
            </label>

            <textarea
                placeholder={placeholder}
                value={value}
                maxLength={maxLength}
                onChange={(event) =>
                    onChange(event.target.value)
                }
                className={`min-h-[110px] w-full resize-none rounded-lg border bg-white px-4 py-3 text-sm outline-none transition focus:border-[#205DAC] ${error
                    ? "border-red-400"
                    : "border-slate-200"
                    }`}
            />

            <div className="mt-1 flex items-center justify-between">
                <p className="min-h-[18px] text-xs text-red-500">
                    {error || ""}
                </p>

                <p
                    className={`text-xs ${value.length >= maxLength
                        ? "font-medium text-red-500"
                        : "text-slate-400"
                        }`}
                >
                    {value.length}/{maxLength}
                </p>
            </div>
        </div>
    );
}
