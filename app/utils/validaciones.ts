import { Configuracion } from "@/app/context/ConfiguradorContext";

export function validarEquipo(config: Configuracion) {
    return config.equipo.trim() !== "";
}

export function validarModelo(config: Configuracion) {
    return config.modelo.trim() !== "";
}

export function validarColor(config: Configuracion) {
    return config.color.trim() !== "";
}

export function validarPlacaMadera(config: Configuracion) {
    return (
        config.nombre.trim() !== "" &&
        config.fraseMadera.trim() !== ""
    );
}

export function validarPlacaMetal(config: Configuracion) {
    return config.fraseMetal.trim() !== "";
}

export function validarEnvio(config: Configuracion) {

    if (config.envio.tipo === "lima") {

        return (

            config.envio.nombre.trim() !== "" &&

            config.envio.celular.length === 9 &&

            config.envio.distrito.trim() !== "" &&

            config.envio.direccion.trim() !== ""

        );

    }

    if (config.envio.tipo === "provincia") {

        return (

            config.envio.nombre.trim() !== "" &&

            config.envio.dni.length === 8 &&

            config.envio.celular.length === 9 &&

            config.envio.departamento.trim() !== "" &&

            config.envio.provincia.trim() !== ""

        );

    }

    return false;

}