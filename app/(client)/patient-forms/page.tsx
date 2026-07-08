"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/shared/page-hero";

const FORM_GROUPS = [
  {
    label: "Before Your First Visit",
    forms: [
      {
        title: "Consult Request Form",
        note: "Completed by your referring doctor",
        href: "https://www.rheumdocs.com/s/consult_form1-17-2025.pdf",
        image:
          "https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/1764789849152-V5FZVIV9TDHO77NXY44S/consult_form1-17-2025.jpg",
      },
      {
        title: "Registration Packet",
        note: "Complete once your appointment is confirmed",
        href: "https://www.rheumdocs.com/s/registration_packet_2026.pdf",
        image:
          "https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/1695144071711-P3D2XKTEG8X171AKKIHY/RHEUMATOLOGY+CONSULTANTS+REGISTRATION+FORM.jpg",
      },
      {
        title: "Patient History Form",
        note: "Complete once your appointment is confirmed",
        href: "https://www.rheumdocs.com/s/PatientHX_Form.pdf",
        image:
          "https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/1695143467082-65XIZ7ONO57XPE6ESTJI/PatientHX_Form.jpg",
      },
    ],
  },
  {
    label: "Every Appointment",
    forms: [
      {
        title: "Health Assessment Form",
        note: "Fill out the day before each visit",
        href: "https://www.rheumdocs.com/s/930b0f7a-3f50-49e5-87b9-18b2aa841843.pdf",
        image:
          "https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/1695143812763-V52EOM8ASQCWY30GLKPH/930b0f7a-3f50-49e5-87b9-18b2aa841843.jpg",
      },
    ],
  },
  {
    label: "Additional Resources",
    forms: [
      {
        title: "Records Release Form",
        note: "Authorize release of your medical records",
        href: "https://www.rheumdocs.com/s/records_release.pdf",
        image:
          "https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/1764791063080-QBRLPXKLQN9KDBT7DZTC/Records_Release.jpg",
      },
      {
        title: "Current Medications List",
        note: "Track what you're currently taking",
        href: "https://www.rheumdocs.com/s/Current_Medication_List_4-29-2020.pdf",
        image:
          "https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/1695144346741-D0D8GBMSLJG8FFMYOHI1/Current_Medication_List_4-29-2020.jpg",
      },
      {
        title: "HIPAA Privacy Notice",
        note: "Our patient privacy policy",
        href: "https://www.rheumdocs.com/s/HIPPA-Privacy-9-17-2025-ybtm.pdf",
        image:
          "https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/1764791666478-7DE9F5HCLRIYH9GKCRWK/HIPPA.jpg",
      },
    ],
  },
];

function FormCard({
  title,
  note,
  href,
  image,
  delay,
}: {
  title: string;
  note: string;
  href: string;
  image: string;
  delay: number;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className="group flex flex-col gap-3"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-ink/10 bg-bg-alt">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div>
        <p className="font-body text-sm font-semibold text-ink transition-colors group-hover:text-primary md:text-base">
          {title}
        </p>
        <p className="mt-0.5 font-body text-xs text-ink-muted md:text-sm">
          {note}
        </p>
      </div>
    </motion.a>
  );
}

export default function PatientFormsPage() {
  return (
    <main>
      <PageHero pageName="Patient Forms" image="/exam-room.png" />

      <section className="bg-bg px-4 pt-16 pb-20 lg:px-14 lg:pt-24 lg:pb-28">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="space-y-5 font-body text-sm leading-relaxed text-ink-muted md:text-base"
          >
            <p>
              New patients will require a{" "}
              <a
                href="https://www.rheumdocs.com/s/consult_form1-17-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline underline-offset-2 hover:text-primary"
              >
                Consult Request Form
              </a>
              , to be completed by your referring doctor and sent to our
              practice (if the referring doctor is not your primary care
              provider, please also obtain primary care records). We will call
              you once we receive the consult form and schedule a new patient
              appointment.
            </p>

            <p>
              Once you have a new patient appointment confirmed by our office
              you can fill out the{" "}
              <a
                href="https://www.rheumdocs.com/s/registration_packet_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline underline-offset-2 hover:text-primary"
              >
                Registration Packet
              </a>{" "}
              and{" "}
              <a
                href="https://www.rheumdocs.com/s/PatientHX_Form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline underline-offset-2 hover:text-primary"
              >
                Patient History Form
              </a>{" "}
              prior to your appointment. You may also want to review our privacy
              policies and keep them for your records. If you have any questions
              please call us at{" "}
              <a
                href="tel:+13017916680"
                className="font-medium text-ink underline underline-offset-2 hover:text-primary"
              >
                301-791-6680
              </a>
              .
            </p>

            <p>
              All patients (New and Follow-Up) must fill out a{" "}
              <a
                href="https://www.rheumdocs.com/s/930b0f7a-3f50-49e5-87b9-18b2aa841843.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline underline-offset-2 hover:text-primary"
              >
                Health Assessment
              </a>{" "}
              form prior to your appointment (we usually recommend filling it
              out the day before your appointment).
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-6xl space-y-14 md:mt-20">
          {FORM_GROUPS.map((group) => (
            <div key={group.label}>
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="font-display text-lg font-semibold text-ink md:text-xl"
              >
                {group.label}
              </motion.h3>

              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
                {group.forms.map((form, i) => (
                  <FormCard
                    key={form.href}
                    title={form.title}
                    note={form.note}
                    href={form.href}
                    image={form.image}
                    delay={i * 0.06}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
