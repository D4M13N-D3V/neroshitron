import { GeistSans } from "geist/font/sans";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";

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
        <div className="w-full fixed z-30">
          <NavigationBar/>
        </div>
        <main className="min-h-screen flex flex-col items-center bg-gradient-to-r from-neroshi-blue-900 to-neroshi-blue-950 overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
