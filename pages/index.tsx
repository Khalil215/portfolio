import Head from "next/head";
import { Nunito_Sans } from "@next/font/google";
import Hero from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";


type Props = {
  mInfo: any
  social: any;
  skill: any;
  project: any;
  contact: any;
};

const nunito = Nunito_Sans({ weight: "400", variable: "--my-font" });

export default function Home({mInfo, social, skill, project, contact,
}: Props) {
  // console.log(mInfo,
  //   social,
  //   skill,
  //   project,
  //   contact,);
  return (
    <>
      <Head>
        <title>Khalil-s Portfolio</title>
        <meta name="description" content="My Portfolio Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="relative h-screen snap snap-y overflow-scroll bg-gray-900 scrollbar scrollbar-track-gray-400 scrollbar-thumb-gray-900 "
        style={nunito.style}
      >
        <Header />
        <section id="home" className="snap-center">
          <Hero mInfo={mInfo}/>
        </section>

        <section id="about" className="snap-start">
          <About mInfo={mInfo} social={social}/>
        </section>

        <section id="skills" className="snap-center">
          <Skills skill={skill} />
        </section>

        <section id="projects" className="snap-center">
          <Projects project={project}/>
        </section>

        <section id="contact" className="snap-center">
          <Contact contact={contact}/>
        </section>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const minfoQuery = groq`*[_type == "mInfo"][0]`;
  const socialQuery = groq`*[_type == "social"]`;
  const skillQuery = groq`*[_type == "skill"]|order(_createdAt asc)`;
  const projectQuery = groq`*[_type == "project"]|order(_createdAt asc){
    ..., 
    technologies[]->}`;
  const contactQuery = groq`*[_type == "contact"][0]`;

  const mInfo = await sanityClient.fetch(minfoQuery);
  const social = await sanityClient.fetch(socialQuery);
  const skill = await sanityClient.fetch(skillQuery);
  const project = await sanityClient.fetch(projectQuery);
  const contact = await sanityClient.fetch(contactQuery);

  return {
    props: {
      mInfo,
      social,
      skill,
      project,
      contact,
    },
  };
};
