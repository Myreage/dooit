import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dooit",
  description: "Todo List with Elegance",
};

const NavBar = () => {
  const topNavbarClassName = "p-4 space-x-4";
  const buttonClassName =
    "border border-slate-50 hover:bg-zinc-800 text-white font-bold py-2 px-4 rounded";

  return (
    <div className={topNavbarClassName}>
      <Link className={buttonClassName} href={"/todos"}>
        Todos
      </Link>
      <Link className={buttonClassName} href={"/"}>
        Stats
      </Link>
      <Link className={buttonClassName} href={"/"}>
        Whiteboard
      </Link>
    </div>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
