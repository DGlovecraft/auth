import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Authentication Demo",
  description: "เข้าสู่ระบบด้วยอีเมลและรหัสผ่าน หรือ GitHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
