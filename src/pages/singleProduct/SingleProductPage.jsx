import styles from './Product.module.scss'

import { useParams, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { productAPI } from '../../services/ProductService'
import {Button} from '../../UI/button/Button'
import { addToCart } from '../../store/slices/cartSlice'


export const SingleProductPage = () => {

  const {id} = useParams()

  const {data: product} = productAPI.useGetSingleProductQuery(id)

  const dispatch = useDispatch()

  const toCartAdd = (item) => {
    const newProduct = {...item, count:1}
    dispatch(addToCart(newProduct))
  }

  return (

    <div  >
      {product && 
         <div key={product.id} className={styles.card}>
          
             <h3 className={styles.title}>{product.title}</h3>

             <img className={styles.image} src={product.image} alt="mda" />

             <div className={styles.price}>
                <p>category: <span> {product.category}</span> </p> 
                <p>price: <span>{product?.price}</span> $</p>
                <p>rate: <span>{product.rating.rate}</span> </p>
                <p>count: <span>{product?.rating.count}</span> </p>
            </div>

             <p className={styles.description}>{product.description}</p>
             
             <div className={styles.btns}>
             <Link to='/'>
                 <Button className={styles.back}>Back</Button>
              </Link>
                <Button onClick={() => toCartAdd(product)} >Add to Cart</Button>
             </div>
          </div>
        }
    </div>
  )
}
