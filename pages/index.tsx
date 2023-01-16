import Head from "next/head";
import { Inter, Nunito_Sans } from "@next/font/google";
import Hero from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";

const nunito = Nunito_Sans({weight: '400', variable: '--my-font'});

export default function Home() {
  return (
    <>
      <Head>
        <title>Khalil's Portfolio</title>
        <meta name="description" content="My Portfolio Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative h-screen snap snap-y overflow-scroll bg-gray-900 scrollbar scrollbar-track-gray-400 scrollbar-thumb-gray-900 " style={nunito.style}>

        <Header/>
        <section id="home" className="snap-center">
          <Hero />
        </section>

        <section id="about" className="snap-start">
          <About />
        </section>

        <section id="skills" className="snap-center">
          <Skills />
        </section>

        <section id="projects" className="snap-center">
          <Projects />
        </section>

        <section id="contact" className="snap-center">
          <Contact />
        </section>
      </div>
    </>
  );
}
