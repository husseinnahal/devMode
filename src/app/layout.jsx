import { Inter,Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/componenets/header/header";
import Footer from "@/componenets/footer/footer"
import Themcontext from "@/context/themcontext";

const inter = Inter({ subsets: ["latin"] });
const merriweather = Merriweather({ subsets: ["latin"],weight:['400']});

export const metadata = {
  title: "DevMode",
  description: "Transform Your Web Vision into Reality",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merriweather.className}>

<Themcontext>
<Header/>
        {children}

<Footer/>

</Themcontext>
        </body>
    </html>
  );
}
