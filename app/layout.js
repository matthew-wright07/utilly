import Footer from '@/components/Layout/Footer';
import './globals.css';
import Header from '@/components/Layout/Header';
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Utilly",
  description: "Your All In One Tool Kit",
  icons: {
    icon:"/logo.svg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        <Analytics/>
      </body>
    </html>
  );
}
