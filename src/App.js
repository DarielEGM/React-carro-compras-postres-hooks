import Productos from './components/Productos'
import Title from './components/Title'
import Layout from './components/Layout'
import NavBar from './components/NavBar'
import { useState } from 'react'


const App = () =>{
    const cargarProductos = [   
      {name: 'Helado', price: '5', img: '/productos/helado.jpg'},
      {name: 'Paleta', price: '8', img: '/productos/paleta.png'},
      {name: 'Bombones', price: '15', img: '/productos/bombones.jpg'}
    ]

    const[carro, setCarro] = useState([])
    const agregarAlCarro = (infoProducto) => {
      if(carro.find(x => x.name===infoProducto.name)){
        const newCarro = carro.map(x => x.name === infoProducto.name
          ? ({
            ...x,
            cantidad: x.cantidad + 1
          })
          :x)
          setCarro(newCarro)
      } 
      else {
      setCarro(carro.concat({...infoProducto, cantidad: 1}))
      }
    }

    const [esCarroVisible, setCarroVisible] = useState(true)
    const mostrarCarro = (carro) =>{
      if(carro.length===0){
        return
      }
      setCarroVisible(!esCarroVisible)
    }

    
  return(
    <div>
      <NavBar 
      carro={carro} 
      esCarroVisible={esCarroVisible}
      mostrarCarro={mostrarCarro}/> 

      <Layout>
        <Title/>
        <Productos cargarProductos={cargarProductos} 
        agregarAlCarro={agregarAlCarro}/>
      </Layout>
    </div>
  )
}

export default App
