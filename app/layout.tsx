import type { Metadata } from "next";
import localFont from "next/font/local";
import "./assets/styles/globals.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import { Nunito_Sans } from "next/font/google"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
  src: "./assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Generated by Udemig",
};

export const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <div className="flex min-h-screen">
          <Navbar />

          <div className="flex flex-col w-full">
            <Header />

            <main className="flex-1 bg-[#F5F6FA] p-5">
              {children}
            </main>
          </div>
        </div>

        <ToastContainer />
      </body>
    </html>
  );
}
