import movies from '../data/movies.json';

function buscaPelicula(titulo) {
    const resultados = movies.filter((valor) => valor.name === titulo);
    return resultados
}

function busquedaAvanzada(campo, busqueda) {
    const resultados = movies.filter((valor) => valor[campo] === busqueda);
    return resultados
}

function busquedaPorPrecio(mayorA, precio) {
    const resultados = movies.filter((valor) => {
        if (mayorA) {
            return valor.price > precio
        }
        return valor.price < precio
    });
    return resultados
}

export { buscaPelicula, busquedaAvanzada, busquedaPorPrecio };