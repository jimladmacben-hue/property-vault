import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Nunito_Sans } from "next/font/google";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  variable: "--font-nunito-sans",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Property Vault — Find Your Next Property in Nigeria",
  description:
    "Search thousands of verified listings across Lagos, Abuja, Port Harcourt and beyond.",
  keywords: "real estate, Nigeria, property, Lagos, Abuja, buy, rent, land",
  openGraph: {
    title: "Property Vault",
    description: "Nigeria's most trusted property discovery platform.",
    url: "https://propertyvault.ng",
    siteName: "Property Vault",
    images: [{ url: "/images/og-image.jpg" }],
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.variable}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}