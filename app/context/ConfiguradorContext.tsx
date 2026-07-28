"use client";

import { createContext, useContext, useState } from "react";

/* ===========================
   DATOS DE ENVÍO
=========================== */

export type Envio = {
    tipo: "lima" | "provincia" | "";

    nombre: string;

    celular: string;

    distrito: string;

    direccion: string;

    referencia: string;

    dni: string;

    departamento: string;

    provincia: string;

    shalom: string;
};

/* ===========================
   CONFIGURACIÓN DEL PRODUCTO
=========================== */

export type Configuracion = {

    equipo: string;

    modelo: string;

    color: string;

    nombre: string;

    fraseMadera: string;

    fraseMetal: string;

    precio: number;

    envio: Envio;

};

/* ===========================
   PREVIEW
=========================== */

export type Preview = {

    equipo: string;

    modelo: string;

    color: string;

};

/* ===========================
   CONTEXTO
=========================== */

type ContextType = {

    config: Configuracion;

    setConfig: React.Dispatch<React.SetStateAction<Configuracion>>;

    paso: number;

    setPaso: React.Dispatch<React.SetStateAction<number>>;

    preview: Preview;

    setPreview: React.Dispatch<React.SetStateAction<Preview>>;

};

const ConfiguradorContext = createContext<ContextType | null>(null);

/* ===========================
   PROVIDER
=========================== */

export function ConfiguradorProvider({

    children,

}: {

    children: React.ReactNode;

}) {

    const [paso, setPaso] = useState(1);

    const [config, setConfig] = useState<Configuracion>({

        equipo: "",

        modelo: "",

        color: "",

        nombre: "",

        fraseMadera: "",

        fraseMetal: "",

        precio: 69.99,

        envio: {

            tipo: "",

            nombre: "",

            celular: "",

            distrito: "",

            direccion: "",

            referencia: "",

            dni: "",

            departamento: "",

            provincia: "",

            shalom: "",

        },

    });

    const [preview, setPreview] = useState<Preview>({

        equipo: "",

        modelo: "",

        color: "",

    });

    return (

        <ConfiguradorContext.Provider

            value={{

                paso,

                setPaso,

                config,

                setConfig,

                preview,

                setPreview,

            }}

        >

            {children}

        </ConfiguradorContext.Provider>

    );

}

/* ===========================
   HOOK
=========================== */

export function useConfigurador() {

    const context = useContext(ConfiguradorContext);

    if (!context) {

        throw new Error("Contexto no encontrado");

    }

    return context;

}