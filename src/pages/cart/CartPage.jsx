import styles from './Cart.module.scss'

import { useSelector } from 'react-redux'

import { CartItem } from './CartItem';


export const CartPage = () => {

  const {cart} = useSelector(state => state.cartReducer)

 const totalCount = cart?.reduce((res, product) => res + (product.price * product.count ) , 0).toFixed(2)

  return (

    <div className={styles.cart}> 
      <div className= {`container ${styles.cartContainer}`}>

      {
      cart?.length < 1 
      ? 
      <h1 className={styles.title}>The cart is empty</h1>
      :
      <>
        <div className={styles.cards}>
          {cart?.map(item => <CartItem  key={item.id} {...item} />)}
        </div>
        
        <p className={styles.totalSum}>Total price: <span>{totalCount}$</span></p>
      </>
      }
      </div>
    </div>
  )
}
