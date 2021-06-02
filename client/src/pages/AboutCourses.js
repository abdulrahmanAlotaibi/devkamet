import React from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import Illustration from "components/Illustration";
import ide from "../assets/images/ide.svg";
import girl from "../assets/images/girl.svg";
import machine from "../assets/images/machine.svg";
import head from "../assets/images/head.svg";
import Button from "components/Button";

const Section = ({ children, ...others }) => (
  <section
    {...others}
    className="flex flex-col justify-between items-start xl:flex-row p-6 md:p-14 xl:p-20 
        from-blue-600 w-full to-indigo-700 bg-gradient-to-l pb-32"
  >
    {children}
  </section>
);

const Container = ({ children }) => (
  <div
    className="w-full xl:w-1/2 flex xl:flex-row  items-start 
        xl:items-center justify-center mb-4 xl:mb-10"
  >
    {children}
  </div>
);

function AboutCourses() {
  return (
    <>
      <Header />
      <main>
        <section
          className="flex flex-col-reverse justify-between items-start xl:flex-row p-6 md:p-14 xl:p-20 
        from-blue-600 w-full to-indigo-700 bg-gradient-to-l pb-32"
        >
          <div className="w-full xl:w-1/2">
            <h1 className="text-3xl xl:text-4xl font-bold mb-6 ">
              Understand Machines, not memorizing Algorithims
            </h1>
            <p className="text-lg mb-10">
              Poeple memorize Algorithims and don't Understand Machines. The
              reason that most courses material for software engineers focuses
              on Data Strctures and Algorithims is 'coding interviews'. Data
              Strctures and Algorithims are important to understand how to deal
              with data at scale. But, memorizing tons of of algorithims will
              not make you a good software engineer. any valulabel work in the
              tech industry doesn't require writing algorithims all day. but
              still companies use these types of interviews to see if you
              'grind' to meet there ficitonal requirments and shitty values.
              Here we are trying to understand how machines works. with extremly
              valuble skills in anyfield you'r going to. with topics covered
              here You will be not afraid of building anything!
            </p>
            <Button to="/signup" isDark>
              Join Now
            </Button>
          </div>

          <Container>
            <Illustration src={ide} alt="A girl on a gaint robot" />
          </Container>
        </section>

        <Section id="cs">
          <Container>
            <Illustration src={girl} alt="A girl with a sword" />
          </Container>

          <div className="xl:ml-10 w-full xl:w-1/2">
            <h1 className="text-3xl font-bold mb-4">
              The Essentials of Computer science
            </h1>
            <p className="text-lg mb-10">
              We will gradually build solid foundation in computer science
              ranging from theory to practise. This course will contains the
              most useful topics covered in any computer science bachaleor
              degree without the nanuces of academia or the stuff that will land
              your DREAM job at Google.
            </p>
            <h2 className="text-3xl font-bold">Topics Covered</h2>
            <ul className="flex flex-wrap">
              <li className="font-semibold border-b-4 border-blue-500 mr-6 mt-4">
                Intro to computing
              </li>
              <li className="font-semibold border-b-4 border-blue-500 mr-6 mt-4">
                How computers stores information
              </li>
              <li className="font-semibold border-b-4 border-blue-500 mr-6 mt-4">
                Intro to memory managment
              </li>
              <li className="font-semibold border-b-4 border-blue-500  mt-4">
                How File System works
              </li>
            </ul>
          </div>
        </Section>
        <section
          id="os"
          className="flex flex-col-reverse justify-between items-start xl:flex-row p-6 md:p-14 xl:p-20 
          from-blue-600 w-full to-indigo-700 bg-gradient-to-l pb-32"
        >
          <div className="w-full xl:w-1/2 xl:mr-10">
            <h1 className="text-4xl font-bold mb-4">
              Operating System Essentials
            </h1>
            <p className="text-lg mb-10">
              The most essential topic in computer science. Undertstadning
              operating systems will lead to understadning how any software in
              your machine is using hardware resources, how compilers works, how
              memory talks to CPU, how your keyboard even read by a CPU ! (This
              is so exciting)
            </p>
            <h2 className="text-3xl font-bold">Topics Covered</h2>
            <ul className="flex flex-wrap">
              <li className="font-semibold border-b-4 border-blue-500 mr-6 mt-4">
                Intro to computing
              </li>
              <li className="font-semibold border-b-4 border-blue-500 mr-6 mt-4">
                How computers stores information
              </li>
              <li className="font-semibold border-b-4 border-blue-500 mr-6 mt-4">
                Intro to memory managment
              </li>
              <li className="font-semibold border-b-4 border-blue-500 mr-6 mt-4">
                How File System works
              </li>
            </ul>
          </div>
          <Container>
            <Illustration src={machine} alt="A girl with a sword" />
          </Container>
        </section>
        <Section id="go">
          <Container>
            <Illustration src={head} alt="A girl with a sword" />
          </Container>
          <div className="w-full xl:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Effeciant software with Golang
            </h1>
            <p className="text-lg mb-10">
              Golang is a great language to do low-level programming without so
              much abstraction. Also, Go designed for network applications in
              mind. From servers to system programs you can build anything with
              Go. It's elegant without so much syntactic sugar
            </p>
            <ul className="flex flex-wrap">
              <li className="font-semibold border-b-4 border-blue-500 mr-6 mt-4">
                Intro to computing
              </li>
              <li className="font-semibold border-b-4 border-blue-500 mr-6 mt-4">
                How computers stores information
              </li>
              <li className="font-semibold border-b-4 border-blue-500 mr-6 mt-4">
                Intro to memory managment
              </li>
              <li className="font-semibold border-b-4 border-blue-500 mr-6 mt-4">
                How File System works
              </li>
            </ul>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default AboutCourses;
