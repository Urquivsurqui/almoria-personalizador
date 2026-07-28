"use client";

import LayoutDesktop from "./LayoutDesktop";
import LayoutMobile from "./LayoutMobile";

export default function Configurador() {
    return (
        <>
            <div className="hidden lg:block">
                <LayoutDesktop />
            </div>

            <div className="block lg:hidden">
                <LayoutMobile />
            </div>
        </>
    );
}