import Link from "next/link";
import {StyleClass} from "primereact/styleclass";
import {NodeRef} from "@/types";
import {classNames} from "primereact/utils";
import {Ripple} from "primereact/ripple";
import {Button} from "primereact/button";
import React, {useRef, useState} from "react";
import {LogoSvg} from "@/app/components/Logo-svg";

export const Header = () => {
    const menuRef = useRef<HTMLElement | null>(null);
    const [isHidden, setIsHidden] = useState(false);

    const toggleMenuItemClick = () => {
        setIsHidden((prevState) => !prevState);
    };


    return (
        <div
            className="flex align-items-center justify-content-between relative lg:static py-6 px-4 mx-0 md:px-7 lg:px-8 lg:py-6 lg:mx-8">
            <Link href="/" className="cursor-pointer">
                <LogoSvg/>
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
    );
}
