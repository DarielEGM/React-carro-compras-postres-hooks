import Button from './Button'

const styles={
    producto:{
        border: 'Solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
        width: '30%',
        padding: '10px 50px',
        borderRadios: '5px'
    },
    img:{
        width: '100%'
    }
}

const Producto = ({infoProducto, agregarAlCarro}) =>{   
    return(
        <div style={styles.producto}>
            <img alt={infoProducto.name} src={infoProducto.img} style={styles.img}/>
            <h3>{infoProducto.name}</h3>
            <p>Precio: {infoProducto.price}</p> 
            <Button onClick={() => agregarAlCarro(infoProducto)}>Agregar al Carro</Button>
        </div>
    )
}

export default Producto

