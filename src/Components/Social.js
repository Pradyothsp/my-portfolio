import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
// import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faMedium } from "@fortawesome/free-brands-svg-icons"




export default function Social() {
    return (
        <div class="sm:mx-auto text-4xl  md:flex flex-col justify-center h-screen fixed top-0 left-0 z-10  text-white">
            <div class="border-r-2 border-green-300 h-80 w-7"></div>
            <div>
                <a href="https://www.linkedin.com/in/pradyothsp/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="p-3 text-gray-200 text-opacity-70 hover:text-opacity-100 hover:text-white transition-transform transform hover:-translate-y-3" icon={faLinkedin}></FontAwesomeIcon>
                </a>
            </div>

            <div>
                <a href="https://github.com/Pradyothsp" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="p-3 text-gray-200 text-opacity-70 hover:text-white transition-transform transform hover:-translate-y-3 " icon={faGithub} ></FontAwesomeIcon>
                </a>
            </div>

            <div>
                <a href="mailto:pradyoth.official@outlook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="p-3 text-gray-200 text-opacity-70 hover:text-white transition-transform transform hover:-translate-y-3" icon={faEnvelope} ></FontAwesomeIcon>
                </a>
            </div>

            <div>
                <a href="https://medium.com/@sppradyoth" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="p-3 text-gray-200 text-opacity-70 hover:text-white transition-transform transform hover:-translate-y-3" icon={faMedium} ></FontAwesomeIcon>
                </a>
            </div>

            <div class="border-r-2 border-green-300 h-80 w-7"></div>
        </div>
    )
}