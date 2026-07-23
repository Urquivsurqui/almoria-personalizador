"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function OrigenPage() {
    const { origen } = useParams<{ origen: string }>();
    const router = useRouter();

    useEffect(() => {
        if (origen) {
            localStorage.setItem("origen", origen);
        }

        router.replace("/");
    }, [origen, router]);

    return null;
}