import Footer from '@/components/Layout/Footer';
import './globals.css';
import Header from '@/components/Layout/Header';
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Utilly",
  description: "Utilly.io helps you simplify everyday tasks, automate workflows, and increase productivity with powerful, easy-to-use tools for individuals and teams.",
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
