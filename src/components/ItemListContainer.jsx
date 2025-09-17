import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function ItemListContainer() {

    const [productos,setProductos]=useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products')
                setProductos(response.data)
            }
            catch (error){
                console.error("Error al cargar los productos:",error)
            }
        }
        fetchProducts()
    }, [])
    

  return (
    <div>
        <h2 className='titulo-pagina'>Productos</h2>
        <div></div>
        <div className='contenedor-productos'>
            {productos.map((prod) => (
                <Link to={`/producto/${prod.id}`} className='item-producto' key={prod.id}>
                    <img className='producto-imagen' src={prod.image} alt={prod.title} />
                    <div className="producto-detalles">
                        <h3 className="producto-titulo">{prod.title}</h3>
                        <p className="producto-precio">${prod.price}</p>
                        <button className="producto-agregar">Agregar</button>
                    </div>
                </Link>
            ))}

        </div>
    </div>
  )
}

export default ItemListContainer