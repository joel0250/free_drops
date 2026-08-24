import ContactClient from "./contact-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Free Drops",
  description: "Ready to sponsor a drop? Have a question? Talk to us.",
  openGraph: {
    title: "Contact Us | Free Drops",
    description: "Ready to sponsor a drop? Have a question? Talk to us.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
