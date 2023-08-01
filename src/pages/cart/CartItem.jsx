import styles from './Cart.module.scss'

import { useDispatch } from 'react-redux'

import { decreaseProductCount, increaseProductCount, removeFromCart } from '../../store/slices/cartSlice'


export const CartItem = ({id, title, image, price, count }, ) => {

  const dispatch = useDispatch()

  const product = {id, title, image, price, count }

  const deleteProduct = () => {
    dispatch(removeFromCart(id))
  }

  return (

     <div className={styles.card}>

        <img src={image} alt="product" />

          <h2>{title}</h2>

          <div className={styles.details}>

            <div>
             <button onClick={() => dispatch(decreaseProductCount(product))}>-</button>
             <p>{count}</p>
             <button onClick={() => dispatch(increaseProductCount(product))} >+</button>
           </div>

           <p>{price * count} $</p>
           
           <button onClick={deleteProduct} >x</button>
          </div>
        </div>
  )
}
