"use client";
import type { NodeRef, Page } from "@/types";
import Link from "next/link";
import { Button } from "primereact/button";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import { classNames } from "primereact/utils";
import { useContext, useEffect, useRef, useState } from "react";
import { LayoutContext } from "../../layout/context/layoutcontext";

const LandingPage: Page = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);
    const menuRef = useRef<HTMLElement | null>(null);

    const toggleMenuItemClick = () => {
        setIsHidden((prevState) => !prevState);
    };

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
                style={{ top: "-200px", left: "-700px" }}
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
                <div className="flex align-items-center justify-content-between relative lg:static py-6 px-4 mx-0 md:px-7 lg:px-8 lg:py-6 lg:mx-8">
                    <Link href="/" className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="120"
                             zoomAndPan="magnify" viewBox="0 0 768 768" height="120"
                             preserveAspectRatio="xMidYMid meet" version="1.0">
                            <path fill="var(--primary-color)"
                                  d="M 289.734375 453.605469 L 289.734375 513.46875 L 237.886719 483.546875 L 237.886719 423.683594 L 289.734375 453.605469 "
                            />

                            <path fill="var(--primary-color)"
                                  d="M 357.351562 423.683594 L 357.351562 483.546875 L 305.507812 513.46875 L 305.507812 453.605469 L 357.351562 423.683594 "
                            />
                            <path fill="var(--primary-color)"
                                  d="M 349.46875 410.011719 L 297.617188 439.957031 L 245.769531 410.011719 L 297.617188 380.089844 L 349.46875 410.011719 "
                            />
                            <path fill="var(--primary-color)"
                                  d="M 462.601562 453.605469 L 462.601562 513.46875 L 410.757812 483.546875 L 410.757812 423.683594 L 462.601562 453.605469 "
                            />

                            <path fill="var(--primary-color)"
                                  d="M 530.222656 423.683594 L 530.222656 483.546875 L 478.378906 513.46875 L 478.378906 453.605469 L 530.222656 423.683594 "
                            />

                            <path fill="var(--primary-color)"
                                  d="M 522.339844 410.011719 L 470.496094 439.957031 L 418.640625 410.011719 L 470.496094 380.089844 L 522.339844 410.011719 "
                            />
                            <path fill="var(--primary-color)"
                                  d="M 376.164062 304.167969 L 376.164062 364.03125 L 324.320312 334.109375 L 324.320312 274.246094 L 376.164062 304.167969 "
                            />
                            <path fill="var(--primary-color)"
                                  d="M 443.792969 274.246094 L 443.792969 334.109375 L 391.9375 364.03125 L 391.9375 304.167969 L 443.792969 274.246094 "
                            />

                            <path fill="var(--primary-color)"
                                  d="M 435.902344 260.578125 L 384.054688 290.519531 L 332.210938 260.578125 L 384.054688 230.65625 L 435.902344 260.578125 "
                            />

                            <path fill="var(--primary-color)"
                                  d="M 282.308594 365.738281 L 282.308594 339.769531 L 304.085938 327.191406 L 304.085938 304.285156 L 267.429688 325.445312 C 264.355469 327.222656 262.464844 330.5 262.464844 334.042969 L 262.464844 377.183594 L 282.308594 365.738281 "
                            />
                            <path fill="var(--primary-color)"
                                  d="M 464.027344 327.191406 L 485.804688 339.769531 L 485.804688 365.738281 L 505.636719 377.183594 L 505.636719 334.042969 C 505.636719 330.5 503.753906 327.222656 500.683594 325.445312 L 464.027344 304.285156 L 464.027344 327.191406 "
                            />

                            <path fill="var(--primary-color)"
                                  d="M 405.121094 503.839844 L 384.054688 516.003906 L 362.992188 503.839844 L 343.148438 515.292969 L 379.101562 536.042969 C 380.632812 536.933594 382.339844 537.371094 384.054688 537.371094 C 385.773438 537.371094 387.480469 536.933594 389.011719 536.042969 L 424.964844 515.292969 L 405.121094 503.839844 "
                            />
                            <path fill="var(--primary-color)"
                                  d="M 156.558594 372.980469 C 148.699219 346.8125 142.664062 319.523438 138.585938 291.761719 C 157.773438 288.917969 179.941406 282.824219 204.625 273.605469 C 231.488281 263.566406 261.761719 249.726562 294.609375 232.453125 C 333.753906 211.867188 367.667969 191.007812 383.914062 180.730469 C 383.941406 180.746094 383.96875 180.765625 383.996094 180.785156 C 384.027344 180.765625 384.054688 180.746094 384.082031 180.730469 C 400.324219 191.007812 434.242188 211.867188 473.386719 232.453125 C 506.234375 249.726562 536.507812 263.566406 563.371094 273.605469 C 588.050781 282.824219 610.222656 288.917969 629.40625 291.761719 C 625.332031 319.523438 619.296875 346.8125 611.4375 372.980469 C 602.972656 401.175781 592.175781 428.789062 579.34375 455.117188 C 652.980469 375.308594 673.867188 255.859375 673.867188 255.859375 L 651.949219 255.601562 C 617.199219 255.195312 562.167969 235.710938 492.800781 199.25 C 439.09375 171.019531 395.875 142.480469 395.449219 142.191406 L 384.082031 134.664062 L 383.996094 134.722656 L 383.914062 134.664062 L 372.546875 142.191406 C 372.117188 142.480469 328.902344 171.019531 275.191406 199.25 C 205.828125 235.710938 150.796875 255.195312 116.042969 255.601562 L 94.128906 255.859375 C 94.128906 255.859375 115.015625 375.308594 188.652344 455.117188 C 175.820312 428.789062 165.027344 401.175781 156.558594 372.980469 "
                            />

                            <path fill="var(--primary-color)"
                                  d="M 384.082031 677.816406 C 384.054688 677.796875 384.027344 677.777344 383.996094 677.757812 C 383.96875 677.777344 383.941406 677.796875 383.914062 677.816406 C 258.296875 597.320312 151.085938 435.75 130.558594 404.816406 C 137.574219 424.820312 145.546875 444.429688 154.398438 463.4375 C 178.78125 515.792969 210.203125 564.582031 247.789062 608.457031 C 281.253906 647.519531 313.546875 675.40625 334.75 691.925781 C 358.078125 710.105469 373.515625 718.96875 374.167969 719.335938 L 383.914062 724.902344 L 383.996094 724.851562 L 384.082031 724.902344 L 393.828125 719.335938 C 394.476562 718.96875 409.914062 710.105469 433.246094 691.925781 C 454.449219 675.40625 486.742188 647.519531 520.207031 608.457031 C 557.792969 564.582031 589.214844 515.792969 613.597656 463.4375 C 622.449219 444.429688 630.421875 424.820312 637.433594 404.816406 C 616.90625 435.75 509.699219 597.320312 384.082031 677.816406 "
                            />
                        </svg>
                    </Link>

                    <StyleClass
                        nodeRef={menuRef as NodeRef}
                        selector="@next"
                        enterClassName="hidden"
                        leaveToClassName="hidden"
                        hideOnOutsideClick
                    >
                        <i
                            ref={menuRef}
                            className="pi pi-bars text-4xl cursor-pointer block md:hidden text-700"
                        ></i>
                    </StyleClass>

                    <div
                        className={classNames(
                            "align-items-center flex-grow-1 hidden md:flex absolute md:static w-full md:px-0 z-3 shadow-2 md:shadow-none fadein",
                            {hidden: isHidden}
                        )}
                        style={{top: "80px", right: "0%"}}
                    >
                        <ul className="list-none p-3 md:p-0 m-0 ml-auto flex md:align-items-center select-none flex-column md:flex-row cursor-pointer surface-card md:surface-ground">
                            <li>
                                <a
                                    href="#home"
                                    onClick={toggleMenuItemClick}
                                    className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                                >
                                    <span>Accueil</span>
                                    <Ripple/>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#apps"
                                    onClick={toggleMenuItemClick}
                                    className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                                >
                                    <span>Nos Missions</span>
                                    <Ripple/>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#features"
                                    onClick={toggleMenuItemClick}
                                    className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                                >
                                    <span>Devenir membre</span>
                                    <Ripple/>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#pricing"
                                    onClick={toggleMenuItemClick}
                                    className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                                >
                                    <span>Faire un don</span>
                                    <Ripple/>
                                </a>
                            </li>
                            <li>
                                <Button
                                    type="button"
                                    label="Connect Wallet"
                                    className="m-0 mt-3 md:mt-0 md:ml-5"
                                ></Button>
                            </li>
                        </ul>
                    </div>
                </div>
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

                        <div className="flex flex-column lg:flex-row align-items-center justify-content-between mt-8 gap-8">
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

                    <div id="features" className="my-6 py-6 md:my-8 md:py-8">
                        <span className="text-900 block font-bold text-5xl mb-4 text-center">
                            Devenir membre
                        </span>
                        <span className="text-700 block text-xl mb-8 text-center line-height-3">
                            Rejoignez notre communauté en devenant membre et participez à la protection de la blockchain, à l'éducation sur la décentralisation et à la fourniture de services innovants.
                        </span>


                    </div>
                    <div id="pricing" className="my-6 py-6 md:my-8 md:py-8">
                        <div className="text-900 font-bold text-5xl mb-4 text-center">
                            Faire un don
                        </div>
                        <div className="text-700 text-xl mb-8 text-center line-height-3">
                            Choisissez le plan qui vous convient le mieux et faites un don pour soutenir notre mission.
                        </div>

                        <div className="grid grid-nogutter justify-content-center mt-8">
                            <div className="col-12 lg:col-6 xl:col-4">
                                <div className="p-3 h-full">
                                    <div
                                        className="shadow-2 p-6 h-full flex flex-column surface-card"
                                        style={{ borderRadius: "6px" }}
                                    >
                                        <span className="text-900 block font-medium text-xl mb-2 text-center">
                                            Don Unique
                                        </span>
                                        <span className="font-bold block text-2xl text-900 text-center">
                                            $29
                                        </span>

                                        <Button
                                            label="Choose Plan"
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
                                        style={{ borderRadius: "6px" }}
                                    >
                                        <span className="text-900 block font-medium text-xl mb-2 text-center">
                                            Don Mensuel
                                        </span>
                                        <span className="font-bold block text-2xl text-900 text-center">
                                            $49
                                        </span>

                                        <Button
                                            label="Choose Plan"
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
                    <div className="grid justify-content-between my-6 pt-4 md:my-8">
                        <div className="col-12 md:col-2 text-center md:text-left">
                            <a className="cursor-pointer" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="120"
                                     zoomAndPan="magnify" viewBox="0 0 768 768" height="120"
                                     preserveAspectRatio="xMidYMid meet" version="1.0">
                                    <path fill="var(--primary-color)"
                                          d="M 289.734375 453.605469 L 289.734375 513.46875 L 237.886719 483.546875 L 237.886719 423.683594 L 289.734375 453.605469 "
                                    />

                                    <path fill="var(--primary-color)"
                                          d="M 357.351562 423.683594 L 357.351562 483.546875 L 305.507812 513.46875 L 305.507812 453.605469 L 357.351562 423.683594 "
                                    />
                                    <path fill="var(--primary-color)"
                                          d="M 349.46875 410.011719 L 297.617188 439.957031 L 245.769531 410.011719 L 297.617188 380.089844 L 349.46875 410.011719 "
                                    />
                                    <path fill="var(--primary-color)"
                                          d="M 462.601562 453.605469 L 462.601562 513.46875 L 410.757812 483.546875 L 410.757812 423.683594 L 462.601562 453.605469 "
                                    />

                                    <path fill="var(--primary-color)"
                                          d="M 530.222656 423.683594 L 530.222656 483.546875 L 478.378906 513.46875 L 478.378906 453.605469 L 530.222656 423.683594 "
                                    />

                                    <path fill="var(--primary-color)"
                                          d="M 522.339844 410.011719 L 470.496094 439.957031 L 418.640625 410.011719 L 470.496094 380.089844 L 522.339844 410.011719 "
                                    />
                                    <path fill="var(--primary-color)"
                                          d="M 376.164062 304.167969 L 376.164062 364.03125 L 324.320312 334.109375 L 324.320312 274.246094 L 376.164062 304.167969 "
                                    />
                                    <path fill="var(--primary-color)"
                                          d="M 443.792969 274.246094 L 443.792969 334.109375 L 391.9375 364.03125 L 391.9375 304.167969 L 443.792969 274.246094 "
                                    />

                                    <path fill="var(--primary-color)"
                                          d="M 435.902344 260.578125 L 384.054688 290.519531 L 332.210938 260.578125 L 384.054688 230.65625 L 435.902344 260.578125 "
                                    />

                                    <path fill="var(--primary-color)"
                                          d="M 282.308594 365.738281 L 282.308594 339.769531 L 304.085938 327.191406 L 304.085938 304.285156 L 267.429688 325.445312 C 264.355469 327.222656 262.464844 330.5 262.464844 334.042969 L 262.464844 377.183594 L 282.308594 365.738281 "
                                    />
                                    <path fill="var(--primary-color)"
                                          d="M 464.027344 327.191406 L 485.804688 339.769531 L 485.804688 365.738281 L 505.636719 377.183594 L 505.636719 334.042969 C 505.636719 330.5 503.753906 327.222656 500.683594 325.445312 L 464.027344 304.285156 L 464.027344 327.191406 "
                                    />

                                    <path fill="var(--primary-color)"
                                          d="M 405.121094 503.839844 L 384.054688 516.003906 L 362.992188 503.839844 L 343.148438 515.292969 L 379.101562 536.042969 C 380.632812 536.933594 382.339844 537.371094 384.054688 537.371094 C 385.773438 537.371094 387.480469 536.933594 389.011719 536.042969 L 424.964844 515.292969 L 405.121094 503.839844 "
                                    />
                                    <path fill="var(--primary-color)"
                                          d="M 156.558594 372.980469 C 148.699219 346.8125 142.664062 319.523438 138.585938 291.761719 C 157.773438 288.917969 179.941406 282.824219 204.625 273.605469 C 231.488281 263.566406 261.761719 249.726562 294.609375 232.453125 C 333.753906 211.867188 367.667969 191.007812 383.914062 180.730469 C 383.941406 180.746094 383.96875 180.765625 383.996094 180.785156 C 384.027344 180.765625 384.054688 180.746094 384.082031 180.730469 C 400.324219 191.007812 434.242188 211.867188 473.386719 232.453125 C 506.234375 249.726562 536.507812 263.566406 563.371094 273.605469 C 588.050781 282.824219 610.222656 288.917969 629.40625 291.761719 C 625.332031 319.523438 619.296875 346.8125 611.4375 372.980469 C 602.972656 401.175781 592.175781 428.789062 579.34375 455.117188 C 652.980469 375.308594 673.867188 255.859375 673.867188 255.859375 L 651.949219 255.601562 C 617.199219 255.195312 562.167969 235.710938 492.800781 199.25 C 439.09375 171.019531 395.875 142.480469 395.449219 142.191406 L 384.082031 134.664062 L 383.996094 134.722656 L 383.914062 134.664062 L 372.546875 142.191406 C 372.117188 142.480469 328.902344 171.019531 275.191406 199.25 C 205.828125 235.710938 150.796875 255.195312 116.042969 255.601562 L 94.128906 255.859375 C 94.128906 255.859375 115.015625 375.308594 188.652344 455.117188 C 175.820312 428.789062 165.027344 401.175781 156.558594 372.980469 "
                                    />

                                    <path fill="var(--primary-color)"
                                          d="M 384.082031 677.816406 C 384.054688 677.796875 384.027344 677.777344 383.996094 677.757812 C 383.96875 677.777344 383.941406 677.796875 383.914062 677.816406 C 258.296875 597.320312 151.085938 435.75 130.558594 404.816406 C 137.574219 424.820312 145.546875 444.429688 154.398438 463.4375 C 178.78125 515.792969 210.203125 564.582031 247.789062 608.457031 C 281.253906 647.519531 313.546875 675.40625 334.75 691.925781 C 358.078125 710.105469 373.515625 718.96875 374.167969 719.335938 L 383.914062 724.902344 L 383.996094 724.851562 L 384.082031 724.902344 L 393.828125 719.335938 C 394.476562 718.96875 409.914062 710.105469 433.246094 691.925781 C 454.449219 675.40625 486.742188 647.519531 520.207031 608.457031 C 557.792969 564.582031 589.214844 515.792969 613.597656 463.4375 C 622.449219 444.429688 630.421875 424.820312 637.433594 404.816406 C 616.90625 435.75 509.699219 597.320312 384.082031 677.816406 "
                                    />
                                </svg>
                            </a>
                        </div>

                        <div className="col-12 md:col-10 lg:col-7">
                            <div className="grid text-center md:text-left">
                                <div className="col-12 md:col-3">
                                    <h4 className="font-medium text-xl line-height-3 mb-3 text-900">
                                        Company
                                    </h4>
                                    <a className="line-height-3 block cursor-pointer mb-2 text-700">
                                        About Us
                                    </a>
                                    <a className="line-height-3 block cursor-pointer mb-2 text-700">
                                        News
                                    </a>
                                    <a className="line-height-3 block cursor-pointer mb-2 text-700">
                                        Investor Relations
                                    </a>
                                    <a className="line-height-3 block cursor-pointer mb-2 text-700">
                                        Careers
                                    </a>
                                    <a className="line-height-3 block cursor-pointer text-700">
                                        Media Kit
                                    </a>
                                </div>

                                <div className="col-12 md:col-3 mt-4 md:mt-0">
                                    <h4 className="font-medium text-xl line-height-3 mb-3 text-900">
                                        Resources
                                    </h4>
                                    <a className="line-height-3 block cursor-pointer mb-2 text-700">
                                        Get Started
                                    </a>
                                    <a className="line-height-3 block cursor-pointer mb-2 text-700">
                                        Learn
                                    </a>
                                    <a className="line-height-3 block cursor-pointer text-700">
                                        Case Studies
                                    </a>
                                </div>

                                <div className="col-12 md:col-3 mt-4 md:mt-0">
                                    <h4 className="font-medium text-xl line-height-3 mb-3 text-900">
                                        Community
                                    </h4>
                                    <a className="line-height-3 block cursor-pointer mb-2 text-700">
                                        Discord
                                    </a>
                                    <a className="line-height-3 block cursor-pointer mb-2 text-700">
                                        Events
                                    </a>
                                    <a className="line-height-3 block cursor-pointer mb-2 text-700">
                                        FAQ
                                    </a>
                                    <a className="line-height-3 block cursor-pointer text-700">
                                        Blog
                                    </a>
                                </div>

                                <div className="col-12 md:col-3 mt-4 md:mt-0">
                                    <h4 className="font-medium text-xl line-height-3 mb-3 text-900">
                                        Legal
                                    </h4>
                                    <a className="line-height-3 block cursor-pointer mb-2 text-700">
                                        Brand Policy
                                    </a>
                                    <a className="line-height-3 block cursor-pointer mb-2 text-700">
                                        Privacy Policy
                                    </a>
                                    <a className="line-height-3 block cursor-pointer text-700">
                                        Terms of Service
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
