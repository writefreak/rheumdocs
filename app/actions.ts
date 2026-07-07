"use server";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
}

export interface ContactFormPayload {
  fullName: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const fullName = String(formData.get("fullName") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const reason = String(formData.get("reason") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!fullName || !email || !reason || !message) {
    return {
      status: "error",
      message: "Please fill in your name, email, reason for inquiry, and message.",
    };
  }

  if (!isValidEmail(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  const payload: ContactFormPayload = { fullName, email, phone, reason, message };

  try {
    // TODO: Replace with a real Supabase insert once the project is wired up.
    // Example:
    // const supabase = createServerClient(...);
    // const { error } = await supabase.from("contact_submissions").insert(payload);
    // if (error) throw error;
    console.log("Contact form submission received:", payload);

    return {
      status: "success",
      message: "Thank you. A member of our team will be in touch shortly.",
    };
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending your message. Please call our office directly.",
    };
  }
}
