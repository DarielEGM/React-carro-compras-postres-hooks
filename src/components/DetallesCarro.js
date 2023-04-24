const styles = {
    detallesCarro:{
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 20,
        boxShadow:'1px 5px 5px rgb(0, 0, 0, 0.3)',
        borderRadius: '25px',
        width: '300px',
        right: 50,
    },
    ul:{
        margin: 0,
        padding: 0
    },
    producto:{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px'
    }
}


const DetallesCarro = ({carro}) =>{
    return(
        <div style={styles.detallesCarro}>
            <ul style={styles.ul}>
            {carro.map(x=>
                <li style={styles.producto} key={x.name}>
                    <img alt={x.name} src={x.img} width='50' height='32'></img>
                    {x.name} <span>{x.cantidad}</span>
                        
                </li>)
            }
            </ul>
        </div>
    )

}

export default DetallesCarro