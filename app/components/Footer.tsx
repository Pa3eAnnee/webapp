import React from "react";
import {LogoSvg} from "@/app/components/Logo-svg";
import Link from "next/link";

export const Footer = () => {
    return (
        <div className="grid justify-content-between my-6 pt-4 md:my-8">
            <div className="col-12 md:col-2 text-center md:text-left">
                <a className="cursor-pointer" href="#">
                    <LogoSvg/>
                </a>
            </div>

            <div className="col-12 md:col-10 lg:col-7">
                <div className="grid text-center md:text-left">
                    <div className="col-12 md:col-3">
                        <h4 className="font-medium text-xl line-height-3 mb-3 text-900">
                            ODM
                        </h4>
                        <Link href="/pages/aboutus" className="cursor-pointer line-height-3 block mb-2 text-700">
                            À propos
                        </Link>
                        <a className="line-height-3 block cursor-pointer mb-2 text-700">
                            Actualités
                        </a>
                        <a className="line-height-3 block cursor-pointer mb-2 text-700">
                            Relations Investisseurs
                        </a>
                        <a className="line-height-3 block cursor-pointer mb-2 text-700">
                            Postuler
                        </a>
                    </div>

                    <div className="col-12 md:col-3 mt-4 md:mt-0">
                        <h4 className="font-medium text-xl line-height-3 mb-3 text-900">
                            Ressources
                        </h4>
                        <a className="line-height-3 block cursor-pointer mb-2 text-700">
                            Commencer
                        </a>
                        <a className="line-height-3 block cursor-pointer mb-2 text-700">
                            Apprendre
                        </a>
                        <a className="line-height-3 block cursor-pointer text-700">
                            Études de cas
                        </a>
                    </div>

                    <div className="col-12 md:col-3 mt-4 md:mt-0">
                        <h4 className="font-medium text-xl line-height-3 mb-3 text-900">
                            Communauté
                        </h4>
                        <a className="line-height-3 block cursor-pointer mb-2 text-700">
                            Discord
                        </a>
                        <a className="line-height-3 block cursor-pointer mb-2 text-700">
                            Événements
                        </a>
                        <a className="line-height-3 block cursor-pointer mb-2 text-700">
                            FAQ
                        </a>
                    </div>

                    <div className="col-12 md:col-3 mt-4 md:mt-0">
                        <h4 className="font-medium text-xl line-height-3 mb-3 text-900">
                            Légal
                        </h4>
                        <a className="line-height-3 block cursor-pointer text-700">
                            Conditions d'utilisation
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
