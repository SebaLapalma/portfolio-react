import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { phone } from "../data"

export default function Contact () {
    const [name, setname] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [message, setMessage] = React.useState("")

    const form = useRef()

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&")
    }

    const sendEmail = (e) => {
        e.preventDefault()

        fetch("/", {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },
            body: encode(
                {
                    "form-name": "contact", name, email, message
                }
            ),
        })

        emailjs.sendForm("service_n4cqwi1", "template_09ofzih", form.current, "1GE-Skocu8fxDV4f3")
            .then((result) => {
                console.log(result.text)
                alert("Mensaje enviado!")
            }, (error) => {
                console.log(error.text)
            })
    }

    return(
        <section id="contact">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <ifram 
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                DIRECCION
                            </h2>
                            <p className="mt-1">
                                Monsenor Rosch y Huarte <br />
                                Concordia, Entre Rios
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                CORREO ELECTRONICO
                            </h2>
                            <a href="e.sebastian.lapalma@gmail.com" className="text-indigo-400 leading-relaxed" key={phone}>
                                e.sebastian.lapalma@gmail.com
                            </a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                NUMERO DE TELEFONO
                            </h2>
                            <a
                                href="https://api.whatsapp.com/send?phone=5493454019821"
                                className="leading-relaxed"
                                target="_blank"
                                rel="noreferrer">
                                +54 9 345 401 9821 (Whatsapp)
                            </a>
                        </div>
                    </div>
                </div>
                <form
                    ref={form}
                    netlify
                    name="contact"
                    onSubmit={sendEmail}
                    className="lg:w-1/3 md:w-1/2 flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
                >
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contratame
                    </h2>
                    <p className="leading-relaxed mb-5">

                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="user_name" className="leading-7 text-sm text-gray-400">
                            Nombre
                        </label>
                        <input 
                            required
                            type="text"
                            id="user_name"
                            name="user_name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setname(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="user_email" className="leading-7 text-sm text-gray-400">
                            Correo electronico
                        </label>
                        <input
                            required
                            type="email"
                            id="user_email"
                            name="user_email"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                            Mensaje
                        </label>
                        <textarea
                            required
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    )
}