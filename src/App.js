import './App.css';
import Card from "./components/card/Card";
import { barrita } from "./components/barrita/barrita"
import { Barra, ContainerOption, Option } from "./components/barra/Barra"
import { Fragment, useRef, useState } from "react";
import placas from "./data/placas.json";
import descuentos from "./data/descuentos.json";
import rectangular from './data/images/images/plaquita_rectangular.png';
import redonda from './data/images/images/plaquita_redonda.png';
import patita from './data/images/images/plaquita_patita.png';
import corazon from './data/images/images/plaquitas_corazon.png';
import huesito from './data/images/images/plaquitas_huesito.png';
import cart from './data/images/images/shopping-cart-icon-vector.jpg'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {

  /*console.log("me imprimo");

  console.log(`$-${placas[4].price}`)*/

  const [plaquitas] = useState([...placas]);
  
  const [todosDescuentos, setTodosDescuentos] = useState([...descuentos]);
  const [textoActualizado, setTextoActualizado] = useState("")
  const [carrito, setCarrito] = useState([]); 
  //let carrito = useRef([]); 
  let texto = useRef(null);

  const descuento = (id) => todosDescuentos.includes(id)

  const agrega = () => {
    setCarrito([...carrito, {}])
    //carrito.current = [...carrito.current, {}];
    alert(carrito)
    console.log("carrito", carrito);

  }

  const imprime = () => setTextoActualizado(texto.current.value)

  return (
    <section>
      <barrita>
        {/*<p> {textoActualizado} </p>
        <input ref={texto} type='text' />
  <button onClick={imprime}>Actualizar</button>*/}
      <Container>
      <Navbar expand="lg" className='ms-auto'>
        <Container>
          <Navbar.Brand href="#"></Navbar.Brand>
        </Container>
        <img weight="50px" height="50px" src={cart} class="opt-cart" alt="cart"/>
      </Navbar>
    </Container>
    </barrita>
      <main className="App">
           {/* <Card src={placas.image} alt={`Producto-${placas.name}`} isbn={placas.isbn} precio={placas.price} /> */}
           <Card nombre={placas[0].name} src={corazon} description={placas[0].description} precio={`${placas[0].price}`} id={`Sku: ${placas[0].id}`} />
           <Card nombre={placas[1].name} src={patita} description={placas[1].description} precio={`${placas[1].price}`} id={`Sku: ${placas[1].id}`} />
           <Card nombre={placas[2].name} src={huesito} description={placas[2].description} precio={`${placas[2].price}`} id={`Sku: ${placas[2].id}`} />
           <Card nombre={placas[3].name} src={redonda} description={placas[3].description} precio={`${placas[3].price}`} id={`Sku: ${placas[3].id}`} />
           <Card nombre={placas[4].name} src={rectangular} description={placas[4].description} precio={`${placas[4].price}`} id={`Sku: ${placas[4].id}`} />
        {/*<button className="agregacarrito" onClick={agrega}>Agregar al carrito de compras</button>*/}
    </main>
    <div>
    <button className="agregacarrito" onClick={agrega}>Agregar al carrito de compras</button>
    </div>
    </section>
  );
}

export default App;
