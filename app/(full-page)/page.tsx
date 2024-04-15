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
                        <svg xmlns="http://www.w3.org/2000/svg" width="400" zoomAndPan="magnify"
                             viewBox="0 0 375 112.499997" height="130" preserveAspectRatio="xMidYMid meet" version="1.0">
                            <g>
                                <path fill="var(--primary-color)"
                                      d="M 61.878906 57.308594 L 61.878906 66.734375 L 53.710938 62.023438 L 53.710938 52.59375 L 61.878906 57.308594 "/>
                            </g>
                            <path fill="var(--primary-color)"
                                  d="M 72.527344 52.59375 L 72.527344 62.023438 L 64.363281 66.734375 L 64.363281 57.308594 L 72.527344 52.59375 "/>
                            <path fill="var(--primary-color)"
                                  d="M 71.285156 50.441406 L 63.121094 55.15625 L 54.953125 50.441406 L 63.121094 45.726562 L 71.285156 50.441406 "/>
                            <path fill="var(--primary-color)"
                                  d="M 89.105469 57.308594 L 89.105469 66.734375 L 80.941406 62.023438 L 80.941406 52.59375 L 89.105469 57.308594 "/>
                            <g>
                                <path fill="var(--primary-color)"
                                      d="M 99.757812 52.59375 L 99.757812 62.023438 L 91.589844 66.734375 L 91.589844 57.308594 L 99.757812 52.59375 "/>
                            </g>
                            <path fill="var(--primary-color)"
                                  d="M 98.515625 50.441406 L 90.347656 55.15625 L 82.183594 50.441406 L 90.347656 45.726562 L 98.515625 50.441406 "/>
                            <path fill="var(--primary-color)"
                                  d="M 75.492188 33.769531 L 75.492188 43.199219 L 67.324219 38.484375 L 67.324219 29.058594 L 75.492188 33.769531 "/>
                            <path fill="var(--primary-color)"
                                  d="M 86.144531 29.058594 L 86.144531 38.484375 L 77.976562 43.199219 L 77.976562 33.769531 L 86.144531 29.058594 "/>
                            <g>
                                <path fill="var(--primary-color)"
                                      d="M 84.902344 26.90625 L 76.734375 31.621094 L 68.570312 26.90625 L 76.734375 22.191406 L 84.902344 26.90625 "/>
                            </g>
                            <path fill="var(--primary-color)"
                                  d="M 60.710938 43.46875 L 60.710938 39.378906 L 64.140625 37.394531 L 64.140625 33.789062 L 58.367188 37.121094 C 57.882812 37.402344 57.582031 37.917969 57.582031 38.476562 L 57.582031 45.269531 L 60.710938 43.46875 "/>
                            <path fill="var(--primary-color)"
                                  d="M 89.332031 37.394531 L 92.761719 39.378906 L 92.761719 43.46875 L 95.882812 45.269531 L 95.882812 38.476562 C 95.882812 37.917969 95.585938 37.402344 95.105469 37.121094 L 89.332031 33.789062 L 89.332031 37.394531 "/>
                            <g>
                                <path fill="var(--primary-color)"
                                      d="M 80.050781 65.21875 L 76.734375 67.136719 L 73.417969 65.21875 L 70.292969 67.023438 L 75.953125 70.292969 C 76.195312 70.429688 76.464844 70.5 76.734375 70.5 C 77.003906 70.5 77.273438 70.429688 77.515625 70.292969 L 83.179688 67.023438 L 80.050781 65.21875 "/>
                            </g>
                            <g>
                                <path fill="var(--primary-color)"
                                      d="M 40.902344 44.609375 C 39.664062 40.488281 38.714844 36.1875 38.074219 31.816406 C 41.09375 31.367188 44.585938 30.410156 48.472656 28.957031 C 52.703125 27.375 57.472656 25.195312 62.648438 22.476562 C 68.8125 19.234375 74.152344 15.945312 76.710938 14.328125 C 76.714844 14.332031 76.722656 14.332031 76.726562 14.335938 C 76.730469 14.332031 76.734375 14.332031 76.738281 14.328125 C 79.296875 15.945312 84.640625 19.234375 90.804688 22.476562 C 95.976562 25.195312 100.746094 27.375 104.976562 28.957031 C 108.863281 30.410156 112.355469 31.367188 115.378906 31.816406 C 114.738281 36.1875 113.785156 40.488281 112.546875 44.609375 C 111.214844 49.050781 109.515625 53.398438 107.492188 57.546875 C 119.089844 44.976562 122.378906 26.160156 122.378906 26.160156 L 118.929688 26.121094 C 113.457031 26.058594 104.789062 22.988281 93.863281 17.246094 C 85.402344 12.800781 78.597656 8.304688 78.527344 8.257812 L 76.738281 7.074219 L 76.726562 7.082031 L 76.710938 7.074219 L 74.921875 8.257812 C 74.855469 8.304688 68.046875 12.800781 59.589844 17.246094 C 48.664062 22.988281 39.996094 26.058594 34.523438 26.121094 L 31.070312 26.160156 C 31.070312 26.160156 34.359375 44.976562 45.957031 57.546875 C 43.9375 53.398438 42.238281 49.050781 40.902344 44.609375 "/>
                            </g>
                            <path fill="var(--primary-color)"
                                  d="M 76.738281 92.621094 C 76.734375 92.617188 76.730469 92.613281 76.726562 92.613281 C 76.722656 92.613281 76.714844 92.617188 76.710938 92.621094 C 56.925781 79.941406 40.042969 54.496094 36.808594 49.621094 C 37.914062 52.773438 39.167969 55.863281 40.5625 58.855469 C 44.402344 67.101562 49.351562 74.785156 55.273438 81.695312 C 60.542969 87.847656 65.628906 92.242188 68.96875 94.84375 C 72.644531 97.707031 75.074219 99.101562 75.175781 99.160156 L 76.710938 100.039062 L 76.726562 100.027344 L 76.738281 100.039062 L 78.273438 99.160156 C 78.375 99.101562 80.808594 97.707031 84.480469 94.84375 C 87.820312 92.242188 92.90625 87.847656 98.179688 81.695312 C 104.097656 74.785156 109.046875 67.101562 112.886719 58.855469 C 114.28125 55.863281 115.539062 52.773438 116.640625 49.621094 C 113.410156 54.496094 96.523438 79.941406 76.738281 92.621094 "/>
                            <g fill="var(--primary-color)">
                                <g transform="translate(146.560315, 47.812039)">
                                    <g>
                                        <path
                                            d="M 5.082031 0.121094 C 10.980469 0.121094 10.980469 -8.714844 5.082031 -8.714844 C -0.816406 -8.714844 -0.816406 0.121094 5.082031 0.121094 Z M 5.082031 -1.65625 C 1.65625 -1.65625 1.65625 -6.953125 5.082031 -6.953125 C 8.511719 -6.953125 8.511719 -1.65625 5.082031 -1.65625 Z M 5.082031 -1.65625 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(156.712879, 47.812039)">
                                    <g>
                                        <path
                                            d="M 5.226562 0 L 7.167969 0 L 5.179688 -3.535156 C 7.695312 -4.269531 7.398438 -8.570312 4.339844 -8.570312 L 0.960938 -8.570312 L 0.960938 0 L 2.671875 0 L 2.671875 -3.273438 L 3.5 -3.273438 Z M 2.671875 -4.9375 L 2.671875 -6.859375 L 4.183594 -6.859375 C 5.347656 -6.859375 5.347656 -4.9375 4.183594 -4.9375 Z M 2.671875 -4.9375 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(164.060603, 47.812039)">
                                    <g>
                                        <path
                                            d="M 7.144531 -0.527344 L 7.144531 -4.292969 L 5.40625 -4.292969 L 5.40625 -1.714844 C 5.25 -1.691406 5.082031 -1.667969 4.925781 -1.667969 C 1.617188 -1.667969 1.460938 -6.785156 4.925781 -6.90625 C 5.839844 -6.929688 6.390625 -6.738281 6.726562 -6.59375 L 6.929688 -8.332031 C 6.773438 -8.378906 5.945312 -8.679688 4.925781 -8.644531 C -1.019531 -8.429688 -0.730469 0.046875 4.925781 0.046875 C 5.742188 0.046875 6.484375 -0.15625 7.144531 -0.527344 Z M 7.144531 -0.527344 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(172.127516, 47.812039)">
                                    <g>
                                        <path
                                            d="M 0.191406 0 L 2.132812 0 L 2.46875 -0.921875 L 5.3125 -0.921875 L 5.660156 0 L 7.589844 0 L 3.980469 -8.882812 L 3.800781 -8.882812 Z M 3.09375 -2.53125 L 3.894531 -4.757812 L 4.675781 -2.53125 Z M 3.09375 -2.53125 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(179.954697, 47.812039)">
                                    <g>
                                        <path
                                            d="M 2.671875 -4.664062 L 7.011719 0.179688 L 7.46875 0.179688 L 7.46875 -8.558594 L 5.742188 -8.558594 L 5.742188 -3.714844 L 1.414062 -8.75 L 0.960938 -8.75 L 0.960938 0 L 2.671875 0 Z M 2.671875 -4.664062 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(188.39319, 47.812039)">
                                    <g>
                                        <path d="M 2.671875 0 L 2.671875 -8.570312 L 0.960938 -8.570312 L 0.960938 0 Z M 2.671875 0 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(192.037084, 47.812039)">
                                    <g>
                                        <path
                                            d="M 0.5625 -0.550781 C 1.726562 0.046875 2.792969 0.109375 3.273438 0.0703125 C 4.878906 -0.0117188 5.863281 -1.101562 5.863281 -2.53125 C 5.863281 -3.894531 4.710938 -4.664062 3.378906 -5.15625 C 2.890625 -5.324219 2.46875 -5.539062 2.421875 -6.019531 C 2.386719 -6.496094 2.660156 -6.941406 3.273438 -6.976562 C 3.535156 -6.988281 4.078125 -7 5.023438 -6.617188 L 5.238281 -8.273438 C 4.136719 -8.65625 3.546875 -8.65625 3.105469 -8.632812 C 1.679688 -8.558594 0.683594 -7.457031 0.683594 -6.019531 C 0.683594 -4.578125 1.882812 -3.894531 3.226562 -3.40625 C 3.703125 -3.238281 4.078125 -3.019531 4.113281 -2.53125 C 4.160156 -2.0625 3.730469 -1.703125 3.226562 -1.667969 C 2.828125 -1.628906 1.761719 -1.65625 0.777344 -2.351562 Z M 0.5625 -0.550781 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(198.37794, 47.812039)">
                                    <g>
                                        <path
                                            d="M 4.890625 -4.9375 L 1.511719 -8.703125 L 0.960938 -8.703125 L 0.960938 0 L 2.699219 0 L 2.699219 -4.785156 L 4.890625 -2.480469 L 7.085938 -4.785156 L 7.074219 0 L 8.8125 0 L 8.8125 -8.703125 L 8.273438 -8.703125 Z M 4.890625 -4.9375 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(208.15892, 47.812039)">
                                    <g>
                                        <path
                                            d="M 5.394531 0 L 5.394531 -1.714844 L 2.671875 -1.714844 L 2.671875 -3.429688 L 4.925781 -3.429688 L 4.925781 -5.144531 L 2.671875 -5.144531 L 2.671875 -6.859375 L 5.25 -6.859375 L 5.25 -8.570312 L 0.960938 -8.570312 L 0.960938 0 Z M 5.394531 0 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(214.200113, 47.812039)">
                                    <g/>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(217.60428, 47.812039)">
                                    <g>
                                        <path
                                            d="M 3.511719 -8.570312 L 0.960938 -8.570312 L 0.960938 0 L 3.511719 0 C 9.21875 0 9.21875 -8.570312 3.511719 -8.570312 Z M 3.511719 -6.859375 C 6.84375 -6.859375 6.84375 -1.714844 3.511719 -1.714844 L 2.671875 -1.714844 L 2.671875 -6.859375 Z M 3.511719 -6.859375 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(226.042773, 47.812039)">
                                    <g>
                                        <path
                                            d="M 5.394531 0 L 5.394531 -1.714844 L 2.671875 -1.714844 L 2.671875 -3.429688 L 4.925781 -3.429688 L 4.925781 -5.144531 L 2.671875 -5.144531 L 2.671875 -6.859375 L 5.25 -6.859375 L 5.25 -8.570312 L 0.960938 -8.570312 L 0.960938 0 Z M 5.394531 0 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(232.083966, 47.812039)">
                                    <g/>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(235.488128, 47.812039)">
                                    <g>
                                        <path
                                            d="M 3.511719 -8.570312 L 0.960938 -8.570312 L 0.960938 0 L 3.511719 0 C 9.21875 0 9.21875 -8.570312 3.511719 -8.570312 Z M 3.511719 -6.859375 C 6.84375 -6.859375 6.84375 -1.714844 3.511719 -1.714844 L 2.671875 -1.714844 L 2.671875 -6.859375 Z M 3.511719 -6.859375 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(243.926617, 47.812039)">
                                    <g>
                                        <path
                                            d="M 4.953125 -10.539062 L 2.839844 -10.539062 L 2.253906 -9.160156 L 3.800781 -9.160156 Z M 5.394531 0 L 5.394531 -1.714844 L 2.671875 -1.714844 L 2.671875 -3.429688 L 4.925781 -3.429688 L 4.925781 -5.144531 L 2.671875 -5.144531 L 2.671875 -6.859375 L 5.25 -6.859375 L 5.25 -8.570312 L 0.960938 -8.570312 L 0.960938 0 Z M 5.394531 0 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(249.96781, 47.812039)">
                                    <g>
                                        <path
                                            d="M 6.414062 -6.582031 L 6.617188 -8.34375 C 6.101562 -8.570312 5.527344 -8.679688 4.925781 -8.679688 C -0.875 -8.679688 -0.886719 0.0234375 4.925781 0.0234375 C 5.527344 0.0234375 6.28125 -0.121094 6.808594 -0.335938 L 6.582031 -2.109375 C 6.257812 -1.941406 5.671875 -1.726562 4.925781 -1.726562 C 1.535156 -1.726562 1.535156 -6.953125 4.925781 -6.953125 C 5.671875 -6.953125 6.089844 -6.75 6.414062 -6.582031 Z M 6.414062 -6.582031 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(257.183675, 47.812039)">
                                    <g>
                                        <path
                                            d="M 5.394531 0 L 5.394531 -1.714844 L 2.671875 -1.714844 L 2.671875 -3.429688 L 4.925781 -3.429688 L 4.925781 -5.144531 L 2.671875 -5.144531 L 2.671875 -6.859375 L 5.25 -6.859375 L 5.25 -8.570312 L 0.960938 -8.570312 L 0.960938 0 Z M 5.394531 0 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(263.224868, 47.812039)">
                                    <g>
                                        <path
                                            d="M 2.671875 -4.664062 L 7.011719 0.179688 L 7.46875 0.179688 L 7.46875 -8.558594 L 5.742188 -8.558594 L 5.742188 -3.714844 L 1.414062 -8.75 L 0.960938 -8.75 L 0.960938 0 L 2.671875 0 Z M 2.671875 -4.664062 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(271.663366, 47.812039)">
                                    <g>
                                        <path
                                            d="M 4.089844 0 L 4.089844 -6.859375 L 6.222656 -6.859375 L 6.222656 -8.558594 L 0.238281 -8.558594 L 0.238281 -6.859375 L 2.375 -6.859375 L 2.375 0 Z M 4.089844 0 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(278.219974, 47.812039)">
                                    <g>
                                        <path
                                            d="M 5.226562 0 L 7.167969 0 L 5.179688 -3.535156 C 7.695312 -4.269531 7.398438 -8.570312 4.339844 -8.570312 L 0.960938 -8.570312 L 0.960938 0 L 2.671875 0 L 2.671875 -3.273438 L 3.5 -3.273438 Z M 2.671875 -4.9375 L 2.671875 -6.859375 L 4.183594 -6.859375 C 5.347656 -6.859375 5.347656 -4.9375 4.183594 -4.9375 Z M 2.671875 -4.9375 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(285.567702, 47.812039)">
                                    <g>
                                        <path
                                            d="M 0.191406 0 L 2.132812 0 L 2.46875 -0.921875 L 5.3125 -0.921875 L 5.660156 0 L 7.589844 0 L 3.980469 -8.882812 L 3.800781 -8.882812 Z M 3.09375 -2.53125 L 3.894531 -4.757812 L 4.675781 -2.53125 Z M 3.09375 -2.53125 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(293.394883, 47.812039)">
                                    <g>
                                        <path
                                            d="M 0.960938 -8.570312 L 0.960938 0 L 5.394531 0 L 5.394531 -1.714844 L 2.671875 -1.714844 L 2.671875 -8.570312 Z M 0.960938 -8.570312 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(299.304233, 47.812039)">
                                    <g>
                                        <path d="M 2.671875 0 L 2.671875 -8.570312 L 0.960938 -8.570312 L 0.960938 0 Z M 2.671875 0 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(302.948131, 47.812039)">
                                    <g>
                                        <path
                                            d="M 0.5625 -0.550781 C 1.726562 0.046875 2.792969 0.109375 3.273438 0.0703125 C 4.878906 -0.0117188 5.863281 -1.101562 5.863281 -2.53125 C 5.863281 -3.894531 4.710938 -4.664062 3.378906 -5.15625 C 2.890625 -5.324219 2.46875 -5.539062 2.421875 -6.019531 C 2.386719 -6.496094 2.660156 -6.941406 3.273438 -6.976562 C 3.535156 -6.988281 4.078125 -7 5.023438 -6.617188 L 5.238281 -8.273438 C 4.136719 -8.65625 3.546875 -8.65625 3.105469 -8.632812 C 1.679688 -8.558594 0.683594 -7.457031 0.683594 -6.019531 C 0.683594 -4.578125 1.882812 -3.894531 3.226562 -3.40625 C 3.703125 -3.238281 4.078125 -3.019531 4.113281 -2.53125 C 4.160156 -2.0625 3.730469 -1.703125 3.226562 -1.667969 C 2.828125 -1.628906 1.761719 -1.65625 0.777344 -2.351562 Z M 0.5625 -0.550781 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(309.288992, 47.812039)">
                                    <g>
                                        <path
                                            d="M 0.191406 0 L 2.132812 0 L 2.46875 -0.921875 L 5.3125 -0.921875 L 5.660156 0 L 7.589844 0 L 3.980469 -8.882812 L 3.800781 -8.882812 Z M 3.09375 -2.53125 L 3.894531 -4.757812 L 4.675781 -2.53125 Z M 3.09375 -2.53125 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(317.116174, 47.812039)">
                                    <g>
                                        <path
                                            d="M 4.089844 0 L 4.089844 -6.859375 L 6.222656 -6.859375 L 6.222656 -8.558594 L 0.238281 -8.558594 L 0.238281 -6.859375 L 2.375 -6.859375 L 2.375 0 Z M 4.089844 0 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(323.672781, 47.812039)">
                                    <g>
                                        <path d="M 2.671875 0 L 2.671875 -8.570312 L 0.960938 -8.570312 L 0.960938 0 Z M 2.671875 0 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(327.31668, 47.812039)">
                                    <g>
                                        <path
                                            d="M 5.082031 0.121094 C 10.980469 0.121094 10.980469 -8.714844 5.082031 -8.714844 C -0.816406 -8.714844 -0.816406 0.121094 5.082031 0.121094 Z M 5.082031 -1.65625 C 1.65625 -1.65625 1.65625 -6.953125 5.082031 -6.953125 C 8.511719 -6.953125 8.511719 -1.65625 5.082031 -1.65625 Z M 5.082031 -1.65625 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(337.469244, 47.812039)">
                                    <g>
                                        <path
                                            d="M 2.671875 -4.664062 L 7.011719 0.179688 L 7.46875 0.179688 L 7.46875 -8.558594 L 5.742188 -8.558594 L 5.742188 -3.714844 L 1.414062 -8.75 L 0.960938 -8.75 L 0.960938 0 L 2.671875 0 Z M 2.671875 -4.664062 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(345.910901, 47.812039)">
                                    <g/>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(146.540888, 64.597003)">
                                    <g>
                                        <path
                                            d="M 4.890625 -4.9375 L 1.511719 -8.703125 L 0.960938 -8.703125 L 0.960938 0 L 2.699219 0 L 2.699219 -4.785156 L 4.890625 -2.480469 L 7.085938 -4.785156 L 7.074219 0 L 8.8125 0 L 8.8125 -8.703125 L 8.273438 -8.703125 Z M 4.890625 -4.9375 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(156.321867, 64.597003)">
                                    <g>
                                        <path
                                            d="M 5.082031 0.121094 C 10.980469 0.121094 10.980469 -8.714844 5.082031 -8.714844 C -0.816406 -8.714844 -0.816406 0.121094 5.082031 0.121094 Z M 5.082031 -1.65625 C 1.65625 -1.65625 1.65625 -6.953125 5.082031 -6.953125 C 8.511719 -6.953125 8.511719 -1.65625 5.082031 -1.65625 Z M 5.082031 -1.65625 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(166.474432, 64.597003)">
                                    <g>
                                        <path
                                            d="M 2.671875 -4.664062 L 7.011719 0.179688 L 7.46875 0.179688 L 7.46875 -8.558594 L 5.742188 -8.558594 L 5.742188 -3.714844 L 1.414062 -8.75 L 0.960938 -8.75 L 0.960938 0 L 2.671875 0 Z M 2.671875 -4.664062 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(174.912925, 64.597003)">
                                    <g>
                                        <path
                                            d="M 3.511719 -8.570312 L 0.960938 -8.570312 L 0.960938 0 L 3.511719 0 C 9.21875 0 9.21875 -8.570312 3.511719 -8.570312 Z M 3.511719 -6.859375 C 6.84375 -6.859375 6.84375 -1.714844 3.511719 -1.714844 L 2.671875 -1.714844 L 2.671875 -6.859375 Z M 3.511719 -6.859375 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(183.351418, 64.597003)">
                                    <g>
                                        <path d="M 2.671875 0 L 2.671875 -8.570312 L 0.960938 -8.570312 L 0.960938 0 Z M 2.671875 0 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(186.995312, 64.597003)">
                                    <g>
                                        <path
                                            d="M 0.191406 0 L 2.132812 0 L 2.46875 -0.921875 L 5.3125 -0.921875 L 5.660156 0 L 7.589844 0 L 3.980469 -8.882812 L 3.800781 -8.882812 Z M 3.09375 -2.53125 L 3.894531 -4.757812 L 4.675781 -2.53125 Z M 3.09375 -2.53125 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(194.822493, 64.597003)">
                                    <g>
                                        <path
                                            d="M 0.960938 -8.570312 L 0.960938 0 L 5.394531 0 L 5.394531 -1.714844 L 2.671875 -1.714844 L 2.671875 -8.570312 Z M 0.960938 -8.570312 "/>
                                    </g>
                                </g>
                            </g>
                            <g fill="var(--primary-color)">
                                <g transform="translate(200.731837, 64.597003)">
                                    <g>
                                        <path
                                            d="M 5.394531 0 L 5.394531 -1.714844 L 2.671875 -1.714844 L 2.671875 -3.429688 L 4.925781 -3.429688 L 4.925781 -5.144531 L 2.671875 -5.144531 L 2.671875 -6.859375 L 5.25 -6.859375 L 5.25 -8.570312 L 0.960938 -8.570312 L 0.960938 0 Z M 5.394531 0 "/>
                                    </g>
                                </g>
                            </g>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="400" zoomAndPan="magnify"
                                     viewBox="0 0 375 112.499997" height="130" preserveAspectRatio="xMidYMid meet" version="1.0">
                                    <g>
                                        <path fill="var(--primary-color)"
                                              d="M 61.878906 57.308594 L 61.878906 66.734375 L 53.710938 62.023438 L 53.710938 52.59375 L 61.878906 57.308594 "/>
                                    </g>
                                    <path fill="var(--primary-color)"
                                          d="M 72.527344 52.59375 L 72.527344 62.023438 L 64.363281 66.734375 L 64.363281 57.308594 L 72.527344 52.59375 "/>
                                    <path fill="var(--primary-color)"
                                          d="M 71.285156 50.441406 L 63.121094 55.15625 L 54.953125 50.441406 L 63.121094 45.726562 L 71.285156 50.441406 "/>
                                    <path fill="var(--primary-color)"
                                          d="M 89.105469 57.308594 L 89.105469 66.734375 L 80.941406 62.023438 L 80.941406 52.59375 L 89.105469 57.308594 "/>
                                    <g>
                                        <path fill="var(--primary-color)"
                                              d="M 99.757812 52.59375 L 99.757812 62.023438 L 91.589844 66.734375 L 91.589844 57.308594 L 99.757812 52.59375 "/>
                                    </g>
                                    <path fill="var(--primary-color)"
                                          d="M 98.515625 50.441406 L 90.347656 55.15625 L 82.183594 50.441406 L 90.347656 45.726562 L 98.515625 50.441406 "/>
                                    <path fill="var(--primary-color)"
                                          d="M 75.492188 33.769531 L 75.492188 43.199219 L 67.324219 38.484375 L 67.324219 29.058594 L 75.492188 33.769531 "/>
                                    <path fill="var(--primary-color)"
                                          d="M 86.144531 29.058594 L 86.144531 38.484375 L 77.976562 43.199219 L 77.976562 33.769531 L 86.144531 29.058594 "/>
                                    <g>
                                        <path fill="var(--primary-color)"
                                              d="M 84.902344 26.90625 L 76.734375 31.621094 L 68.570312 26.90625 L 76.734375 22.191406 L 84.902344 26.90625 "/>
                                    </g>
                                    <path fill="var(--primary-color)"
                                          d="M 60.710938 43.46875 L 60.710938 39.378906 L 64.140625 37.394531 L 64.140625 33.789062 L 58.367188 37.121094 C 57.882812 37.402344 57.582031 37.917969 57.582031 38.476562 L 57.582031 45.269531 L 60.710938 43.46875 "/>
                                    <path fill="var(--primary-color)"
                                          d="M 89.332031 37.394531 L 92.761719 39.378906 L 92.761719 43.46875 L 95.882812 45.269531 L 95.882812 38.476562 C 95.882812 37.917969 95.585938 37.402344 95.105469 37.121094 L 89.332031 33.789062 L 89.332031 37.394531 "/>
                                    <g>
                                        <path fill="var(--primary-color)"
                                              d="M 80.050781 65.21875 L 76.734375 67.136719 L 73.417969 65.21875 L 70.292969 67.023438 L 75.953125 70.292969 C 76.195312 70.429688 76.464844 70.5 76.734375 70.5 C 77.003906 70.5 77.273438 70.429688 77.515625 70.292969 L 83.179688 67.023438 L 80.050781 65.21875 "/>
                                    </g>
                                    <g>
                                        <path fill="var(--primary-color)"
                                              d="M 40.902344 44.609375 C 39.664062 40.488281 38.714844 36.1875 38.074219 31.816406 C 41.09375 31.367188 44.585938 30.410156 48.472656 28.957031 C 52.703125 27.375 57.472656 25.195312 62.648438 22.476562 C 68.8125 19.234375 74.152344 15.945312 76.710938 14.328125 C 76.714844 14.332031 76.722656 14.332031 76.726562 14.335938 C 76.730469 14.332031 76.734375 14.332031 76.738281 14.328125 C 79.296875 15.945312 84.640625 19.234375 90.804688 22.476562 C 95.976562 25.195312 100.746094 27.375 104.976562 28.957031 C 108.863281 30.410156 112.355469 31.367188 115.378906 31.816406 C 114.738281 36.1875 113.785156 40.488281 112.546875 44.609375 C 111.214844 49.050781 109.515625 53.398438 107.492188 57.546875 C 119.089844 44.976562 122.378906 26.160156 122.378906 26.160156 L 118.929688 26.121094 C 113.457031 26.058594 104.789062 22.988281 93.863281 17.246094 C 85.402344 12.800781 78.597656 8.304688 78.527344 8.257812 L 76.738281 7.074219 L 76.726562 7.082031 L 76.710938 7.074219 L 74.921875 8.257812 C 74.855469 8.304688 68.046875 12.800781 59.589844 17.246094 C 48.664062 22.988281 39.996094 26.058594 34.523438 26.121094 L 31.070312 26.160156 C 31.070312 26.160156 34.359375 44.976562 45.957031 57.546875 C 43.9375 53.398438 42.238281 49.050781 40.902344 44.609375 "/>
                                    </g>
                                    <path fill="var(--primary-color)"
                                          d="M 76.738281 92.621094 C 76.734375 92.617188 76.730469 92.613281 76.726562 92.613281 C 76.722656 92.613281 76.714844 92.617188 76.710938 92.621094 C 56.925781 79.941406 40.042969 54.496094 36.808594 49.621094 C 37.914062 52.773438 39.167969 55.863281 40.5625 58.855469 C 44.402344 67.101562 49.351562 74.785156 55.273438 81.695312 C 60.542969 87.847656 65.628906 92.242188 68.96875 94.84375 C 72.644531 97.707031 75.074219 99.101562 75.175781 99.160156 L 76.710938 100.039062 L 76.726562 100.027344 L 76.738281 100.039062 L 78.273438 99.160156 C 78.375 99.101562 80.808594 97.707031 84.480469 94.84375 C 87.820312 92.242188 92.90625 87.847656 98.179688 81.695312 C 104.097656 74.785156 109.046875 67.101562 112.886719 58.855469 C 114.28125 55.863281 115.539062 52.773438 116.640625 49.621094 C 113.410156 54.496094 96.523438 79.941406 76.738281 92.621094 "/>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(146.560315, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 5.082031 0.121094 C 10.980469 0.121094 10.980469 -8.714844 5.082031 -8.714844 C -0.816406 -8.714844 -0.816406 0.121094 5.082031 0.121094 Z M 5.082031 -1.65625 C 1.65625 -1.65625 1.65625 -6.953125 5.082031 -6.953125 C 8.511719 -6.953125 8.511719 -1.65625 5.082031 -1.65625 Z M 5.082031 -1.65625 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(156.712879, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 5.226562 0 L 7.167969 0 L 5.179688 -3.535156 C 7.695312 -4.269531 7.398438 -8.570312 4.339844 -8.570312 L 0.960938 -8.570312 L 0.960938 0 L 2.671875 0 L 2.671875 -3.273438 L 3.5 -3.273438 Z M 2.671875 -4.9375 L 2.671875 -6.859375 L 4.183594 -6.859375 C 5.347656 -6.859375 5.347656 -4.9375 4.183594 -4.9375 Z M 2.671875 -4.9375 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(164.060603, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 7.144531 -0.527344 L 7.144531 -4.292969 L 5.40625 -4.292969 L 5.40625 -1.714844 C 5.25 -1.691406 5.082031 -1.667969 4.925781 -1.667969 C 1.617188 -1.667969 1.460938 -6.785156 4.925781 -6.90625 C 5.839844 -6.929688 6.390625 -6.738281 6.726562 -6.59375 L 6.929688 -8.332031 C 6.773438 -8.378906 5.945312 -8.679688 4.925781 -8.644531 C -1.019531 -8.429688 -0.730469 0.046875 4.925781 0.046875 C 5.742188 0.046875 6.484375 -0.15625 7.144531 -0.527344 Z M 7.144531 -0.527344 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(172.127516, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 0.191406 0 L 2.132812 0 L 2.46875 -0.921875 L 5.3125 -0.921875 L 5.660156 0 L 7.589844 0 L 3.980469 -8.882812 L 3.800781 -8.882812 Z M 3.09375 -2.53125 L 3.894531 -4.757812 L 4.675781 -2.53125 Z M 3.09375 -2.53125 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(179.954697, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 2.671875 -4.664062 L 7.011719 0.179688 L 7.46875 0.179688 L 7.46875 -8.558594 L 5.742188 -8.558594 L 5.742188 -3.714844 L 1.414062 -8.75 L 0.960938 -8.75 L 0.960938 0 L 2.671875 0 Z M 2.671875 -4.664062 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(188.39319, 47.812039)">
                                            <g>
                                                <path d="M 2.671875 0 L 2.671875 -8.570312 L 0.960938 -8.570312 L 0.960938 0 Z M 2.671875 0 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(192.037084, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 0.5625 -0.550781 C 1.726562 0.046875 2.792969 0.109375 3.273438 0.0703125 C 4.878906 -0.0117188 5.863281 -1.101562 5.863281 -2.53125 C 5.863281 -3.894531 4.710938 -4.664062 3.378906 -5.15625 C 2.890625 -5.324219 2.46875 -5.539062 2.421875 -6.019531 C 2.386719 -6.496094 2.660156 -6.941406 3.273438 -6.976562 C 3.535156 -6.988281 4.078125 -7 5.023438 -6.617188 L 5.238281 -8.273438 C 4.136719 -8.65625 3.546875 -8.65625 3.105469 -8.632812 C 1.679688 -8.558594 0.683594 -7.457031 0.683594 -6.019531 C 0.683594 -4.578125 1.882812 -3.894531 3.226562 -3.40625 C 3.703125 -3.238281 4.078125 -3.019531 4.113281 -2.53125 C 4.160156 -2.0625 3.730469 -1.703125 3.226562 -1.667969 C 2.828125 -1.628906 1.761719 -1.65625 0.777344 -2.351562 Z M 0.5625 -0.550781 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(198.37794, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 4.890625 -4.9375 L 1.511719 -8.703125 L 0.960938 -8.703125 L 0.960938 0 L 2.699219 0 L 2.699219 -4.785156 L 4.890625 -2.480469 L 7.085938 -4.785156 L 7.074219 0 L 8.8125 0 L 8.8125 -8.703125 L 8.273438 -8.703125 Z M 4.890625 -4.9375 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(208.15892, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 5.394531 0 L 5.394531 -1.714844 L 2.671875 -1.714844 L 2.671875 -3.429688 L 4.925781 -3.429688 L 4.925781 -5.144531 L 2.671875 -5.144531 L 2.671875 -6.859375 L 5.25 -6.859375 L 5.25 -8.570312 L 0.960938 -8.570312 L 0.960938 0 Z M 5.394531 0 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(214.200113, 47.812039)">
                                            <g/>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(217.60428, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 3.511719 -8.570312 L 0.960938 -8.570312 L 0.960938 0 L 3.511719 0 C 9.21875 0 9.21875 -8.570312 3.511719 -8.570312 Z M 3.511719 -6.859375 C 6.84375 -6.859375 6.84375 -1.714844 3.511719 -1.714844 L 2.671875 -1.714844 L 2.671875 -6.859375 Z M 3.511719 -6.859375 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(226.042773, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 5.394531 0 L 5.394531 -1.714844 L 2.671875 -1.714844 L 2.671875 -3.429688 L 4.925781 -3.429688 L 4.925781 -5.144531 L 2.671875 -5.144531 L 2.671875 -6.859375 L 5.25 -6.859375 L 5.25 -8.570312 L 0.960938 -8.570312 L 0.960938 0 Z M 5.394531 0 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(232.083966, 47.812039)">
                                            <g/>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(235.488128, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 3.511719 -8.570312 L 0.960938 -8.570312 L 0.960938 0 L 3.511719 0 C 9.21875 0 9.21875 -8.570312 3.511719 -8.570312 Z M 3.511719 -6.859375 C 6.84375 -6.859375 6.84375 -1.714844 3.511719 -1.714844 L 2.671875 -1.714844 L 2.671875 -6.859375 Z M 3.511719 -6.859375 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(243.926617, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 4.953125 -10.539062 L 2.839844 -10.539062 L 2.253906 -9.160156 L 3.800781 -9.160156 Z M 5.394531 0 L 5.394531 -1.714844 L 2.671875 -1.714844 L 2.671875 -3.429688 L 4.925781 -3.429688 L 4.925781 -5.144531 L 2.671875 -5.144531 L 2.671875 -6.859375 L 5.25 -6.859375 L 5.25 -8.570312 L 0.960938 -8.570312 L 0.960938 0 Z M 5.394531 0 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(249.96781, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 6.414062 -6.582031 L 6.617188 -8.34375 C 6.101562 -8.570312 5.527344 -8.679688 4.925781 -8.679688 C -0.875 -8.679688 -0.886719 0.0234375 4.925781 0.0234375 C 5.527344 0.0234375 6.28125 -0.121094 6.808594 -0.335938 L 6.582031 -2.109375 C 6.257812 -1.941406 5.671875 -1.726562 4.925781 -1.726562 C 1.535156 -1.726562 1.535156 -6.953125 4.925781 -6.953125 C 5.671875 -6.953125 6.089844 -6.75 6.414062 -6.582031 Z M 6.414062 -6.582031 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(257.183675, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 5.394531 0 L 5.394531 -1.714844 L 2.671875 -1.714844 L 2.671875 -3.429688 L 4.925781 -3.429688 L 4.925781 -5.144531 L 2.671875 -5.144531 L 2.671875 -6.859375 L 5.25 -6.859375 L 5.25 -8.570312 L 0.960938 -8.570312 L 0.960938 0 Z M 5.394531 0 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(263.224868, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 2.671875 -4.664062 L 7.011719 0.179688 L 7.46875 0.179688 L 7.46875 -8.558594 L 5.742188 -8.558594 L 5.742188 -3.714844 L 1.414062 -8.75 L 0.960938 -8.75 L 0.960938 0 L 2.671875 0 Z M 2.671875 -4.664062 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(271.663366, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 4.089844 0 L 4.089844 -6.859375 L 6.222656 -6.859375 L 6.222656 -8.558594 L 0.238281 -8.558594 L 0.238281 -6.859375 L 2.375 -6.859375 L 2.375 0 Z M 4.089844 0 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(278.219974, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 5.226562 0 L 7.167969 0 L 5.179688 -3.535156 C 7.695312 -4.269531 7.398438 -8.570312 4.339844 -8.570312 L 0.960938 -8.570312 L 0.960938 0 L 2.671875 0 L 2.671875 -3.273438 L 3.5 -3.273438 Z M 2.671875 -4.9375 L 2.671875 -6.859375 L 4.183594 -6.859375 C 5.347656 -6.859375 5.347656 -4.9375 4.183594 -4.9375 Z M 2.671875 -4.9375 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(285.567702, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 0.191406 0 L 2.132812 0 L 2.46875 -0.921875 L 5.3125 -0.921875 L 5.660156 0 L 7.589844 0 L 3.980469 -8.882812 L 3.800781 -8.882812 Z M 3.09375 -2.53125 L 3.894531 -4.757812 L 4.675781 -2.53125 Z M 3.09375 -2.53125 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(293.394883, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 0.960938 -8.570312 L 0.960938 0 L 5.394531 0 L 5.394531 -1.714844 L 2.671875 -1.714844 L 2.671875 -8.570312 Z M 0.960938 -8.570312 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(299.304233, 47.812039)">
                                            <g>
                                                <path d="M 2.671875 0 L 2.671875 -8.570312 L 0.960938 -8.570312 L 0.960938 0 Z M 2.671875 0 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(302.948131, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 0.5625 -0.550781 C 1.726562 0.046875 2.792969 0.109375 3.273438 0.0703125 C 4.878906 -0.0117188 5.863281 -1.101562 5.863281 -2.53125 C 5.863281 -3.894531 4.710938 -4.664062 3.378906 -5.15625 C 2.890625 -5.324219 2.46875 -5.539062 2.421875 -6.019531 C 2.386719 -6.496094 2.660156 -6.941406 3.273438 -6.976562 C 3.535156 -6.988281 4.078125 -7 5.023438 -6.617188 L 5.238281 -8.273438 C 4.136719 -8.65625 3.546875 -8.65625 3.105469 -8.632812 C 1.679688 -8.558594 0.683594 -7.457031 0.683594 -6.019531 C 0.683594 -4.578125 1.882812 -3.894531 3.226562 -3.40625 C 3.703125 -3.238281 4.078125 -3.019531 4.113281 -2.53125 C 4.160156 -2.0625 3.730469 -1.703125 3.226562 -1.667969 C 2.828125 -1.628906 1.761719 -1.65625 0.777344 -2.351562 Z M 0.5625 -0.550781 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(309.288992, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 0.191406 0 L 2.132812 0 L 2.46875 -0.921875 L 5.3125 -0.921875 L 5.660156 0 L 7.589844 0 L 3.980469 -8.882812 L 3.800781 -8.882812 Z M 3.09375 -2.53125 L 3.894531 -4.757812 L 4.675781 -2.53125 Z M 3.09375 -2.53125 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(317.116174, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 4.089844 0 L 4.089844 -6.859375 L 6.222656 -6.859375 L 6.222656 -8.558594 L 0.238281 -8.558594 L 0.238281 -6.859375 L 2.375 -6.859375 L 2.375 0 Z M 4.089844 0 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(323.672781, 47.812039)">
                                            <g>
                                                <path d="M 2.671875 0 L 2.671875 -8.570312 L 0.960938 -8.570312 L 0.960938 0 Z M 2.671875 0 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(327.31668, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 5.082031 0.121094 C 10.980469 0.121094 10.980469 -8.714844 5.082031 -8.714844 C -0.816406 -8.714844 -0.816406 0.121094 5.082031 0.121094 Z M 5.082031 -1.65625 C 1.65625 -1.65625 1.65625 -6.953125 5.082031 -6.953125 C 8.511719 -6.953125 8.511719 -1.65625 5.082031 -1.65625 Z M 5.082031 -1.65625 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(337.469244, 47.812039)">
                                            <g>
                                                <path
                                                    d="M 2.671875 -4.664062 L 7.011719 0.179688 L 7.46875 0.179688 L 7.46875 -8.558594 L 5.742188 -8.558594 L 5.742188 -3.714844 L 1.414062 -8.75 L 0.960938 -8.75 L 0.960938 0 L 2.671875 0 Z M 2.671875 -4.664062 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(345.910901, 47.812039)">
                                            <g/>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(146.540888, 64.597003)">
                                            <g>
                                                <path
                                                    d="M 4.890625 -4.9375 L 1.511719 -8.703125 L 0.960938 -8.703125 L 0.960938 0 L 2.699219 0 L 2.699219 -4.785156 L 4.890625 -2.480469 L 7.085938 -4.785156 L 7.074219 0 L 8.8125 0 L 8.8125 -8.703125 L 8.273438 -8.703125 Z M 4.890625 -4.9375 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(156.321867, 64.597003)">
                                            <g>
                                                <path
                                                    d="M 5.082031 0.121094 C 10.980469 0.121094 10.980469 -8.714844 5.082031 -8.714844 C -0.816406 -8.714844 -0.816406 0.121094 5.082031 0.121094 Z M 5.082031 -1.65625 C 1.65625 -1.65625 1.65625 -6.953125 5.082031 -6.953125 C 8.511719 -6.953125 8.511719 -1.65625 5.082031 -1.65625 Z M 5.082031 -1.65625 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(166.474432, 64.597003)">
                                            <g>
                                                <path
                                                    d="M 2.671875 -4.664062 L 7.011719 0.179688 L 7.46875 0.179688 L 7.46875 -8.558594 L 5.742188 -8.558594 L 5.742188 -3.714844 L 1.414062 -8.75 L 0.960938 -8.75 L 0.960938 0 L 2.671875 0 Z M 2.671875 -4.664062 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(174.912925, 64.597003)">
                                            <g>
                                                <path
                                                    d="M 3.511719 -8.570312 L 0.960938 -8.570312 L 0.960938 0 L 3.511719 0 C 9.21875 0 9.21875 -8.570312 3.511719 -8.570312 Z M 3.511719 -6.859375 C 6.84375 -6.859375 6.84375 -1.714844 3.511719 -1.714844 L 2.671875 -1.714844 L 2.671875 -6.859375 Z M 3.511719 -6.859375 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(183.351418, 64.597003)">
                                            <g>
                                                <path d="M 2.671875 0 L 2.671875 -8.570312 L 0.960938 -8.570312 L 0.960938 0 Z M 2.671875 0 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(186.995312, 64.597003)">
                                            <g>
                                                <path
                                                    d="M 0.191406 0 L 2.132812 0 L 2.46875 -0.921875 L 5.3125 -0.921875 L 5.660156 0 L 7.589844 0 L 3.980469 -8.882812 L 3.800781 -8.882812 Z M 3.09375 -2.53125 L 3.894531 -4.757812 L 4.675781 -2.53125 Z M 3.09375 -2.53125 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(194.822493, 64.597003)">
                                            <g>
                                                <path
                                                    d="M 0.960938 -8.570312 L 0.960938 0 L 5.394531 0 L 5.394531 -1.714844 L 2.671875 -1.714844 L 2.671875 -8.570312 Z M 0.960938 -8.570312 "/>
                                            </g>
                                        </g>
                                    </g>
                                    <g fill="var(--primary-color)">
                                        <g transform="translate(200.731837, 64.597003)">
                                            <g>
                                                <path
                                                    d="M 5.394531 0 L 5.394531 -1.714844 L 2.671875 -1.714844 L 2.671875 -3.429688 L 4.925781 -3.429688 L 4.925781 -5.144531 L 2.671875 -5.144531 L 2.671875 -6.859375 L 5.25 -6.859375 L 5.25 -8.570312 L 0.960938 -8.570312 L 0.960938 0 Z M 5.394531 0 "/>
                                            </g>
                                        </g>
                                    </g>
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
