"use client";

import Image from "next/image";
import { useConfigurador, type Configuracion } from "../context/ConfiguradorContext";
import { coordenadas } from "../data/coordenadas";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
type Props = {
    config?: Configuracion;
    escala?: number;
};
export default function OverlayMadera({
    config: configProp,
    escala = 1,
}: Props) {
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

    let nombreSize = p.nombre.size + 26;

    const anchoNombre = 182;
    const minNombreSize = 18;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (ctx) {

        ctx.font = `700 ${nombreSize}px Barlow Condensed`;
        console.log(
            ctx.measureText(config.nombre).width,
            anchoNombre,
            nombreSize
        );
        while (
            ctx.measureText(config.nombre).width > anchoNombre &&
            nombreSize > minNombreSize
        ) {
            nombreSize--;
            ctx.font = `700 ${nombreSize}px Barlow Condensed`;
        }
        console.log("Tamaño final:", nombreSize);
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
                width={logoSize * escala}
                height={logoSize * escala}
                className="absolute"
                style={{
                    left: logoX * escala,
                    top: p.logo.y * escala,
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* ADORNO SUPERIOR */}

            <Image
                src="/adornos/separador3.png"
                alt=""
                width={p.adornoSuperior.width * escala}
                height={p.adornoSuperior.height * escala}
                className="absolute"
                style={{
                    left: p.adornoSuperior.x * escala,
                    top: p.adornoSuperior.y * escala,
                    transform: "translate(-50%, -50%)",
                }}
            />
            {/* NOMBRE */}

            <div
                className={`${barlow.className} absolute font-bold`}
                style={{
                    left: p.nombre.x * escala,
                    top: p.nombre.y * escala,
                    transform: "translate(-50%, -50%)",

                    width: 182 * escala,

                    textAlign: "center",

                    fontSize: nombreSize * escala,
                    color: "#4e3521",

                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "clip",

                    lineHeight: 1,
                }}
            >
                {config.nombre || "TU NOMBRE"}
            </div>
            {/* ADORNO INFERIOR */}

            <Image
                src="/adornos/separador3.png"
                alt=""
                width={p.adornoInferior.width * escala}
                height={p.adornoInferior.height * escala}
                className="absolute"
                style={{
                    left: p.adornoInferior.x * escala,
                    top: p.adornoInferior.y * escala,
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* FRASE */}

            <div
                className="absolute italic font-bold"
                style={{
                    left: p.frase.x * escala,
                    top: p.frase.y * escala,
                    transform: "translate(-50%, -50%)",

                    width: 210 * escala,

                    textAlign: "center",

                    fontSize: fraseSize * escala,
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