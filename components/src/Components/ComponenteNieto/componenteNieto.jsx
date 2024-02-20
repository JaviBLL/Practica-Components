
function ComponenteNieto ({nombre, children, cambiarMensaje}) {
    return (
    <>
        <p>Componente Nieto</p>
        <button onClick={(_) => cambiarMensaje("mensaje desde el nieto" )}>Cambiar Mensaje</button>
        <p>Este es el nombre en ComponenteNieto: {nombre}</p>
        {children}
    </>
    );
};

export default ComponenteNieto;