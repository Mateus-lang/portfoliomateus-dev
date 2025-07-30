import "./globals.css";

import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Portfólio de desenvolvimento web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${comfortaa.className} dark antialiased`}>
        {children}
      </body>
    </html>
  );
}
