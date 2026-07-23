"use client";

import Envio from "./envio/Envio";
import Equipos from "./Equipos";
import Modelo from "./Modelo";
import Color from "./Color";
import PlacaMadera from "./PlacaMadera";
import PlacaMetal from "./PlacaMetal";
import Resumen from "./Resumen";
import Progress from "./Progress";
import Confirmacion from "./Confirmacion";

type Props = {
    paso: number;
    setPaso: React.Dispatch<React.SetStateAction<number>>;
};

export default function Pasos({
    paso,
    setPaso,
}: Props) {

    const siguiente = () => setPaso((p) => p + 1);

    const atras = () => setPaso((p) => p - 1);

    return (
        <>

            <Progress paso={paso} total={8} />

            {paso === 1 && (
                <Equipos siguiente={siguiente} />
            )}

            {paso === 2 && (
                <Modelo
                    siguiente={siguiente}
                    atras={atras}
                />
            )}

            {paso === 3 && (
                <Color
                    siguiente={siguiente}
                    atras={atras}
                />
            )}

            {paso === 4 && (
                <PlacaMadera
                    siguiente={siguiente}
                    atras={atras}
                />
            )}

            {paso === 5 && (
                <PlacaMetal
                    siguiente={siguiente}
                    atras={atras}
                />
            )}

            {paso === 6 && (
                <Resumen
                    siguiente={siguiente}
                    atras={atras}
                />
            )}

            {paso === 7 && (
                <Envio
                    siguiente={siguiente}
                    atras={atras}
                />
            )}

            {paso === 8 && (
                <Confirmacion
                    atras={atras}
                />
            )}

        </>
    );
}