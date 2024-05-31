import React from "react"
import { ArrowRightIcon } from "@heroicons/react/solid";
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-20 py-40 md:flex-row flex-col items-center">

        <div className="lg:flex-grow md:w-3/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-400">
            Hi, I'm
            <br />
            <p className="sm:text-6xl text-6xl text-green-300">
              Pradyoth S. P.
            </p>
            <p className="text-white mt-5 sm:text-2xl text-xl"> Python/Django Developer | Backend & ML Specialist | Computer Vision | AWS, Docker, TensorFlow, PyTorch, REST API, GraphQL, Celery, PostgreSQL </p>
            <br />
            <p className="title-font sm:text-xl text-xl mb-4 font-medium text-gray-400 text-justify">
              <br className="hidden lg:inline-block " />
              I am Python/Django developer with a Master’s in Data Science from UMass Dartmouth. I specialize in web development, big data, data science and cloud technologies. My skills include Python, Django, SQL, API development and tools like Docker, AWS, and Apache Kafka. I've led development teams, optimized APIs, and enhanced deployment processes. Notable projects include a large-scale fish video analysis system and advanced camera analytics.
              <br />
              <br />
              I thrive on solving complex problems and creating scalable solutions. My experience has equipped me to handle diverse challenges, from developing efficient APIs to implementing deep learning algorithms.
              <br />
              <br />
              I’m passionate about continuous learning and innovation. Connect with me on LinkedIn or explore my work on GitHub. Let's innovate together!
            </p>

          </h1>
          <a
            href="./Pradyoth_resume.pdf"
            className="inline-flex items-center bg-gray-700 border-0 py-4 px-4 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0 text-xl"
            download
          >
            Download My Resume
          </a>

        </div>
        <img src="./profile.png" alt="image" className="md:w-90 md:h-90 sm:w-2/5 xs:w-20 xs:h-20 ml-200" />
      </div>
    </section>
  );
}