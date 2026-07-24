"use client";

import Image from "next/image";
import { useConfigurador, type Configuracion } from "../context/ConfiguradorContext";
import { coordenadas } from "../data/coordenadas";
import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
});

type Props = {
    config?: Configuracion;
};

export default function OverlayMadera({ config: configProp }: Props) {

    const contexto = useConfigurador();

    const config = configProp ?? contexto.config;

    if (!config.equipo || !config.modelo) return null;

    const equipo = coordenadas[
        config.equipo as keyof typeof coordenadas
    ];

    const p = equipo[
        config.modelo as keyof typeof equipo
    ];

    const logo = `/iconos/grabado/${config.equipo}.png`;

    /* ==========================
   TAMAÑO DEL NOMBRE
    ========================== */

    let nombreSize = p.nombre.size + 40;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (ctx) {

        ctx.font = `${nombreSize}px Arial`;

        while (
            ctx.measureText(config.nombre).width > 180 &&
            nombreSize > 24
        ) {
            nombreSize--;
            ctx.font = `${nombreSize}px Bebas Neue`;
        }

    }

    /* ==========================
       TAMAÑO DE FRASE
    ========================== */

    let fraseSize = p.frase.size;

    if (config.fraseMadera.length > 18) fraseSize -= 1;
    if (config.fraseMadera.length > 25) fraseSize -= 2;
    if (config.fraseMadera.length > 32) fraseSize -= 2;

    /* ==========================
       SALTO DE LÍNEA
    ========================== */

    let frase = config.fraseMadera;

    if (frase.length > 28) {

        const palabras = frase.split(" ");

        const mitad = Math.ceil(palabras.length / 2);

        frase =
            palabras.slice(0, mitad).join(" ") +
            "\n" +
            palabras.slice(mitad).join(" ");

    }

    /* ==========================
       LOGO
    ========================== */

    let logoSize = p.logo.size;
    let logoX = p.logo.x;

    if (config.equipo === "alianza") {
        logoSize += 15;
        logoX += 15;
    }

    return (

        <div className="absolute inset-0 pointer-events-none z-20">

            {/* LOGO */}

            <Image
                src={logo}
                alt="Logo"
                width={logoSize}
                height={logoSize}
                className="absolute"
                style={{
                    left: logoX,
                    top: p.logo.y,
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* ADORNO SUPERIOR */}

            <Image
                src="/adornos/separador3.png"
                alt=""
                width={p.adornoSuperior.width}
                height={p.adornoSuperior.height}
                className="absolute"
                style={{
                    left: p.adornoSuperior.x,
                    top: p.adornoSuperior.y,
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* NOMBRE */}

            <div
                className={`${bebas.className} absolute font-normal`}
                style={{
                    left: p.nombre.x,
                    top: p.nombre.y,
                    transform: "translate(-50%, -50%)",

                    width: 210,

                    textAlign: "center",

                    fontSize: config.nombre ? nombreSize : nombreSize - 8,
                    color: "#4e3521",


                    whiteSpace: "normal",
                    wordBreak: "break-word",

                    lineHeight: 0.95,
                }}
            >
                {config.nombre || "TU NOMBRE"}
            </div>

            {/* ADORNO INFERIOR */}

            <Image
                src="/adornos/separador3.png"
                alt=""
                width={p.adornoInferior.width}
                height={p.adornoInferior.height}
                className="absolute"
                style={{
                    left: p.adornoInferior.x,
                    top: p.adornoInferior.y,
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* FRASE */}

            <div
                className="absolute italic font-bold"
                style={{
                    left: p.frase.x,
                    top: p.frase.y,
                    transform: "translate(-50%, -50%)",

                    width: 210,

                    textAlign: "center",

                    fontSize: fraseSize,
                    color: "#6a5747",

                    whiteSpace: "pre-line",
                    wordBreak: "break-word",

                    lineHeight: 1,
                }}
            >
                {frase}
            </div>

        </div>

    );

}