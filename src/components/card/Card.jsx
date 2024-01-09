//import './Card.css';
import style from './Card.module.css';
import './Card.css';
import { useState, useRef, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
/*import { Button } from 'bootstrap';*/
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

let newallplaquitas = [];
let i = null;
let id = null;
let idvar = null;
let nombrepeludo = null;
let colorplaca = null;
let telefonodueno = null;
let precio_plaquita = null;
let tipo_plaquita = null
//let placa_array=[{nombrepeludo,colorplaca,telefonodueno,precio_plaquita,tipo_plaquita,id}];
let placa_array=[];
//let index=0

let placasnew = [];

function Card(props) { // objeto const persona = { nombre: "pedro" }   persona.edad  = undefined
    //console.log("me imprimi", props.nombre);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }
    // addEventListener("evento a escuchar", function)
// 
    //const [ conDescuento, setConDescuento ] = useState(props.descuento ? "green" : "beige");
    const [contador, setContador] = useState(0);
    let varcontid = useRef(0); 
    let contador2 = useRef(0); // { current: 0 }
    let imagen = useRef(null);
    let inputRef = useRef(null);
    //const mostrar = () => {
    const nombredepeluditoRef = useRef(null);
    const numerodetelefonoRef = useRef(null);
    const colorRef = useRef(null);
    const [modalShow, setModalShow] = useState(false);

   /*useEffect (() => {
        let nameElement = nombredepeluditoRef.current;
        let numberElement = numerodetelefonoRef.current;
        let colorElement = colorRef.current;
        console.log(nameElement,numberElement,colorElement); // logs <div>I'm an element</div>
      }, []);//}*/

    const handleSubmit = (event) => {
        //event.preventDefault();

        // const nombrepeludo = nombredepeluditoRef.current.value
        //nombrepeludo = nombredepeluditoRef.current.value
        id = id + 1;
        nombrepeludo = nombredepeluditoRef.current.value
        colorplaca = colorRef.current.value
        telefonodueno = numerodetelefonoRef.current.value
        precio_plaquita = props.precio
        tipo_plaquita = props.nombre

        placa_array = [...placa_array, {id,nombrepeludo,colorplaca,telefonodueno,precio_plaquita,tipo_plaquita}];

        // placa_array.nombrepeludo = nombredepeluditoRef.current.value
        // //colorplaca = colorRef.current.value
        // placa_array.colorplaca = colorRef.current.value
        // //telefonodueno = numerodetelefonoRef.current.value
        // placa_array.telefonodueno = numerodetelefonoRef.current.value

        // placa_array.precio_plaquita = props.precio

        // placa_array.tipo_plaquita = props.nombre

        // console.log(nombrepeludo,telefonodueno,colorplaca);
        //event.target.reset(); //add this line to remove data off your form
    }

    const handleClickButton = (nombreProducto,event) => {
        //const handleClickButton = (evt) => {
        //alert(`Esta a punto de agregar el siguiente producto: ${nombreProducto}`)
        //setContador(contador+1);

        contador2.current++;
        console.log("ref", contador2.current);
        //console.log(inputRef.current.value);
        alert('Seleccionaste'+contador2.current)
        console.log(nombrepeludo)
        //this.setState(prevState => ({ show: !prevState.show }));
    }

    // const root = ReactDOM.createRoot(
    //     document.getElementById('roots')
    // );
    // const element=(<p>Unidades a comprar: {contador2.current}</p>);
    // root.render(element);
    //index++;

    return (   // !   true false
            <section style={{fontSize: "40px"}} className={`${style.container} ${props.descuento !== undefined && props.descuento ? style.descuento : style.normal}`}>
                <div id="product_card" className={style['container-data']}>
                    {/*<p className='image'>${props.image}</p>*/}
                    <p className={style['nombre']}>{props.nombre}</p>
                    <p className={style['description']}>{props.description}</p>
                    <p className={style['precio']}>${props.precio}</p>
                    <p className={style['id']}>{props.id}</p>
                    {/*<form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="nombre" >Nombre (peludito)</label>
                            <input id="inputNombre" type="text" ref={nombredepeluditoRef} />
                            <Form.Text id="passwordHelpBlock" muted>
                                Escribe el nombre de tu peludito.
                            </Form.Text>
                        </div>
                        <div>
                            <p></p>
                            <label htmlFor="telefono">Telefono (dueño)</label>
                            <input id="inputTelefono" type="text" ref={numerodetelefonoRef} />
                            <Form.Text id="passwordHelpBlock" muted>
                                Escribe el numero que quedara impreso en la plaquita.
                            </Form.Text>
                        </div>
                        <p></p>
                        <div>
                            <label htmlFor="color">Color</label>
                            <select className="form-control" id="ntype" required ref={colorRef}>
                                <option value = "">Ninguno</option>
                                <option value = "rosa">Rosa</option>
                                <option value = "verde">Verde</option>
                                <option value = "azul">Azul</option>
                                <option value = "amarillo">Amarillo</option>
                            </select>
                        </div>
                        <p></p>
                    </form>
                    <div>
                        <button type="submit">Submit</button>
                    </div>*/}
                    <p>Unidades a comprar: {contador2.current}</p>
                </div>
                <div className={style["container-image"]}>
                    <img ref={imagen} src={props.src} alt={props.alt} />
                    {/*<img ref={imagen} src={image} alt={props.alt} />*/}
                </div>

                <>
                {/*<button id="modalitos" className="flex flex-wrap gap-4" variant="primary" onClick={handleShow}>*/}
                <Button variant="primary" onClick={handleShow}>
                    Elegir
                </Button>
                    <Modal className="my-modal" show={show} onHide={handleClose} style={{ overlay: { background: 'plum', fontSize: "40px"} }}>
                    <Modal.Header closeButton>
                    <Modal.Title>Elige tu plaquita!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div>
                        <label htmlFor="nombre" >Nombre (peludito)</label>
                        <input id="inputNombre" type="text" ref={nombredepeluditoRef} />
                            <Form.Text id="passwordHelpBlock" muted>
                                Escribe el nombre de tu peludito.
                            </Form.Text>
                    </div>
                    <div>
                    <p></p>
                        <label htmlFor="telefono">Telefono (dueño)</label>
                        <input id="inputTelefono" type="text" ref={numerodetelefonoRef} />
                            <Form.Text id="passwordHelpBlock" muted>
                                Escribe el numero que quedara impreso en la plaquita.
                            </Form.Text>
                    </div>
                    <p></p>
                    <div>
                        <label htmlFor="color">Color</label>
                        <select className="form-control" id="ntype" required ref={colorRef}>
                            <option value = "">Ninguno</option>
                            <option value = "rosa">Rosa</option>
                            <option value = "verde">Verde</option>
                            <option value = "azul">Azul</option>
                            <option value = "amarillo">Amarillo</option>
                        </select>
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    {/*<button variant="primary" onClick={handleClose,handleSubmit}></button>*/}
                    <button variant="primary" onClick={() => {
                        handleClose();handleSubmit();handleClickButton(props.nombre);
                    }}>
                        Save Changes
                    </button>
                    </Modal.Footer>
                </Modal>
                </>
                {/*<div>
                    <button onClick={() => handleClickButton(props.nombre)}>Añadir</button>
                </div>*/}
                <div className="enterName" >
                </div>
            </section>
            
    )
}
export default Card;
export {nombrepeludo};
export {colorplaca};
export {telefonodueno};
export {placa_array};
export {placasnew};
export {newallplaquitas};


