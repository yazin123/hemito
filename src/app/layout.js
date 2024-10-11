import "./globals.css";
import { Poppins,Barlow_Condensed } from 'next/font/google';
import Navbar from "@/components/Navbar";
import SocialBar from "@/components/SocialBar";
import ClientComponent from "./ClientComponent";
import Footer from "@/components/Footer";


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const barlow = Barlow_Condensed({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Hemito",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${barlow.variable}`}
      ><ClientComponent/>
        <Navbar/>
        <SocialBar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
