import './App.css';
import Card from "./components/card/Card.jsx";
import { barrita } from "./components/barrita/barrita"
import { Barra, ContainerOption, Option } from "./components/barra/Barra"
import { Fragment, useRef, useState, useEffect } from "react";
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
//import { nombrepeludo,colorplaca,telefonodueno } from './components/card/Card.jsx'; 
import { placa_array, placasnew } from './components/card/Card.jsx';
import * as my_card from './components/card/Card.jsx';
import Modal from './components/modal/Modal';
import newallplaquitas from './components/modal/Modal';
//import Carrito from './components/carrito/carrito.js';

function App() {

  /*console.log("me imprimo");

  console.log(`$-${placas[4].price}`)*/

  /*const [compras,setCompras] = useState(0);
  const carritodecompras = (event) => {
           event.preventDefault();
     
           //var { name, telephone, color } = document.forms[0];
           nombrepeludo = nombredepeluditoRef.current.value;
           colorplaca = colorRef.current.value;
           telefonodueno = numerodetelefonoRef.current.value;
           const userProduct = [nombrepeludo, colorplaca, telefonodueno]
           setCompras([...userProduct])
        };*/

  const [ visibleModal, setVisibleModal ] = useState(false);

  const [plaquitas] = useState([...placas]);
  
  const [todosDescuentos, setTodosDescuentos] = useState([...descuentos]);
  const [textoActualizado, setTextoActualizado] = useState("")
  const [carrito, setCarrito] = useState([]); 
  //let carrito = useRef([]); 
  let texto = useRef(null);

  const descuento = (id) => todosDescuentos.includes(id)

  const agrega = (my_card) => {
    setCarrito([...carrito, {}])
    //carrito.current = [...carrito.current, {}];
    alert(carrito)
    console.log("carrito", carrito);
  }

  //let peludito = null;
  //let colordeplaca = null;
  //let telefono = null;
  const mostrar = (my_card) => {
    //alert(my_card.nombrepeludo,my_card.telefonodueno,my_card.colorplaca); //esto si es
    //alert(my_card.nombrepeludo);
    //const myRefValue = Card.numerodetelefonoRef.current
    //console.log(myRefValue);
    //console.log();
    //peludito = my_card.nombrepeludo
    //colordeplaca = my_card.colorplaca
    //telefono = my_card.telefonodueno
    console.log(placa_array);
    // console.log(placasnew);
    // let allplaquitas = newallplaquitas.concat(newallplaquitas);
    // console.log(newallplaquitas);
    //alert("Su pedido es: "+placa_array)
    //console.log(my_card.telefonodueno);
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
    {/*<button className="agregacarrito" onClick={agrega}>Mostrar carrito de compras</button>*/}
    {/*<button className="mostrarcarrito" onClick={mostrar}>Mostrar carrito de compras</button>*/}
    {<button className="mostrarcarrito" onClick={mostrar}>Mostrar carrito de compras</button>}
    { visibleModal && <Modal descripcion="Login Exitoso" texto="Aceptar" /> }
    </div>
    </section>
  );
}

export default App;
