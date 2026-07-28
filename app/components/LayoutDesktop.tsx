"use client";

import { useState } from "react";

import VistaPrevia from "./VistaPrevia";
import Pasos from "./Pasos";
import { useConfigurador } from "../context/ConfiguradorContext";
export default function Configurador() {

    const { paso, setPaso } = useConfigurador();

    return (

        <main className="min-h-screen bg-[#f5f5f5]">

            <div className="max-w-[1650px] mx-auto p-4">

                <div className="grid grid-cols-2 bg-white rounded-[35px] shadow-2xl overflow-hidden">

                    {/* IZQUIERDA */}

                    <div className="bg-gradient-to-br from-stone-100 to-stone-200 min-h-screen sticky top-0 overflow-auto flex justify-center items-start">

                        <div className="w-[700px] max-w-full">
                            <VistaPrevia paso={paso} />
                        </div>

                    </div>

                    {/* DERECHA */}

                    <div className="px-10 py-8">

                        {paso === 1 && (
                            <div className="mb-10">



                                <div className="mt-8 flex items-center gap-5">

                                    {/* Precio */}

                                    <div className="rounded-2xl bg-amber-50 px-6 py-4">

                                        <p className="text-sm text-gray-500">
                                            Precio único
                                        </p>

                                        <p className="text-4xl font-bold text-amber-800">
                                            S/69.99
                                        </p>

                                    </div>

                                    {/* Envío */}

                                    <div className="rounded-2xl bg-green-50 px-6 py-4">

                                        <p className="font-semibold text-green-700">
                                            🚚 Envío GRATIS
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            A todo el Perú
                                        </p>

                                    </div>

                                    {/* Clientes */}

                                    <div className="rounded-2xl bg-yellow-50 px-6 py-4 flex flex-col items-center justify-center">

                                        <div className="text-yellow-500 text-xl tracking-wide">
                                            ★★★★★
                                        </div>

                                        <p className="mt-2 text-sm text-gray-700 text-center leading-5">
                                            Más de <strong>500 clientes satisfechos</strong>
                                        </p>

                                    </div>

                                </div>

                            </div>
                        )}



                        <Pasos
                            paso={paso}
                            setPaso={setPaso}
                        />


                    </div>

                </div>

            </div>

        </main>

    );

}