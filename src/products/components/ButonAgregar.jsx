import carrito from '../../assets/carrito.png'


export const ButonAgregar = () => {
    return (
        <div>
            <div className="contCarrito ">
                Agregar <span><img src={carrito} alt="carrito" className="carritoButonAgregar" /></span>
            </div>
        </div>
    )
}
