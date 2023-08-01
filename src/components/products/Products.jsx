import styles from './Product.module.scss'

import { useDispatch, useSelector } from 'react-redux'

import { ProductItem } from './ProductItem'
import { useGetAllProductsQuery } from '../../services/ProductService'
import {Loader} from '../loader/Loader'
import { Button } from '../../UI/button/Button'
import { filterSelector, limitSelector, sortSelector } from '../../selectors/selectors'
import { productLimitOnPage } from '../../store/slices/limitSlice'


export const Products = () => {

  const {title, activeCategory } = useSelector(filterSelector)
  const {limit} = useSelector(limitSelector)
  const {sort} = useSelector(sortSelector)

  const dispatch = useDispatch()

  const category = activeCategory === 'all' ? '' : `category/${activeCategory}`
  const sortBy = sort.includes('new') ? 'desc' : 'asc'

    const {data: products, isLoading, error} = useGetAllProductsQuery( {limit, category, sortBy}, {
      pollingInterval: 3000000
    })

    const loadPage = () => {
      dispatch(productLimitOnPage(+limit + 3))
    }

  return (

    <div className={styles.products}>

        <div className={`container ${styles.container}`}>

            <div className={styles.cards}>
                {error && <h1>Server's error</h1>}

                {products?.filter(item => item.title.toLowerCase().includes(title.toLowerCase()))
                          .map(product => <ProductItem key={product.id} {...product} />)}
            </div>

            {isLoading && <Loader />}
            
            {products?.length >= limit &&              
              < Button  onClick={loadPage}>Show more</Button>
            }
        </div>
    </div>
  )
}
