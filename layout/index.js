import Head from "next/head";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Layout({children}) {
 return (
  <div>
    <Head>
    <title> Create Next App - </title>
    <link rel="icon" href="/favicon.ico" />
   </Head>
   <Header />
   {children}
   <Footer />
  </div>
 );
}
