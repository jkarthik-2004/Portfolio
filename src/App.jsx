import "./App.css";
import Porfile from "./assets/Karthik img.jpg";
import Project1 from "./assets/bricks-estate.png";
import Project2 from "./assets/X-clone-img.png";
import Project3 from "./assets/filmfusion.png";
import Project4 from "./assets/myntra-img.png";
import Project5 from "./assets/ml-p.png";
import Project6 from "./assets/one-lot.png";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { IoDocumentAttachOutline } from "react-icons/io5";


function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="max-w-4xl m-auto relative">
      <header
        className={`${
          scrolling ? "border-b border-gray-900" : ""
        }  fixed left-0 right-0 top-0 z-20`}
        id="home"
      >
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Karthik's Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#aboutme"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">
                Hello, I'm Karthik Jonnalagadda,
              </h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">
                  Web Developer
                </h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400">
                  I am a passionate and enthusiastic web developer, currently in
                  final year of B.Tech in Computer Science and Engineering at Indian
                  Institute of Information Technology Kottayam, India.
                </p>
                <a href="https://github.com/jkarthik-2004" target="_blank">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5 no-underline"
                  >
                    Github
                    <FaGithub className="inline ml-2 mb-1" />
                  </button>
                </a>

                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  <a
                    href="https://www.linkedin.com/in/karthik-j2004/"
                    target="_blank"
                  >
                    LinkedIn
                    <FaLinkedin className="inline ml-2 mb-1" />
                  </a>
                </button>
                 <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                <a
                    href="https://drive.google.com/file/d/19D635HUZ6250p0K58HDqa1k6SZ4RErC_/view?usp=drive_link"
                    target="_blank"
                  >
                    Resume
                    <IoDocumentAttachOutline className="inline ml-2 mb-1" />
                     </a>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="after:bg-[url('/')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('/')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img
                  src={Porfile}
                  className="relative z-10 w-[280px] m-auto sm:w-[600px]"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              {/* Bricks Estate */}


              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">Bricks-Estate</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Real Estate app using MERN stack and Tailwind CSS
                </p>
                <div className="flex mt-20 justify-evenly">
                  <a href="https://bricks-estate.onrender.com/" target="_blank">
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Live preview <CiGlobe className="inline ml-2 mb-1"/>
                      </span>
                    </button>
                  </a>
                  <a
                    href="https://github.com/jkarthik-2004/Real-Estate"
                    target="_blank"
                  >
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Checkout github
                        <FaGithub className="inline ml-2 mb-1" />
                      </span>
                    </button>
                  </a>
                </div>
              </div>



              {/* X Clone */}


              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">X Clone</h3>
                <p className="text-gray-400 text-sm mt-2">
                X(Twitter) Clone using Next.js and Tailwind CSS
                </p>
                <div className="flex mt-20 justify-evenly">
                  <a href="https://x-clone-gilt-six.vercel.app/" target="_blank">
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Live preview <CiGlobe className="inline ml-2 mb-1"/>
                      </span>
                    </button>
                  </a>
                  <a
                    href="https://github.com/jkarthik-2004/X-Clone"
                    target="_blank"
                  >
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Checkout github
                        <FaGithub className="inline ml-2 mb-1" />
                      </span>
                    </button>
                  </a>
                </div>
              </div>


            </div>



            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              {/* Film Fusion */}


              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">Film Fusion</h3>
                <p className="text-gray-400 text-sm mt-2">
                Movie suggestion website using NextJs and TailwindCSS
                </p>
                <div className="flex mt-20 justify-evenly">
                  <a href="https://film-fusion-zeta.vercel.app/" target="_blank">
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Live preview <CiGlobe className="inline ml-2 mb-1"/>
                      </span>
                    </button>
                  </a>
                  <a
                    href="https://github.com/jkarthik-2004/FilmFusion"
                    target="_blank"
                  >
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Checkout github
                        <FaGithub className="inline ml-2 mb-1" />
                      </span>
                    </button>
                  </a>
                </div>
              </div>



              {/* Myntra clone JS */}


              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project4} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">Myntra Clone</h3>
                <p className="text-gray-400 text-sm mt-2">
                A Clone of Myntra using Html/Css, JavaScript
                </p>
                <div className="flex mt-20 justify-evenly">
                 
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Live preview <CiGlobe className="inline ml-2 mb-1"/>
                      </span>
                    </button>
                  
                  <a
                    href="https://github.com/jkarthik-2004/MyntraClone-JS"
                    target="_blank"
                  >
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Checkout github
                        <FaGithub className="inline ml-2 mb-1" />
                      </span>
                    </button>
                  </a>
                </div>
              </div>




 {/* Bricks Estate */}

              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project5} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">Predictive Maintenance</h3>
                <p className="text-gray-400 text-sm mt-2">
                 Predictive Maintenance of Turbo Engine using Machine Learning
                </p>
                <div className="flex mt-20 justify-evenly">
                  <a href="https://predictivemaintenance-team10.streamlit.app/" target="_blank">
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Live preview <CiGlobe className="inline ml-2 mb-1"/>
                      </span>
                    </button>
                  </a>
                  <a
                    href="https://github.com/jkarthik-2004/Predictive_Maintenance"
                    target="_blank"
                  >
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Checkout github
                        <FaGithub className="inline ml-2 mb-1" />
                      </span>
                    </button>
                  </a>
                </div>
              </div>

            
{/* One-Lot */}


              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project6} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">One Lot Hero Page</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Hero Page using NextJS, TailwindCss
                </p>
                <div className="flex mt-20 justify-evenly">
                  <a href="https://one-lot-assignment.vercel.app/" target="_blank">
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Live preview <CiGlobe className="inline ml-2 mb-1"/>
                      </span>
                    </button>
                  </a>
                  <a
                    href="https://github.com/jkarthik-2004/OneLot-Assignment"
                    target="_blank"
                  >
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Checkout github
                        <FaGithub className="inline ml-2 mb-1" />
                      </span>
                    </button>
                  </a>
                </div>
              </div>



              

            </div>



            





            {/* <div className="flex flex-col sm:flex-row gap-10 mt-11"> */}
              {/*Predictive Maintenance  */}

