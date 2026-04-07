import ContactHero from "@/components/contact/ContactHero";
import ContactHelp from "@/components/contact/ContactHelp";
import ContactFAQ from "@/components/contact/ContactFAQ";

export const metadata = {
  title: "Contact Us | Property Vault",
  description:
    "Get in touch with the Property Vault team. We're here to help with listings, verification, agent support, and partnerships.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactHelp />
      <ContactFAQ />
    </main>
  );
}
