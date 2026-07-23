"use client";

import { useState } from "react";

import { useConfigurador } from "@/app/context/ConfiguradorContext";
import { crearPedido } from "@/app/services/pedidos";

type Props = {
    atras: () => void;
};

export default function Confirmacion({ atras }: Props) {

    const { config } = useConfigurador();

    const [enviando, setEnviando] = useState(false);
    const [error, setError] = useState("");

    async function confirmarPedido() {

        try {

            setEnviando(true);
            setError("");

            const origen =
                localStorage.getItem("origen") || "directo";

            const response = await crearPedido({
                ...config,
                origen,
            });

            let datosEnvio = "";

            if (config.envio.tipo === "lima") {

                datosEnvio = `
----------------------------               
*DATOS DE ENVÍO*
----------------------------
*Nombre:* ${config.envio.nombre}
Celular: ${config.envio.celular}

*Distrito:* ${config.envio.distrito || "-"}

*Dirección:*
${config.envio.direccion || "-"}

*Referencia:*
${config.envio.referencia || "-"}
`;

            } else {

                datosEnvio = `
----------------------------             
*DATOS DE ENVÍO*
----------------------------
*Nombre:* ${config.envio.nombre}
*Celular:* ${config.envio.celular}
*DNI:* ${config.envio.dni || "-"}

*Departamento:* ${config.envio.departamento || "-"}
*Provincia:* ${config.envio.provincia || "-"}

*Agencia Shalom:*
${config.envio.shalom || "-"}
`;

            }

            const mensaje = `
*Hola Almoria.*

Quiero confirmar este pedido personalizado.

*Ver Pedido:*
${response.link}

${datosEnvio}

Gracias. Quedo atento(a) a la confirmación.

`;
            const whatsapp =
                "https://wa.me/51924421161?text=" +
                encodeURIComponent(mensaje);
            localStorage.removeItem("origen");
            window.location.href = whatsapp;

        } catch (err: any) {

            alert(err);

            setError("No se pudo registrar el pedido.");

            setEnviando(false);

        }

    }

    return (

        <div>

            <p className="uppercase tracking-[5px] text-gray-400 text-xs">
                PASO 8 DE 8
            </p>

            <h2 className="text-5xl font-serif mt-4">
                Confirmar pedido
            </h2>

            <p className="text-gray-500 mt-3">
                Revisa toda la información antes de confirmar.
            </p>

            <div className="mt-10 rounded-3xl border bg-white shadow-sm p-8 space-y-8">

                <div>

                    <h3 className="text-xl font-semibold mb-4">
                        Producto
                    </h3>

                    <div className="grid grid-cols-2 gap-4 text-sm">

                        <div>
                            <span className="text-gray-500">Equipo</span>
                            <p className="font-semibold">{config.equipo || "-"}</p>
                        </div>

                        <div>
                            <span className="text-gray-500">Modelo</span>
                            <p className="font-semibold">{config.modelo || "-"}</p>
                        </div>

                        <div>
                            <span className="text-gray-500">Color</span>
                            <p className="font-semibold">{config.color || "-"}</p>
                        </div>

                        <div>
                            <span className="text-gray-500">Nombre</span>
                            <p className="font-semibold">{config.nombre || "-"}</p>
                        </div>

                    </div>

                </div>

                <hr />

                <div>

                    <h3 className="text-xl font-semibold mb-4">
                        Datos de envío
                    </h3>

                    <div className="space-y-2 text-sm">

                        <p><strong>Nombre:</strong> {config.envio.nombre}</p>

                        <p><strong>Celular:</strong> {config.envio.celular}</p>

                        <p><strong>DNI:</strong> {config.envio.dni}</p>

                        {config.envio.departamento && (
                            <p><strong>Departamento:</strong> {config.envio.departamento}</p>
                        )}

                        {config.envio.provincia && (
                            <p><strong>Provincia:</strong> {config.envio.provincia}</p>
                        )}

                        {config.envio.distrito && (
                            <p><strong>Distrito:</strong> {config.envio.distrito}</p>
                        )}

                        {config.envio.direccion && (
                            <p><strong>Dirección:</strong> {config.envio.direccion}</p>
                        )}

                        {config.envio.referencia && (
                            <p><strong>Referencia:</strong> {config.envio.referencia}</p>
                        )}

                        {config.envio.shalom && (
                            <p><strong>Agencia Shalom:</strong> {config.envio.shalom}</p>
                        )}

                    </div>
                    <hr />

                    <div className="flex justify-between items-center">

                        <span className="text-xl">
                            Total
                        </span>

                        <span className="text-3xl font-bold">
                            S/{config.precio}
                        </span>

                    </div>

                </div>

            </div>

            {error && (

                <div className="mt-6 rounded-xl bg-red-50 border border-red-200 text-red-700 p-4">

                    {error}

                </div>

            )}

            <div className="flex gap-4 mt-10">

                <button
                    onClick={atras}
                    disabled={enviando}
                    className="flex-1 rounded-2xl border py-4 font-semibold hover:bg-gray-100 transition disabled:opacity-50"
                >
                    ← Atrás
                </button>

                <button
                    onClick={confirmarPedido}
                    disabled={enviando}
                    className="flex-1 rounded-2xl bg-red-600 text-white py-4 font-semibold hover:opacity-90 transition disabled:opacity-50"
                >
                    {enviando ? "ENVIANDO..." : "CONFIRMAR PEDIDO"}
                </button>

            </div>

        </div>

    );

}