{/* 
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">Predictive Maintenance</h3>
                <p className="text-gray-400 text-sm mt-2">
                Predictive Maintenance of Turbo Engine, Machine Learning
                </p>
                <div className="flex mt-20 justify-evenly">
                  
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Live preview <CiGlobe className="inline ml-2 mb-1"/>
                      </span>
                    </button>
                  
                  <a
                    href="https://github.com/jkarthik-2004/Predictive_Maintenance"
                    target="_blank"
                  >
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Checkout github
                        <FaGithub className="inline ml-2 mb-1" />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
 */}


              {/* Myntra Clone */}


              {/* <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project4} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">Myntra Clone</h3>
                <p className="text-gray-400 text-sm mt-2">
                A Clone of popular E-Commerce Myntra using JavaScript, Html/Css
                </p>
                <div className="flex mt-20 justify-evenly">
                  
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mt-12">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Live preview <CiGlobe className="inline ml-2 mb-1"/>
                      </span>
                    </button>
                
                  <a
                    href="https://github.com/jkarthik-2004/MyntraClone-JS"
                    target="_blank"
                  >
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 mt-12">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Checkout github
                        <FaGithub className="inline ml-2 mb-1" />
                      </span>
                    </button>
                  </a>
                </div>
              </div> */}


            {/* </div> */}

           

         
          </div>
        </section>







        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          {/* <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS, Tailwind CSS</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    JavaScript
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">C & C++</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Python</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React Js</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Next Js</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Node Js</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div> */}



<div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Technologies
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  C/C++
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                JavaScript
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  HTML/CSS
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  TailwindCSS
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                 Python
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                React Js & Next Js
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Node Js
                </p>
              </div>
            </div>
          </div>





        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Firebase
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  MongoDb
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  MySQL
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Github
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Operating System & DBMS
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Data Structures
                </p>
              </div>
            </div>
          </div>
        </section>





        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
                <p>
                  Currently pursuing Bachelor of Technology in Computer Science and Engineering at <b>Indian Institute of Information Technology Kottayam</b>, Kerala,  CGPA: 8.14 (2021-2025)
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2019</h3>
                <p>
                  Studied Class 12 at Tirumala Junior College, Rajahmundry, Andhra Pradesh,    Percentage: 98.3% (2019-2021)
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2018</h3>
                <p>
                Studied Class 10 at Bhashyam Public School, Amalapuram, Andhra Pradesh,    CGPA: 10.0 (2018-2019)
                </p>
              </div>
              
            </div>
          </div>
        </section>
      </main>
      
      {scrolling && (
        <button
          className="fixed block right-8 bottom-0 w-24"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={ArrowDown} />
        </button>
      )}
    </div>
  );
}

export default App;
