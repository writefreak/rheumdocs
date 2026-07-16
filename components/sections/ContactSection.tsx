"use client";

import { useActionState, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Stethoscope,
  CalendarCheck,
  FlaskConical,
  MessageCircleQuestion,
} from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { Select } from "@/components/ui/select";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = { status: "idle", message: "" };

interface Props {
  className?: string;
}

const REASONS = [
  { value: "general", label: "General Question", icon: MessageCircleQuestion },
  { value: "appointment", label: "Appointment Request", icon: CalendarCheck },
  {
    value: "clinical-trial",
    label: "Clinical Trial Interest",
    icon: FlaskConical,
  },
  { value: "other", label: "Other", icon: Stethoscope },
] as const;

type ReasonValue = (typeof REASONS)[number]["value"];

type FieldErrors = {
  fullName?: string;
  email?: string;
  reason?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection({ className }: Props) {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState<ReasonValue | "">("");
  const [message, setMessage] = useState("");

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const reasonRef = useRef<HTMLDivElement>(null);

  // const [phone, setPhone] = useState("");

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Allow digits, spaces, +, -, (, ) — strip everything else
    const cleaned = e.target.value.replace(/[^\d\s()+-]/g, "");
    setPhone(cleaned);
  }

  const errors: FieldErrors = useMemo(() => {
    const e: FieldErrors = {};
    if (!fullName.trim()) e.fullName = "Please enter your full name.";
    if (!email.trim()) e.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(email.trim()))
      e.email = "That email doesn't look quite right.";
    if (!reason) e.reason = "Please select a reason for your inquiry.";
    if (!message.trim()) e.message = "Let us know how we can help.";
    else if (message.trim().length < 10)
      e.message = "A few more details would help us assist you.";
    return e;
  }, [fullName, email, reason, message]);

  const showError = (field: keyof FieldErrors) =>
    (touched[field] || attemptedSubmit) && errors[field];

  function handleBlur(field: string) {
    setTouched((t) => ({ ...t, [field]: true }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setAttemptedSubmit(true);
    setTouched({ fullName: true, email: true, reason: true, message: true });

    if (Object.keys(errors).length > 0) {
      e.preventDefault();
      if (errors.fullName) fullNameRef.current?.focus();
      else if (errors.email) emailRef.current?.focus();
      else if (errors.reason)
        reasonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      else if (errors.message) messageRef.current?.focus();
    }
  }

  const inputBase =
    "focus-ring mt-1.5 w-full rounded-lg border bg-bg px-4 py-2.5 font-body text-sm text-ink placeholder:text-sm md:placeholder:text-xs placeholder:text-ink-muted/50 transition-colors";
  const inputOk = "border-ink/15";
  const inputBad = "border-red-400 focus:border-red-500";

  return (
    <section
      id="contact"
      className={cn("bg-bg px-4 py-24 lg:px-14 lg:py-28", className)}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl"
            >
              Application For Clinical Trials and General Inquiries
            </motion.h2>
            <p className="mt-4 font-body text-xs md:text-base leading-relaxed text-ink-muted">
              If you feel one, or several of our studies may apply to you or a
              family member, please use the contact form below and we will be in
              touch!
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-card bg-bg-alt p-8"
          >
            {state.status === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle2
                  size={44}
                  strokeWidth={1.5}
                  className="text-primary"
                />
                <p className="mt-4 font-display text-xl font-semibold text-ink">
                  Message sent.
                </p>
                <p className="mt-2 max-w-sm font-body text-sm text-ink-muted">
                  {state.message}
                </p>
              </div>
            ) : (
              <form
                action={formAction}
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="font-body text-sm font-medium text-ink"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Doe"
                      ref={fullNameRef}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      onBlur={() => handleBlur("fullName")}
                      aria-invalid={!!showError("fullName")}
                      aria-describedby={
                        showError("fullName") ? "fullName-error" : undefined
                      }
                      className={`${inputBase} ${showError("fullName") ? inputBad : inputOk}`}
                    />
                    <AnimatePresence>
                      {showError("fullName") && (
                        <motion.p
                          id="fullName-error"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-1.5 flex items-center gap-1.5 font-body text-xs text-red-600"
                        >
                          <AlertCircle
                            size={13}
                            strokeWidth={2}
                            className="shrink-0"
                          />
                          {errors.fullName}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="font-body text-sm font-medium text-ink"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      ref={emailRef}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => handleBlur("email")}
                      aria-invalid={!!showError("email")}
                      aria-describedby={
                        showError("email") ? "email-error" : undefined
                      }
                      className={`${inputBase} ${showError("email") ? inputBad : inputOk}`}
                    />
                    <AnimatePresence>
                      {showError("email") && (
                        <motion.p
                          id="email-error"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-1.5 flex items-center gap-1.5 font-body text-xs text-red-600"
                        >
                          <AlertCircle
                            size={13}
                            strokeWidth={2}
                            className="shrink-0"
                          />
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="font-body text-sm font-medium text-ink"
                  >
                    Phone{" "}
                    <span className="font-normal text-ink-muted">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(301) 555-0123"
                    value={phone}
                    onChange={handlePhoneChange}
                    className={`${inputBase} ${inputOk}`}
                  />
                </div>

                <div ref={reasonRef}>
                  <label className="font-body text-sm font-medium text-ink">
                    Reason for Inquiry
                  </label>
                  <div className="mt-1.5">
                    <Select
                      name="reason"
                      options={REASONS}
                      value={reason}
                      onChange={(v) => setReason(v as ReasonValue)}
                      invalid={!!showError("reason")}
                      errorId="reason-error"
                      onOpen={() => setTouched((t) => ({ ...t, reason: true }))}
                    />
                  </div>
                  <AnimatePresence>
                    {showError("reason") && (
                      <motion.p
                        id="reason-error"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-1.5 flex items-center gap-1.5 font-body text-xs text-red-600"
                      >
                        <AlertCircle
                          size={13}
                          strokeWidth={2}
                          className="shrink-0"
                        />
                        {errors.reason}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-body text-sm font-medium text-ink"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us a bit about what you need, a condition, a study you're interested in, or a question you have."
                    ref={messageRef}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onBlur={() => handleBlur("message")}
                    aria-invalid={!!showError("message")}
                    aria-describedby={
                      showError("message") ? "message-error" : undefined
                    }
                    className={`${inputBase} text-xs resize-none ${showError("message") ? inputBad : inputOk}`}
                  />
                  <AnimatePresence>
                    {showError("message") && (
                      <motion.p
                        id="message-error"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-1.5 flex items-center gap-1.5 font-body text-xs text-red-600"
                      >
                        <AlertCircle
                          size={13}
                          strokeWidth={2}
                          className="shrink-0"
                        />
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {state.status === "error" && state.message && (
                  <p className="flex items-center gap-1.5 font-body text-sm font-medium text-red-700">
                    <AlertCircle
                      size={14}
                      strokeWidth={2}
                      className="shrink-0"
                    />
                    {state.message}
                  </p>
                )}

                <Button variant="primary" icon={null}>
                  {isPending
                    ? "Submitting Application..."
                    : "Submit Application"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
