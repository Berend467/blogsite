import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Minimal Blog",
  description: "A clean, modern blog inspired by Curate Labs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <body className={inter.className + " min-h-screen flex flex-col"}>
        <Navbar />
        <main className="flex-1 container mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
