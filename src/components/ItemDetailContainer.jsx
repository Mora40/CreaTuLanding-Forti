import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from 'axios'
import NavBar from "./NavBar"
// import ItemListContainer from "./ItemListContainer"

function ItemDetailContainer() {
  
  const {id}= useParams()
  const [producto,setProducto]=useState({
          "id": 0,
          "title": "string",
          "price": 0.1,
          "description": "string",
          "category": "string",
          "image": "http://example.com",
          "rating": {"rate": 0, "count": 0}
        })

  useEffect(() => {
    const fetchProduct = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/'+id)
            setProducto(response.data)
        }
        catch (error){
            console.error("Error al cargar los productos:",error)
        }
    }
    fetchProduct()
  }, [])

  return (
    <div className="detalle-contenedor">
      <NavBar/>
      <h2 className='titulo-pagina'>Detalle del producto</h2>
      <div>
        <img src={producto.image} alt={producto.title} className="imagen-detalle" />
        <div className="producto-detalles-container">
          <div className="titulo-detalle">{producto.title}</div>
          <div className="descripcion-detalle">{producto.description}</div>
          <div className="categoria-detalle">{producto.category}</div>
          <div className="precio-detalle">${producto.price}</div>
          <div className="rating-detalle">Puntaje: {producto.rating.rate}</div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetailContainer