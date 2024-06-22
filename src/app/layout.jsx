
import Footer from "@/componenets/footer/footer";
import Header from "@/componenets/header/header";
import Themcontext from "@/context/themcontext";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const merriweather = Merriweather({ subsets: ["latin"],weight:['400']});

export const metadata = {
  title: "DevMode",
  description: "Transform Your Web Vision into Reality",
  keywords: ['devmode', 'devmodee', 'website' , 'Website development','Web design','Web development services',
    'SEO optimization','Web application development','Website performance optimization','Full-stack development','E-commerce development',
    'Responsive web design','Hosting Services','Code Reviews ','Web Development','Programming Tutorials' ],
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
