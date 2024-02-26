
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ['latin'], weight: ['100','200']})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html className="" lang="en">
      <body  className={`${inter.className} max-w-[90vw] w-[1080px]  m-auto  dark:bg-neutral-900  transition-colors duration-[.5s] ease-in-out`}>{children}
      
   
      </body>
    </html>
  );
}
