function Contactos() {
        return(
            <>
            <div className="concenter">
                <div className="login-form">
                    <h2 className="textcenter">Contacto</h2>
                    <div className="formulario">
                    <label htmlFor="">Nombre</label><br />
                    <input placeholder="Nombre Completo" type="text" name="pass" id="pass" required></input>
                    </div>
                    <div className="formulario">
                    <label htmlFor="">Correo</label><br />
                    <input placeholder="Correo Electronico" type="text" name="pass" id="pass" required></input>
                    </div>
                    <div className="formulario">
                    <label htmlFor="">Mensaje</label><br />
                    <textarea name="mensaje" id=""></textarea>
                    </div>
                    <div className="formulario textcenter">
                        <button>Enviar</button>
                    </div>
                </div>
                
            </div>
            </>
        );
}
export default Contactos