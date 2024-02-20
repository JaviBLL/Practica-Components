import ComponenteNieto from "../ComponenteNieto/componenteNieto";

function ComponenteHijo ({nombre, cambiarMensaje}) {
    return(
    <>
        <p>Componente Hijo</p>
        <p>concadena lo siguiente: {nombre}</p>
        <button onClick={(_) => cambiarMensaje("mensaje desde el hijo" )}>Cambiar Mensaje</button>
        <ComponenteNieto nombre="Javiera" cambiarMensaje={cambiarMensaje}>
            <span>innerHtml</span>
        </ComponenteNieto>
        <ComponenteNieto nombre="Emma" cambiarMensaje={cambiarMensaje}>
            <span>innerHtml</span>
        </ComponenteNieto>
    </>
    );
};

export default ComponenteHijo;