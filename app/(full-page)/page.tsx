"use client";
import type {NodeRef, Page} from "@/types";
import Link from "next/link";
import {Button} from "primereact/button";
import {Ripple} from "primereact/ripple";
import {StyleClass} from "primereact/styleclass";
import {classNames} from "primereact/utils";
import React, {useContext, useEffect, useRef, useState} from "react";
import {LayoutContext} from "../../layout/context/layoutcontext";
import _default from "chart.js/dist/plugins/plugin.tooltip";
import backgroundColor = _default.defaults.backgroundColor;
import {Footer, Header, LogoSvg} from "@/app/components";

const LandingPage: Page = () => {
    const [darkMode, setDarkMode] = useState(false);
    const {layoutConfig} = useContext(LayoutContext);

    useEffect(() => {
        setDarkMode(
            layoutConfig.colorScheme === "dark" ||
            layoutConfig.colorScheme === "dim"
                ? true
                : false
        );
    }, [layoutConfig.colorScheme]);

    return (
        <div className="relative overflow-hidden flex flex-column justify-content-center">
            <div
                className="bg-circle opacity-50"
                style={{top: "-200px", left: "-700px"}}
            ></div>
            <div
                className="bg-circle hidden lg:flex"
                style={{
                    top: "50px",
                    right: "-800px",
                    transform: "rotate(60deg)",
                }}
            ></div>
            <div className="landing-wrapper">
                <Header />
                <div className="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 z-2">
                    <div
                        id="home"
                        className="grid grid-nogutter justify-content-between align-items-center mb-6 py-6 md:mb-8 md:py-8"
                    >
                        <div
                            className="col-12 md:col-4 flex flex-column gap-4 flex-order-1 md:flex-order-0 align-items-center md:align-items-start text-center md:text-left">
                            <span className="block text-900 font-bold text-4xl">
                                Organisme de Décentralisation Mondiale
                            </span>
                            <span className="block text-700 text-lg">
                                Protecteur de la blockchain, promoteur de la décentralisation, éclairant le chemin vers un avenir numérique équitable et libre.
                            </span>
                            <ul className="flex flex-wrap gap-5 list-none p-0">
                                <li className="flex align-items-center">
                                    <div className="p-1 border-circle bg-green-400 inline-block mr-2"></div>
                                    <span className="text-900 font-semibold">
                                        Blockchain
                                    </span>
                                </li>
                                <li className="flex align-items-center">
                                    <div className="p-1 border-circle bg-green-400 inline-block mr-2"></div>
                                    <span className="text-900 font-semibold">
                                        Décentralisation
                                    </span>
                                </li>
                                <li className="flex align-items-center">
                                    <div className="p-1 border-circle bg-green-400 inline-block mr-2"></div>
                                    <span className="text-900 font-semibold">
                                        Education
                                    </span>
                                </li>
                            </ul>
                            <Button
                                type="button"
                                label="Devenir membre"
                                icon="pi pi-arrow-right"
                                iconPos="right"
                                outlined
                                className="w-12rem"
                            ></Button>
                        </div>

                        <div className="col-12 md:col-7 flex-order-0 md:flex-order-1 mb-6 md:mb-0 border-round">
                            <img
                                src={`/demo/images/landing/ODM.webp`}
                                alt=""
                                className="w-full h-full border-round shadow-2 animation-duration-1000 fadeinright"
                            />
                        </div>
                    </div>

                    <div id="apps" className="my-6 md:my-8">
                        <span className="text-900 block font-bold text-5xl mb-4 text-center">
                            Nos Missions
                        </span>
                        <span className="text-700 block text-xl mb-8 text-center line-height-3">
                            Nos missions s'articulent autour de la protection de la blockchain, de la promotion de la décentralisation à travers l'éducation et la tenue d'événements ainsi que des services pour la transition technologique.
                        </span>

                        <div
                            className="flex flex-column lg:flex-row align-items-center justify-content-between mt-8 gap-8">
                            <div className="flex flex-column align-items-center">
                                <img
                                    src={`/demo/images/landing/protection.webp`}
                                    alt="chat"
                                    className="w-full h-full border-round surface-border shadow-2 animation-duration-500 scalein origin-top"
                                />
                                <span className="block text-900 text-lg font-semibold mt-4">
                                    Protection
                                </span>
                            </div>
                            <div className="flex flex-column align-items-center">
                                <img
                                    src={`/demo/images/landing/education.webp`}
                                    alt="chat"
                                    className="w-full h-full border-round surface-border shadow-2 animation-duration-500 scalein origin-top"
                                />
                                <span className="block text-900 text-lg font-semibold mt-4">
                                    Education
                                </span>
                            </div>
                            <div className="flex flex-column align-items-center">
                                <img
                                    src={`/demo/images/landing/service.webp`}
                                    alt="chat"
                                    className="w-full h-full border-round surface-border shadow-2 animation-duration-500 scalein origin-top"
                                />
                                <span className="block text-900 text-lg font-semibold mt-4">
                                    Services
                                </span>
                            </div>
                        </div>
                    </div>

                    <div id="features" className="py-6 md:py-8">
                        <span className="text-900 block font-bold text-5xl mb-4 text-center">
                            Devenir membre
                        </span>
                        <span className="text-700 block text-xl mb-8 text-center line-height-3">
                            Rejoignez notre communauté en devenant membre et participez à la protection de la blockchain, à l'éducation sur la décentralisation et à la fourniture de services innovants.
                        </span>
                        <div id="landing-card" className="card px-4 py-8 md:px-6 lg:px-8">
                            <div className="flex flex-wrap mb-4">
                                <div className="w-full lg:w-6 pl-0 lg:pr-4">
                                    <img
                                        src="/demo/images/landing/nft.webp"
                                        alt="Image"
                                        className="w-full border-round"
                                    />
                                </div>
                                <div className="w-full lg:w-6 pr-0 lg:pl-4 mt-3 lg:mt-0">
                                    <div className="font-bold text-4xl mb-4 text-900">
                                        Notre carte de membre NFT
                                    </div>
                                    <p className="line-height-3 mt-0 mb-3 p-0 fontlarge">
                                        L'ODM, l'Organisme de Décentralisation Mondiale, offre une opportunité unique à
                                        travers son NFT représentant la carte de membre. Ce NFT incarne l'engagement
                                        envers la protection de la blockchain et la promotion de la décentralisation à
                                        travers l'éducation et les événements.
                                    </p>
                                    <p className="line-height-3 mt-0 mb-3 p-0 fontlarge">
                                        Les membres soutiennent notre cause en devenant des gardiens de la blockchain,
                                        contribuant ainsi à préserver sa sécurité et son intégrité. En rejoignant notre
                                        organisation, ils deviennent des acteurs clés dans la diffusion de la
                                        décentralisation, une force qui permet à chacun d'avoir un contrôle sur ses
                                        propres données et transactions.
                                    </p>
                                    <p className="line-height-3 my-0 p-0 fontlarge">
                                        Devenir membre de l'ODM signifie s'engager envers un avenir numérique plus
                                        équitable et sécurisé pour tous. En portant fièrement notre NFT en tant que
                                        carte de membre sur le web, nos membres symbolisent leur soutien à notre
                                        mission. Ce NFT devient une représentation virtuelle de leur adhésion à nos
                                        valeurs et à notre lutte pour un monde numérique plus libre et transparent. En
                                        partageant et affichant cet emblème sur les plateformes en ligne, nos membres
                                        contribuent à sensibiliser davantage aux enjeux de la décentralisation et à
                                        rallier d'autres individus à notre cause.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div id="pricing" className="py-6 md:py-8">
                        <div className="text-900 font-bold text-5xl mb-4 text-center">
                            Faire un don
                        </div>
                        <div className="text-700 text-xl mb-8 text-center line-height-3">
                            Choisissez le plan qui vous convient le mieux et faites un don pour soutenir notre
                            mission.
                        </div>

                        <div className="grid grid-nogutter justify-content-center mt-8">
                            <div className="col-12 lg:col-6 xl:col-4">
                                <div className="p-3 h-full">
                                    <div
                                        className="shadow-2 p-6 h-full flex flex-column surface-card"
                                        style={{borderRadius: "6px"}}
                                    >
                                        <span className="text-900 block font-medium text-xl mb-2 text-center">
                                            Don Unique
                                        </span>
                                        <Button
                                            label="J'aime la blockchain"
                                            className="px-5 w-full mt-6"
                                            outlined
                                            icon="pi pi-arrow-right"
                                            iconPos="right"
                                        ></Button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 lg:col-6 xl:col-4">
                                <div className="p-3 h-full">
                                    <div
                                        className="shadow-2 p-6 h-full flex flex-column surface-card"
                                        style={{borderRadius: "6px"}}
                                    >
                                        <span className="text-900 block font-medium text-xl mb-2 text-center">
                                            Don Mensuel
                                        </span>
                                        <Button
                                            label="Je suis fou de la blockchain"
                                            className="px-5 w-full mt-6"
                                            outlined
                                            icon="pi pi-arrow-right"
                                            iconPos="right"
                                        ></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
