function obtenerLista(id) {
    return document.getElementById(id).value.split(',').map(v => v.trim());
}

function obtenerListaNumerica(id) {
    return document.getElementById(id).value.split(',').map(v => parseFloat(v.trim()));
}

function generarDatos(facturacion, anno, incremento_anual, productos, productos_ventas_spain, productos_ventas_portugal, regiones_spain, regiones_portugal, regiones_ventas_spain, regiones_ventas_portugal, meses) {
    let datos = [];

    for (let year = 0; year < 3; year++) {
        let facturacion_anual = facturacion * Math.pow(1 + incremento_anual / 100, year);
        
        productos.forEach((producto, i) => {
            regiones_spain.forEach((region, j) => {
                meses.forEach((mes_valor, mes) => {
                    let ventas = facturacion_anual * productos_ventas_spain[i] * regiones_ventas_spain[j] * mes_valor;
                    datos.push({ Año: anno + year, Mes: mes + 1, Producto: producto, Región: region, País: "España", Ventas: ventas.toFixed(2) });
                });
            });

            regiones_portugal.forEach((region, j) => {
                meses.forEach((mes_valor, mes) => {
                    let ventas = facturacion_anual * productos_ventas_portugal[i] * regiones_ventas_portugal[j] * mes_valor;
                    datos.push({ Año: anno + year, Mes: mes + 1, Producto: producto, Región: region, País: "Portugal", Ventas: ventas.toFixed(2) });
                });
            });
        });
    }

    return datos;
}

function generarExcel() {
    let facturacion = parseFloat(document.getElementById("facturacion").value);
    let anno = parseInt(document.getElementById("anno").value);
    let incremento_anual = parseFloat(document.getElementById("incremento_anual").value);

    let productos = obtenerLista("productos");
    let productos_ventas_spain = obtenerListaNumerica("productos_ventas_spain");
    let productos_ventas_portugal = obtenerListaNumerica("productos_ventas_portugal");

    let regiones_spain = obtenerLista("regiones_spain");
    let regiones_portugal = obtenerLista("regiones_portugal");
    let regiones_ventas_spain = obtenerListaNumerica("regiones_ventas_spain");
    let regiones_ventas_portugal = obtenerListaNumerica("regiones_ventas_portugal");

    let meses = obtenerListaNumerica("meses");

    let datos = generarDatos(facturacion, anno, incremento_anual, productos, productos_ventas_spain, productos_ventas_portugal, regiones_spain, regiones_portugal, regiones_ventas_spain, regiones_ventas_portugal, meses);
    
    let ws = XLSX.utils.json_to_sheet(datos);
    let wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Datos Sintéticos");
    XLSX.writeFile(wb, "datos_sinteticos.xlsx");
}
