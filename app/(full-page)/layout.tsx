import { Metadata } from "next";
import React from "react";
import AppConfig from "../../layout/AppConfig";

interface FullPageLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "ODM",
    description:
        "Organisme de Décentralisation Mondiale. Une organisation à but non lucratif qui a pour objectif de promouvoir la décentralisation et la blockchain à travers le monde."
};

export default function FullPageLayout({ children }: FullPageLayoutProps) {
    return (
        <React.Fragment>
            {children}
            <AppConfig minimal />
        </React.Fragment>
    );
}
