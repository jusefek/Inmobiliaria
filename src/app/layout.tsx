import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Added Serif Font
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
    title: "TESELA PROJECTS | Real Estate Experts",
    description: "Protecting your investment in the Valencian Community. Property Audit, Property Search & Comprehensive Management.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={cn(inter.variable, playfair.variable, "min-h-screen flex flex-col bg-background font-sans antialiased")}>
                <Navbar />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
