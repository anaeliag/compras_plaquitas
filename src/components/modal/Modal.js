import Button from '../boton/Button';
import './Modal.css';

function Modal(props) {
  return (
    <section className="container-modal">
      <div className='container-modal-description'>
        <p>{ props.descripcion }</p>
      </div>
      <Button texto={props.texto} />
    </section>
  )
}

export default Modal