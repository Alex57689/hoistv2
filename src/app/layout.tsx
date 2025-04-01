import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Hoist Hydraulics",
  description: "Hydraulic Specalists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section>
          <Navbar />
        </section>
        {children}
        <section>
          <Footer />
        </section>
      </body>
    </html>
  );
}
