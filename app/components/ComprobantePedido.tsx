"use client";

import type { ReactNode } from "react";
import type { Configuracion } from "../context/ConfiguradorContext";
import VistaPrevia from "./VistaPrevia";
import Image from "next/image";
import VistaPlacaMetal from "./VistaPlacaMetal";

type Props = {
    pedido: any;
};

function Card({
    titulo,
    children,
}: {
    titulo: string;
    children: ReactNode;
}) {
    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-6 text-gray-900">
                {titulo}
            </h2>

            {children}
        </div>
    );
}

function Campo({
    titulo,
    valor,
}: {
    titulo: string;
    valor?: string | number;
}) {
    return (
        <div className="rounded-2xl border border-gray-200 p-4 min-h-[120px] flex flex-col justify-start">
            <p className="text-xs uppercase tracking-wider text-gray-400">
                {titulo}
            </p>
            <p className="mt-2 text-gray-900 font-medium leading-relaxed">
                {valor || "-"}
            </p>
        </div>
    );
}
function capitalizar(texto?: string) {
    if (!texto) return "-";

    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function nombreEquipo(equipo?: string) {

    switch (equipo) {

        case "universitario":
            return "Universitario de Deportes";

        case "alianza":
            return "Alianza Lima";

        case "cristal":
            return "Sporting Cristal";


        default:
            return capitalizar(equipo);

    }

}
export default function ComprobantePedido({
    pedido,
}: Props) {

    const config: Configuracion = {

        equipo: pedido.equipo,

        modelo: pedido.modelo,

        color: pedido.color,

        nombre: pedido.nombre,

        fraseMadera: pedido.fraseMadera,

        fraseMetal: pedido.fraseMetal,

        precio: Number(pedido.precio ?? 69.99),

        envio: {

            tipo: pedido.tipoEnvio ?? "",

            nombre: pedido.cliente ?? "",

            celular: pedido.celular ?? "",

            distrito: pedido.distrito ?? "",

            direccion: pedido.direccion ?? "",

            referencia: pedido.referencia ?? "",

            dni: pedido.dni ?? "",

            departamento: pedido.departamento ?? "",

            provincia: pedido.provincia ?? "",

            shalom: pedido.shalom ?? "",

        },

    };

    return (

        <main className="min-h-screen bg-gray-100 py-10">

            <div className="max-w-7xl mx-auto px-6">

                {/* Encabezado */}

                <div className="bg-white rounded-3xl shadow-sm border border-gray-200 py-2 px-8 mb-5">
                    <div className="flex flex-col items-center justify-center gap-1">

                        <Image
                            src="/logo-almoria.png"
                            alt="Almoria"
                            width={250}
                            height={150}
                            priority
                        />

                        <p className="text-gray-500 -mt-16">
                            Comprobante de Pedido
                        </p>

                    </div>

                    <div className="mt-5 flex justify-center">

                        <div className="px-5 py-2 rounded-full bg-gray-100 font-semibold">

                            {pedido.id}

                        </div>

                    </div>

                </div>

                {/* CONTENIDO */}

                <div className="grid xl:grid-cols-5 gap-8">

                    {/* COLUMNA IZQUIERDA */}

                    <div className="xl:col-span-3 space-y-5">

                        <Card titulo="Producto">

                            <VistaPrevia
                                paso={1}
                                config={config}
                            />

                        </Card>

                        <Card titulo="Placa metálica">

                            <VistaPlacaMetal
                                config={config}
                            />

                        </Card>

                    </div>

                    {/* COLUMNA DERECHA */}

                    <div className="xl:col-span-2 space-y-6">

                        <Card titulo="Información del producto">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                <Campo
                                    titulo="Equipo"
                                    valor={nombreEquipo(pedido.equipo)}
                                />

                                <Campo
                                    titulo="Modelo"
                                    valor={capitalizar(pedido.modelo)}
                                />

                                <Campo
                                    titulo="Color"
                                    valor={capitalizar(pedido.color)}
                                />

                                <Campo
                                    titulo="Frase en madera"
                                    valor={pedido.fraseMadera}
                                />

                            </div>

                            <div className="mt-6">

                                <Campo
                                    titulo="Frase en placa"
                                    valor={pedido.fraseMetal}
                                />

                            </div>

                        </Card>

                        <Card titulo="Datos del cliente">

                            {pedido.envio?.tipo === "lima" ? (

                                <div className="grid grid-cols-2 gap-4">

                                    <Campo
                                        titulo="Cliente"
                                        valor={pedido.envio?.nombre}
                                    />

                                    <Campo
                                        titulo="Celular"
                                        valor={pedido.envio?.celular}
                                    />

                                </div>

                            ) : (

                                <div className="grid grid-cols-2 gap-4">

                                    <Campo
                                        titulo="Cliente"
                                        valor={pedido.envio?.nombre}
                                    />

                                    <Campo
                                        titulo="Celular"
                                        valor={pedido.envio?.celular}
                                    />

                                    <Campo
                                        titulo="DNI"
                                        valor={pedido.envio?.dni}
                                    />

                                    <Campo
                                        titulo="Tipo de envío"
                                        valor={pedido.envio?.tipo}
                                    />

                                </div>

                            )}

                        </Card>
                        <Card titulo="Dirección de envío">

                            {pedido.envio?.tipo === "lima" ? (

                                <>
                                    <div className="grid grid-cols-1 gap-4">

                                        <Campo
                                            titulo="Distrito"
                                            valor={pedido.envio?.distrito}
                                        />

                                    </div>

                                    <div className="mt-4">

                                        <Campo
                                            titulo="Dirección"
                                            valor={pedido.envio?.direccion}
                                        />

                                    </div>

                                    <div className="mt-4">

                                        <Campo
                                            titulo="Referencia"
                                            valor={pedido.envio?.referencia}
                                        />

                                    </div>
                                </>

                            ) : (

                                <>
                                    <div className="grid grid-cols-2 gap-4">

                                        <Campo
                                            titulo="Departamento"
                                            valor={pedido.envio?.departamento}
                                        />

                                        <Campo
                                            titulo="Provincia"
                                            valor={pedido.envio?.provincia}
                                        />

                                        <Campo
                                            titulo="Distrito"
                                            valor={pedido.envio?.distrito}
                                        />

                                        <Campo
                                            titulo="Agencia Shalom"
                                            valor={pedido.envio?.shalom}
                                        />

                                    </div>

                                    <div className="mt-4">

                                        <Campo
                                            titulo="Dirección"
                                            valor={pedido.envio?.direccion}
                                        />

                                    </div>

                                    <div className="mt-4">

                                        <Campo
                                            titulo="Referencia"
                                            valor={pedido.envio?.referencia}
                                        />

                                    </div>
                                </>

                            )}

                        </Card>

                        <div className="rounded-3xl bg-gray-900 text-white p-5">

                            <p className="text-sm uppercase tracking-[0.3em] opacity-70">

                                Total

                            </p>

                            <p className="text-3xl font-bold mt-2">

                                S/ {Number(pedido.precio ?? 69.99).toFixed(2)}

                            </p>
                            <p className="text-sm opacity-70 mt-1">
                                Precio final
                            </p>

                        </div>

                    </div>
                </div>

            </div>

        </main>

    );

}