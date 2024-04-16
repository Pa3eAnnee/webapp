"use client";
import React, {useState} from "react";
import {Footer, Header} from "@/app/components";

function AboutUs() {
    const [visibleMember, setVisibleMember] = useState<number | null>(null);

    return (
        <>
            <Header/>
            <div className="card mx-8 px-4 py-8 md:px-6 lg:px-8">
                <div className="flex flex-wrap mb-4">
                    <div className="w-full lg:w-6 pl-0 lg:pr-4">
                        <img
                            src="/demo/images/blocks/about/about-1.png"
                            alt="Image"
                            className="w-full border-round"
                        />
                    </div>
                    <div className="w-full lg:w-6 pr-0 lg:pl-4 mt-3 lg:mt-0">
                        <div className="font-bold text-4xl mb-4 text-900">
                            A propos de nous
                        </div>
                        <p className="line-height-3 mt-0 mb-3 p-0 fontlarge">
                            Notre organisation, l'Organisme de Décentralisation Mondiale (ODM), incarne une vision
                            audacieuse pour l'avenir de l'humanité. Nous sommes des défenseurs fervents de la
                            décentralisation et des technologies blockchain, convaincus de leur potentiel
                            révolutionnaire pour transformer la société.
                        </p>
                        <p className="line-height-3 mt-0 mb-3 p-0 fontlarge">
                            En tant que gardiens de la blockchain, nous assumons la responsabilité de protéger cette
                            technologie innovante qui offre une transparence, une sécurité et une équité sans précédent.
                            En promouvant la décentralisation à travers l'éducation et des événements, nous cherchons à
                            autonomiser les individus, à renforcer la confiance dans les institutions et à stimuler
                            l'innovation à l'échelle mondiale.
                        </p>
                        <p className="line-height-3 my-0 p-0 fontlarge">
                            L'importance de notre travail réside dans notre capacité à façonner activement l'avenir de
                            l'évolution humaine. En encourageant l'adoption et le développement de la blockchain, nous
                            contribuons à créer un monde où le contrôle des données et des transactions est redistribué
                            de manière équitable, où les opportunités sont accessibles à tous, indépendamment des
                            frontières géographiques ou des barrières socio-économiques.
                        </p>
                        <p className="line-height-3 my-0 p-0 fontlarge">
                            En nous engageant dans cette mission, nous ouvrons la voie à une nouvelle ère de progrès,
                            de collaboration et de liberté pour l'ensemble de l'humanité.
                        </p>
                    </div>
                </div>
                <div className="mt-3 md:mt-8">
                    <span className="block text-900 font-bold text-3xl mb-3 text-center">
                        Notre équipe
                    </span>
                    <div className="text-center text-lg line-height-3 mb-6">
                        Faucibus ornare suspendisse sed nisi. Nisl rhoncus
                        mattis rhoncus urna neque viverra justo nec.
                    </div>
                    <div className="grid">
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div
                                className="relative overflow-hidden"
                                onMouseEnter={() => setVisibleMember(0)}
                                onMouseLeave={() => setVisibleMember(-1)}
                            >
                                <img
                                    src="/demo/images/aboutus/neven.webp"
                                    className="w-full block"
                                    alt="Team 1"
                                />
                                {visibleMember === 0 && (
                                    <div
                                        className="absolute top-0 left-0 h-full w-full border-round fadein animation-duration-300 select-none"
                                        style={{
                                            backgroundColor: "rgba(0,0,0,0.7)",
                                        }}
                                    >
                                        <div className="flex flex-column p-5 h-full">
                                            <span className="block font-medium text-white text-xl mb-3">
                                                Mr Neven
                                            </span>
                                            <span className="font-medium text-400">
                                                Blockchain Specialist
                                            </span>
                                            <div className="mt-auto">
                                                <a
                                                    tabIndex={0}
                                                    className="cursor-pointer text-white"
                                                >
                                                    <i className="pi pi-twitter text-600 text-xl mr-3"></i>
                                                </a>
                                                <a
                                                    tabIndex={0}
                                                    className="cursor-pointer text-white"
                                                >
                                                    <i className="pi pi-github text-600 text-xl mr-3"></i>
                                                </a>
                                                <a
                                                    tabIndex={0}
                                                    className="cursor-pointer text-white"
                                                >
                                                    <i className="pi pi-facebook text-600 text-xl"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div
                                className="relative overflow-hidden"
                                onMouseEnter={() => setVisibleMember(1)}
                                onMouseLeave={() => setVisibleMember(-1)}
                            >
                                <img
                                    src="/demo/images/aboutus/vanande.webp"
                                    className="w-full block"
                                    alt="Team 2"
                                />
                                {visibleMember === 1 && (
                                    <div
                                        className="absolute top-0 left-0 h-full w-full border-round fadein animation-duration-300 select-none"
                                        style={{
                                            backgroundColor: "rgba(0,0,0,0.7)",
                                        }}
                                    >
                                        <div className="flex flex-column p-5 h-full">
                                            <span className="block font-medium text-white text-xl mb-3">
                                                Mr Vanande
                                            </span>
                                            <span className="font-medium text-400">
                                                Responsable Education
                                            </span>
                                            <div className="mt-auto">
                                                <a
                                                    tabIndex={0}
                                                    className="cursor-pointer text-white"
                                                >
                                                    <i className="pi pi-twitter text-600 text-xl mr-3"></i>
                                                </a>
                                                <a
                                                    tabIndex={0}
                                                    className="cursor-pointer text-white"
                                                >
                                                    <i className="pi pi-github text-600 text-xl mr-3"></i>
                                                </a>
                                                <a
                                                    tabIndex={0}
                                                    className="cursor-pointer text-white"
                                                >
                                                    <i className="pi pi-facebook text-600 text-xl"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div
                                className="relative overflow-hidden"
                                onMouseEnter={() => setVisibleMember(2)}
                                onMouseLeave={() => setVisibleMember(-1)}
                            >
                                <img
                                    src="/demo/images/aboutus/janin.webp"
                                    className="w-full block"
                                    alt="Team 3"
                                />
                                {visibleMember === 2 && (
                                    <div
                                        className="absolute top-0 left-0 h-full w-full border-round fadein animation-duration-300 select-none"
                                        style={{
                                            backgroundColor: "rgba(0,0,0,0.7)",
                                        }}
                                    >
                                        <div className="flex flex-column p-5 h-full">
                                            <span className="block font-medium text-white text-xl mb-3">
                                                Mr Janin
                                            </span>
                                            <span className="font-medium text-400">
                                                Infrastructure Specialist
                                            </span>
                                            <div className="mt-auto">
                                                <a
                                                    tabIndex={0}
                                                    className="cursor-pointer text-white"
                                                >
                                                    <i className="pi pi-twitter text-600 text-xl mr-3"></i>
                                                </a>
                                                <a
                                                    tabIndex={0}
                                                    className="cursor-pointer text-white"
                                                >
                                                    <i className="pi pi-github text-600 text-xl mr-3"></i>
                                                </a>
                                                <a
                                                    tabIndex={0}
                                                    className="cursor-pointer text-white"
                                                >
                                                    <i className="pi pi-facebook text-600 text-xl"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3 p-3">
                            <div
                                className="relative overflow-hidden"
                                onMouseEnter={() => setVisibleMember(3)}
                                onMouseLeave={() => setVisibleMember(-1)}
                            >
                                <img
                                    src="/demo/images/aboutus/chat.jpg"
                                    className="w-full block"
                                    alt="Team 4"
                                />
                                {visibleMember === 3 && (
                                    <div
                                        className="absolute top-0 left-0 h-full w-full border-round fadein animation-duration-300 select-none"
                                        style={{
                                            backgroundColor: "rgba(0,0,0,0.7)",
                                        }}
                                    >
                                        <div className="flex flex-column p-5 h-full">
                                            <span className="block font-medium text-white text-xl mb-3">
                                                Mr LeChat
                                            </span>
                                            <span className="font-medium text-400">
                                                Relations Clients
                                            </span>
                                            <div className="mt-auto">
                                                <a
                                                    tabIndex={0}
                                                    className="cursor-pointer text-white"
                                                >
                                                    <i className="pi pi-twitter text-600 text-xl mr-3"></i>
                                                </a>
                                                <a
                                                    tabIndex={0}
                                                    className="cursor-pointer text-white"
                                                >
                                                    <i className="pi pi-github text-600 text-xl mr-3"></i>
                                                </a>
                                                <a
                                                    tabIndex={0}
                                                    className="cursor-pointer text-white"
                                                >
                                                    <i className="pi pi-facebook text-600 text-xl"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default AboutUs;
