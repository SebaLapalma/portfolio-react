import { CodeIcon } from "@heroicons/react/solid"
import React from "react"
import { projects } from "../data"

export default function Projects () {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="">
                <div className="">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Algunas de las aplicaciones que he construido
                    </h1>
                    <p className="lg:w-2/3 mx-autp leading-relaxed text-base">
                        Todo lo que aqui se presenta fue construido de forma autodidacta.
                        <br />
                        He aprendido de internet y diversas fuentes dentro de la red.
                    </p>
                    <div className="flex flex-wrap -m-4">
                        {
                            projects.map((project) => (
                                <a
                                    href={project.link}
                                    className="sm-1/2 w-100 p-4"
                                    key={project.image}
                                    target="_blank"
                                    rel="noreferrer">
                                    <div className="flex relative">
                                        <img
                                            alt="gallery"
                                            className="absolute inset-0 w-full h-full object-cover object-center"
                                            src={project.image}
                                        />
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                            <h2>
                                                {project.subtitle}
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                                {project.title}
                                            </h1>
                                            <p className="leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}