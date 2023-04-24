import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles={
    carro:{
        backgroundColor:'#359A2C',
        color:'#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    bubble:{
        position:'relative',
        left:15,
        top:20
    }

}

const Carro = ({carro, esCarroVisible, mostrarCarro}) =>{
    console.log(esCarroVisible);
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
    return(
        <div>
            <span style={styles.bubble}>
                 {cantidad !==0 ?
                    <BubbleAlert value= {cantidad}/>
                    : null
                    }     
            </span>
            <button style={styles.carro} onClick={mostrarCarro}>
                Carro
            </button>
            {
                esCarroVisible ? <DetallesCarro carro={carro}/>
                : null
            }
        </div>
    )
}


export default Carro

