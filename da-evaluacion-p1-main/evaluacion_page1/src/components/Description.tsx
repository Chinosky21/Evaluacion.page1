import './Description.css';
import image_tech from '../assets/p1.jpg';
function Description(){
    return(
<div className="login-container">
      <div className="login-form">
        <h2>Desarrollo de Aplicaciones</h2>
        <h3>Proyecto Final #1</h3>
        <fieldset className='legend'>
            <legend>Requerimientos de Entrega</legend>
          <p className='login-p'>1. Crear un componente de tipo NavBar con los enlaces de (Inicio, Nosotros,
          Productos y Contacto)</p>
          <p className='login-p'>2. Crear un componente de Contacto (Formulario con campos de captura como:
            nombre, correo y mensaje y boton en envio)
            Solo debe ser el componente el formulario no funciona</p>
            <p className='login-p'>3. Crear un componente de tipo Slider que cargue 4 imagenes
                de forma dinamica (utilizar variables para el manejo de imagenes)
            </p>
            <p className='login-p'>4. Crear un componente que cambie los datos cada cierto tiempo
                por ejemplo (Peliculas, series, animales o comida, etc.)
            </p>

        </fieldset>
      </div>
      <div className="login-image">
        <img src={image_tech} alt="Login visual" />
      </div>
    </div>
    );
}
export default Description