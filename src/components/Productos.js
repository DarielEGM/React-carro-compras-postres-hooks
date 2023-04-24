import Producto from './Producto'

const styles={
    productos:{
        display: 'flex',
        flexDirection:'row',
        jistifyContent: 'space-between'
    }
}

const Productos = ({cargarProductos, agregarAlCarro}) => {
    return(
        <div>
            <div style={styles.productos}>
                {cargarProductos.map(producto =>
                    <Producto
                    agregarAlCarro={agregarAlCarro}
                    key={producto.name}
                    infoProducto={producto}/>
              ) } 
              
            </div>    

        </div>
    )
}

export default Productos