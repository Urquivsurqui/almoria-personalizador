"use client";

import Image from "next/image";
import VistaPrevia from "./VistaPrevia";
import Pasos from "./Pasos";

import { useConfigurador } from "../context/ConfiguradorContext";

export default function LayoutMobile() {

    const { paso, setPaso } = useConfigurador();

    const mostrarBienvenida = paso === 1;

    return (

        <main className="min-h-screen bg-[#f5f5f5]">

            <div className="max-w-md mx-auto bg-white min-h-screen px-5 pt-2 pb-8">

                {/* LOGO - SIEMPRE VISIBLE */}

                <div className="text-center">

                    <Image
                        src="/logo-almoria.png"
                        alt="Almoria"
                        width={190}
                        height={190}
                        className="mx-auto"
                        priority
                    />

                </div>

                {/* SOLO PASO 1 */}

                {mostrarBienvenida && (

                    <>

                        <h1 className="text-[28px] lg:text-[30px] font-serif font-semibold -mt-6 text-center text-gray-900">
                            Crea un regalo único
                        </h1>

                        <p className="text-gray-600 text-base mt-2 leading-relaxed text-center">
                            Personaliza tu organizador de escritorio en solo unos pasos.
                        </p>

                        {/* TARJETAS */}

                        <div className="grid grid-cols-2 gap-3 mt-8">

                            <div className="rounded-2xl border border-[#efe6d6] bg-[#fdf9ef] p-4">

                                <p className="text-sm text-gray-500">
                                    Precio único
                                </p>

                                <h2 className="text-4xl font-bold text-[#9d4b00]">
                                    S/69.99
                                </h2>

                            </div>

                            <div className="rounded-2xl border border-[#d8f0df] bg-[#edfdf3] p-4">

                                <h2 className="text-2xl font-bold text-green-700">
                                    🚚 GRATIS
                                </h2>

                                <p className="text-sm text-gray-600">
                                    Envío a todo el Perú
                                </p>

                            </div>

                        </div>

                        {/* CLIENTES */}

                        <div className="mt-4 rounded-2xl border border-[#efe6d6] bg-[#fffdf7] p-5 text-center">

                            <div className="text-yellow-500 text-2xl tracking-wide">
                                ⭐⭐⭐⭐⭐
                            </div>

                            <p className="mt-2 text-lg font-semibold text-gray-900">
                                Más de 500 clientes satisfechos
                            </p>

                        </div>

                    </>

                )}
                {paso >= 4 && (

                    <div className="mt">

                        <VistaPrevia
                            paso={paso}
                            mobile
                        />

                    </div>

                )}
                {/* PASOS */}

                <div className="mt">

                    <Pasos
                        paso={paso}
                        setPaso={setPaso}
                    />

                </div>

            </div>

        </main>

    );

}