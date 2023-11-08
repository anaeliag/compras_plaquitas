//import './Card.css';
import style from './Card.module.css';
import './Card.css';
import { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
// import React from 'react';

function Card(props) { // objeto const persona = { nombre: "pedro" }   persona.edad  = undefined
    console.log("me imprimi", props.descripcion);

    // addEventListener("evento a escuchar", function)
// 
    //const [ conDescuento, setConDescuento ] = useState(props.descuento ? "green" : "beige");
    const [contador, setContador] = useState(0);
    let contador2 = useRef(0); // { current: 0 }
    let imagen = useRef(null);
    let inputRef = useRef(null);
    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = emailRef.current.value
        console.log(emailRef.current.value);
        const password = passwordRef.current.value
    
        alert(email + ' ' + password);
    }
    const handleClickButton = (nombreProducto) => {
    // const handleClickButton = (evt) => {
        //alert(`Esta a punto de agregar el siguiente producto: ${nombreProducto}`)
        //setContador(contador+1);
        contador2.current++;
        console.log("ref", contador2.current);
        console.log(inputRef.current.value);
        alert('Seleccionaste'+contador2.current)
        // evt.stopPropagation()
        // evt.preventDefault()
        // console.log(evt)
        // const value_element=document.getElementById('product_card')
        // // const element=(<p>Unidades a comprar: {contador2.current}</p>);
        // value_element.render(contador2)
    }

    // const root = ReactDOM.createRoot(
    //     document.getElementById('roots')
    // );
    // const element=(<p>Unidades a comprar: {contador2.current}</p>);
    // root.render(element);
    return (   // !   true false
            <section style={{fontSize: "40px"}} className={`${style.container} ${props.descuento !== undefined && props.descuento ? style.descuento : style.normal}`}>
                <div id="product_card" className={style['container-data']}>
                    {/*<p className='image'>${props.image}</p>*/}
                    <p className={style['nombre']}>{props.nombre}</p>
                    <p className={style['description']}>{props.description}</p>
                    <p className={style['precio']}>${props.precio}</p>
                    <p className={style['id']}>{props.id}</p>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="text" ref={emailRef} />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" ref={passwordRef} />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                    <Form.Label htmlFor="inputNombre">Nombre de tu peludito</Form.Label>
                    <Form.Control
                    id="inputNombre"
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                    Escribe el nombre de tu peludito
                    </Form.Text>
                    <Form.Label htmlFor="inputNombre">Numero de telefono</Form.Label>
                    <Form.Control
                    id="inputTelefono"
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                    Escribe tu numero de telefono
                    </Form.Text>
                    <Form.Select>
                    <option>Color</option>
                    <option>Rosa</option>
                    <option>Verde</option>
                    <option>Azul</option>
                    <option>Amarillo</option>
                    </Form.Select>
                    <p>Unidades a comprar: {contador2.current}</p>
                </div>
                <div className={style["container-image"]}>
                    <img ref={imagen} src={props.src} alt={props.alt} />
                    {/*<img ref={imagen} src={image} alt={props.alt} />*/}
                </div>
                <div>
                    {/* <button onClick={() => handleClickButton(props.nombre)}>Agregar</button> */}
                    <button onClick={() => handleClickButton(props.nombre)}>Añadir</button>
                </div>
                <div className="enterName" >
                </div>
            </section>
    )
}
export default Card;


