"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/shared/page-hero";

const FORMS = [
  {
    title: "Consult Request Form",
    href: "https://www.rheumdocs.com/s/consult_form1-17-2025.pdf",
    image:
      "https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/1764789849152-V5FZVIV9TDHO77NXY44S/consult_form1-17-2025.jpg",
  },
  {
    title: "Registration Packet",
    href: "https://www.rheumdocs.com/s/registration_packet_2026.pdf",
    image:
      "https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/1695144071711-P3D2XKTEG8X171AKKIHY/RHEUMATOLOGY+CONSULTANTS+REGISTRATION+FORM.jpg",
  },
  {
    title: "Patient History Form",
    href: "https://www.rheumdocs.com/s/PatientHX_Form.pdf",
    image:
      "https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/1695143467082-65XIZ7ONO57XPE6ESTJI/PatientHX_Form.jpg",
  },
  {
    title: "Health Assessment Form",
    href: "https://www.rheumdocs.com/s/930b0f7a-3f50-49e5-87b9-18b2aa841843.pdf",
    image:
      "https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/1695143812763-V52EOM8ASQCWY30GLKPH/930b0f7a-3f50-49e5-87b9-18b2aa841843.jpg",
  },
  {
    title: "Records Release Form",
    href: "https://www.rheumdocs.com/s/records_release.pdf",
    image:
      "https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/1764791063080-QBRLPXKLQN9KDBT7DZTC/Records_Release.jpg",
  },
  {
    title: "Current Medications List",
    href: "https://www.rheumdocs.com/s/Current_Medication_List_4-29-2020.pdf",
    image:
      "https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/1695144346741-D0D8GBMSLJG8FFMYOHI1/Current_Medication_List_4-29-2020.jpg",
  },
  {
    title: "HIPAA Privacy Notice",
    href: "https://www.rheumdocs.com/s/HIPPA-Privacy-9-17-2025-ybtm.pdf",
    image:
      "https://images.squarespace-cdn.com/content/v1/6509cd15b3df9c53da70a6a5/1764791666478-7DE9F5HCLRIYH9GKCRWK/HIPPA.jpg",
  },
];

function FormCard({
  title,
  href,
  image,
  delay,
}: {
  title: string;
  href: string;
  image: string;
  delay: number;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className="group flex w-full flex-col overflow-hidden rounded-xl border border-ink/10 bg-bg shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(0,0,0,0.14)]"
    >
      <div className="relative aspect-[10/9] md:aspect-[4/5] w-full overflow-hidden bg-bg-alt p-1.5 md:p-3">
        <div className="relative h-full rounded-md md:rounded-lg w-full overflow-hidden border border-ink/10 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
          <img
            src={image}
            alt={`Preview of ${title}`}
            className="h-full rounded-md md:rounded-lg w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <div className="flex items-center bg-primary justify-between gap-3 border-t border-ink/10 px-3.5 py-2.5 md:px-5 md:py-4">
        <p className="font-body text-[13px] font-semibold leading-snug text-bg md:text-[15px]">
          {title}
        </p>

        <svg
          className="shrink-0 text-primary transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:text-ink-muted"
          width="15"
          height="15"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 12.5L12.5 3.5M12.5 3.5H5.5M12.5 3.5V10.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.a>
  );
}

export default function PatientFormsPage() {
  const firstRow = FORMS.slice(0, 4);
  const lastRow = FORMS.slice(4);

  return (
    <main>
      {/* <PageHero pageName="Patient Forms" image="/exam-room.png" /> */}

      <section className="bg-bg px-4 pt-16 pb-20 lg:px-14 lg:pt-24 lg:pb-28">
        <div className="mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="space-y-5 font-body text-xs leading-relaxed text-neutral-600 md:text-base"
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

        <div className="mx-auto mt-16 md:max-w-6xl md:mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="pb-7 font-display text-xl font-semibold text-ink md:text-2xl"
          >
            Click on the forms below to download a PDF copy.
          </motion.h3>
          {/* Below lg: unchanged, single flowing grid */}
          <div className="grid px-3 md:px-0 grid-cols-1 gap-3 sm:gap-5 md:grid-cols-3 md:gap-6 lg:hidden">
            {FORMS.map((form, i) => (
              <FormCard
                key={form.href}
                title={form.title}
                href={form.href}
                image={form.image}
                delay={i * 0.05}
              />
            ))}
          </div>
          {/* Desktop (lg+): first 4 in a full grid row, last 3 centered below */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-6">
              {firstRow.map((form, i) => (
                <FormCard
                  key={form.href}
                  title={form.title}
                  href={form.href}
                  image={form.image}
                  delay={i * 0.05}
                />
              ))}
            </div>

            <div className="mt-6 flex justify-center gap-6">
              {lastRow.map((form, i) => (
                <div key={form.href} className="w-[calc(25%-1.125rem)]">
                  <FormCard
                    title={form.title}
                    href={form.href}
                    image={form.image}
                    delay={(firstRow.length + i) * 0.05}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
