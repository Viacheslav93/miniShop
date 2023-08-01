import styles from './Favorite.module.scss'

import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { removeFromFavorite } from '../../store/slices/favoriteSlice'
import { addToCart } from '../../store/slices/cartSlice'


export const FavoriteItem = ({id, title, price, image,}) => {

    const dispatch = useDispatch()

    const deleteProduct = () => {
        dispatch(removeFromFavorite(id))
    }

    const toCartAdd = () => {
        const product = {id, title, price, image, count:1}
        dispatch(addToCart(product))
    }

    return (

        <div className={`card ${styles.card}`}>
     
          <h3 className={styles.title}>
            {title}
          </h3>

          <Link to={`/products/${id}`}>
             <img className={styles.image} src={image} alt="product" /> 
          </Link>
        
          <p className={styles.price}>{price}$</p>
    
          <div className={styles.buttons}>
            <button onClick={deleteProduct}>Delete</button>
            <button onClick={toCartAdd}>Add to Cart</button>
          </div>
        </div>
      )
}
