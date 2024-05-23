import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";


import Video from "../components/video";

import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import Quote from "../components/getqoute"

import Portfolio from "../components/portfolio";
import Best from "../components/bestwebsecurity";

const Home = () => {
  return (
    <>
      <Head>
        <title>BlockAudit</title>
        <meta
          name="description"
          content=""
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Quote/>
      <SectionTitle
        pretitle="BlockAudit"
        title=" ">
Portfolio
      </SectionTitle>
      <Portfolio/>
      <Best/>
   
      
    
      
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        
      </SectionTitle>
      <Faq />
      
      <Footer />
     
    </>
  );
}

export default Home;