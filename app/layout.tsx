import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { createClient } from "@/utils/supabase/client";
import NavigationBar from "@/components/neroshitron/navigation_bar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import RightHandLayoutImage from "@/components/neroshitron/right_hand_layout_image";
import Theme from "@/components/theme";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const supabase = createClient();



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
          <Theme/>
          <RightHandLayoutImage/>
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
