import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "./(components)/ThemeRegistry";
import { TermsProvider } from "@/context/TermsContext";


export const metadata: Metadata = {
  title: "mui",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* We need to provide  Theme to everyone */}
      <body>
        <TermsProvider>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </TermsProvider>

      </body>

    </html>
  );
}
