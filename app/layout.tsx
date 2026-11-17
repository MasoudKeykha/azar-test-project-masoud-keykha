import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteFooter } from "./components/site-shell/site-footer";
import { SiteHeader } from "./components/site-shell/site-header";
import { Providers } from "./theme/providers";

const vazirmatn = localFont({
  src: "./fonts/Vazirmatn-Variable.ttf",
  variable: "--font-vazirmatn",
  weight: "100 900",
  style: "normal",
});

export const metadata: Metadata = {
  title: "شرکت بازرگانی اصولی شجاعی",
  description: "خدمات واردات، صادرات، ترخیص و حمل و نقل",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} h-full antialiased`}
    >
      <body id="top" className="min-h-full flex flex-col">
        <Providers>
          <SiteHeader />
          {children}
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
