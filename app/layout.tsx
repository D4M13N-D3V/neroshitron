import { GeistSans } from "geist/font/sans";
import "./globals.css";
import NavigationBar from "@/components/neroshitron/navigation_bar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
      <div className="fixed w-full h-full overflow-hidden z-0 animate-fade-left animate-fade-left animate-once animate-duration-[2000ms] animate-normal animate-fill-forwards">
        <img
          src="gallery_girl.png"
          className="float-right object-cover h-screen w-full  lg:w-5/6 xl:w-3/6  opacity-50 overflow-hidden"
          alt="Background"
        />
      </div>
        <div className="w-full fixed z-30 text-white white">
          <NavigationBar/>
          <SpeedInsights/>
          <Analytics/>
        </div>
        <main className="min-h-screen flex flex-col items-center bg-gradient-to-r from-primary to-secondary overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
