"use client";

import { useActionState, useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail, CheckCircle2 } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/actions";

const initialState: ContactFormState = { status: "idle", message: "" };

export default function ContactSection() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const [clientError, setClientError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const fullName = (form.elements.namedItem("fullName") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const reason = (form.elements.namedItem("reason") as HTMLSelectElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim();

    if (!fullName || !email || !reason || !message) {
      e.preventDefault();
      setClientError("Please fill in your name, email, reason for inquiry, and message.");
      return;
    }
    setClientError("");
  }

  return (
    <section id="contact" className="bg-bg px-6 py-24 lg:px-10 lg:py-30">
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
              Reach the office directly, no call center in between.
            </motion.h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-ink-muted">
              Send a message below or call during office hours. New patients,
              referrals, and clinical trial questions all come through this same
              front desk.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} strokeWidth={1.75} className="mt-1 shrink-0 text-primary" />
                <div>
                  <p className="font-body text-sm font-semibold text-ink">Office Address</p>
                  <p className="font-body text-sm text-ink-muted">
                    346 Mill Street, Hagerstown, Maryland 21740
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={20} strokeWidth={1.75} className="mt-1 shrink-0 text-primary" />
                <div>
                  <p className="font-body text-sm font-semibold text-ink">Phone &amp; Fax</p>
                  <p className="font-body text-sm text-ink-muted">
                    Phone: 301-791-6680 &nbsp;·&nbsp; Fax: 301-714-1506
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={20} strokeWidth={1.75} className="mt-1 shrink-0 text-primary" />
                <div>
                  <p className="font-body text-sm font-semibold text-ink">Office Hours</p>
                  <p className="font-body text-sm text-ink-muted">
                    Monday to Thursday, 9:00 AM to 4:30 PM
                    <br />
                    Friday, 9:00 AM to 12:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-card bg-bg-alt p-8"
          >
            {state.status === "success" ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 size={44} strokeWidth={1.5} className="text-primary" />
                <p className="mt-4 font-display text-xl font-semibold text-ink">
                  Message sent.
                </p>
                <p className="mt-2 max-w-sm font-body text-sm text-ink-muted">
                  {state.message}
                </p>
              </div>
            ) : (
              <form action={formAction} onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="font-body text-sm font-medium text-ink">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      className="focus-ring mt-1.5 w-full rounded-lg border border-ink/15 bg-bg px-4 py-2.5 font-body text-sm text-ink"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-body text-sm font-medium text-ink">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="focus-ring mt-1.5 w-full rounded-lg border border-ink/15 bg-bg px-4 py-2.5 font-body text-sm text-ink"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="font-body text-sm font-medium text-ink">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="focus-ring mt-1.5 w-full rounded-lg border border-ink/15 bg-bg px-4 py-2.5 font-body text-sm text-ink"
                    />
                  </div>
                  <div>
                    <label htmlFor="reason" className="font-body text-sm font-medium text-ink">
                      Reason for Inquiry
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      defaultValue=""
                      className="focus-ring mt-1.5 w-full rounded-lg border border-ink/15 bg-bg px-4 py-2.5 font-body text-sm text-ink"
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      <option value="general">General Question</option>
                      <option value="appointment">Appointment Request</option>
                      <option value="clinical-trial">Clinical Trial Interest</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="font-body text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="focus-ring mt-1.5 w-full rounded-lg border border-ink/15 bg-bg px-4 py-2.5 font-body text-sm text-ink"
                  />
                </div>

                {(clientError || (state.status === "error" && state.message)) && (
                  <p className="font-body text-sm font-medium text-red-700">
                    {clientError || state.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-body text-sm font-semibold text-bg transition-colors hover:bg-primary-dark disabled:opacity-60 sm:w-auto"
                >
                  <Mail size={16} strokeWidth={2.25} />
                  {isPending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
