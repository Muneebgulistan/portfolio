import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muneeb Gulistan — AI Developer & Creator",
  description:
    "Muneeb Gulistan is an AI student, developer, game development learner, and content creator from Abbottabad, Pakistan.",
  metadataBase: new URL("https://portfolio-eta-lemon-13.vercel.app"),
  openGraph: {
    title: "Muneeb Gulistan — AI Developer & Creator",
    description: "Building ideas into digital reality.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
