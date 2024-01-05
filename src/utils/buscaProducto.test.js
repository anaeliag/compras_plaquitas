import { buscaPelicula, busquedaAvanzada, busquedaPorPrecio} from "./buscaProducto";

describe("Pruebas de la funcionalidad de buscaPelicula", () => {
    test('buscaPelicula es de tipo function', () => {
        expect(typeof buscaPelicula).toBe("function")
    });
    
    // test('valor 4 no sea tipo function', () => {
    //     expect(typeof 4 !== "function").toBe(false)
    // });
    
    test("que la pelicula 'Mi probre angelito' no exista en mi arreglo de peliculas", () => {
        const pelicula = "Mi probre angelito";
        const resultado = buscaPelicula(pelicula); // [?] 1 posicion
        expect(resultado.length === 0).toBe(true)
    })
});

describe("Pruebas de funcionalidad para busquedaAvanzada", () => {
    test("Que exista al menos una pelicula con el precio 98.12", () => {
        const resultados = busquedaAvanzada("price", 98.12)
        expect(resultados.length).toBeGreaterThan(0)
    });
    
    test("Que no exista una pelicula con el id 45", () => {
        const resultados = busquedaAvanzada("id", 45)
        expect(resultados.length).toBe(0)
    });
});

describe("Pruebas de funcionalidad para busquedaPorPrecio", () => {
    test("Que pueda comprar al menos 2 peliculas con 200", () => {
        const resultados = busquedaPorPrecio(false, 100)
        expect(resultados.length).toBeGreaterThan(2)
    });
    
    test("Que pueda comprar la pelicula Tiptoes con mis 60 pesitos", () => {
        const comprarse = "Tiptoes"
        const resultados = busquedaPorPrecio(false, 60)
        const existe = resultados.filter((pelicula) => pelicula.name === comprarse)
        expect(existe.length).toBeGreaterThan(0)
    });
});