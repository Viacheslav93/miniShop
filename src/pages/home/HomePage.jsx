import styles from './Home.module.scss'

import { ProductsPage } from '../products/ProductsPage'
import {Filter} from '../../components/filter/Filter'
import {Limit} from '../../components/limit/Limit'
import {Sort} from '../../components/sort/Sort'
import {BurgerMenu} from '../../components/burgerMenu/BurgerMenu'


export const HomePage = () => {

  return (
    
    <div className={styles.home}>
      <div className={styles.head}>
        <div className={`container ${styles.headContainer}`}>

        <div className={styles.filter}><Filter /></div>
        <div className={styles.burger}>
          <BurgerMenu>
            <Filter />
          </BurgerMenu>
          </div>
          <div><Sort /></div>
          <div><Limit /></div>

        </div>``
      </div>
      
      <div className="container">
         <ProductsPage />
      </div>
    </div>
  )
}
