import styles from './Product.module.scss'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'

import {Button} from '../../UI/button/Button'
import {Tooltip} from '../../UI/tooltip/Tooltip'
import { addToCart} from '../../store/slices/cartSlice'
import { addToFavorite } from '../../store/slices/favoriteSlice'
import { cartSelector } from '../../selectors/selectors'

import favoriteIcon from '../../assets/images/product/favorite.svg'
import cartIcon from '../../assets/images/product/cart.svg'
import addedIcon from '../../assets/images/product/addedimg.svg'
import redFavorite from '../../assets/images/product/redfFavorite.svg'


export const ProductItem = ({id, title, price, image, category}) => {

  const cart = useSelector(cartSelector)
  const {favorites} = useSelector(state => state.favoriteReducer)

  const dispatch = useDispatch()

  const findProductCart = cart?.find(item => item.id === id)
  const findProductFavorite = favorites?.find(item => item.id === id)

  const ToCartAdd = () => {
    const product = { id, title, price, image, count:1}
    dispatch(addToCart(product))
  }

  const ToFavoriteAdd = () => {
    const product = {id, title, price, image}
    dispatch(addToFavorite(product))
  }

  return (

    <div className={`card ${styles.card}`}>
 
      <h3 className={styles.title}>
          {title.length > 25 
            ? 
              <Tooltip content={title}>{title.slice(0, 25) + '...'}</Tooltip>
            :
              title
          }   
      </h3>

      <img className={styles.image} src={image} alt="product" />

      <p className={styles.price}>{price}$</p>
      <p>{category}</p>

        <Link to={`/products/${id}`}>
          <Button> Show more </Button>
        </Link>
   
      <div className={styles.icons}>
            <img onClick={ToFavoriteAdd} src={findProductFavorite ? redFavorite :  favoriteIcon} alt="favoriteIcon" />
            <img onClick={ToCartAdd} src={ findProductCart ? addedIcon : cartIcon} alt="cartIcon" />
            <span>{findProductCart?.count}</span>
      </div>
    </div>
  )
}
