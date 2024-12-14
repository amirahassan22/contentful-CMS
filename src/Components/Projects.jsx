import React from "react";
import projects from "../projects";
import useFetchProjects from "./FetchProjects";
import { PacmanLoader } from "react-spinners";

export default function Projects() {
  const {isLoading,projects} =useFetchProjects();
  console.log(projects);
  if (isLoading) {
    return(
      <div className="w-full h-lvh flex justify-center items-center text-red-950">
        <PacmanLoader />
      </div>
    );
  }
  return (
    <section className=" dark:bg-gray-900 antialiased mt-16 pt-7 pb-12 px-5">
      <div className="max-w-screen-xl px-4 mx-auto lg:px-6 ">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects?.map((project, index) => {
            const { title, url, image } = project;
            return (
              <div
                key={index}
                className="project-card space-y-4 bg-white rounded-2xl overflow-hidden hover:rotate-0 md:hover:rotate-3"
              >
                <div className="w-full h-52 ">
                  <img
                    src={image}
                    className="w-full h-full object-cover"
                    alt={title}
                  />
                </div>
                <div className="px-6">
                  <h3 className=" text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-6 mb-4 font-normal text-gray-500 dark:text-gray-400">
                    Flowbite helps you connect with friends, family and
                    communities of people who share your interests.
                  </p>
                  <div className="pt-3 pb-14">
                    <a
                      href="#"
                      title=""
                      className="heroBtn text-white  justify-center  inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:text-white dark:focus:ring-primary-800 mt-3"
                      role="button"
                    >
                      Source Code
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 ml-2 -mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href={url}
                      title=""
                      target="_blank"
                      className="ms-4 text-white bg-primary-700 justify-center hover:bg-primary-800 hover:text-white inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-3"
                      role="button"
                    >
                      Preview
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
