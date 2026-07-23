export type CrearPedidoResponse = {
    ok: boolean;
    id: string;
    link: string;
    error?: string;
};

export type PedidoResponse = {
    ok: boolean;
    pedido?: any;
    error?: string;
};

const URL =
    "https://script.google.com/macros/s/AKfycbwMwqDXAkJ0lyAU1yULHkULtE0P6CNbQiAn-9Ixwnkk8j2s0TGDA7D8L3fz5BC3kiRCHg/exec";

export async function crearPedido(
    data: any
): Promise<CrearPedidoResponse> {

    const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(data),
    });

    const texto = await response.text();

    console.log("Respuesta Apps Script:");
    console.log(texto);

    return JSON.parse(texto);

}

export async function obtenerPedido(
    id: string
): Promise<PedidoResponse> {

    const response = await fetch(
        `${URL}?id=${encodeURIComponent(id)}`,
        {
            cache: "no-store",
        }
    );

    const texto = await response.text();

    console.log("Pedido:");
    console.log(texto);

    return JSON.parse(texto);

}