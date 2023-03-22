import carrito from '../../assets/carrito.png'


export const ButonAgregar = () => {
    return (
        <div>
            <div className="contCarrito w-100">
                Agregar <span><img src={carrito} alt="carrito" className="carrito" /></span>
            </div>
        </div>
    )
}
