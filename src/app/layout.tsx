
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RESULT BD | পরীক্ষার ফলাফল",
  description:
    "বাংলাদেশের শিক্ষার্থীদের জন্য পরীক্ষার ফলাফল অনুসন্ধানের সহজ ও আধুনিক প্ল্যাটফর্ম।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
