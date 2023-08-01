import styles from './Filter.module.scss'

import { useDispatch, useSelector } from 'react-redux'

import { useGetAllCategoriesQuery } from '../../services/ProductService'
import { filterCategory } from '../../store/slices/filterSlice'


export const Filter = () => {

  const {activeCategory} = useSelector(state => state.filterReducer.filter)
  const dispatch = useDispatch()

  const {data = [], error} = useGetAllCategoriesQuery()

  const displayCategories = ['all', ...data]

  return (

    <div className={styles.filter}>
      
      {error && <h1>Categories didn't download</h1>}
      { displayCategories?.map(category => 
        <h3 
          className={`${styles.category} ${activeCategory === category ? styles.active : ''} `}
          key={category}
          onClick={() => dispatch(filterCategory(category))}
        >
            {category}
        </h3>
      )}
    </div>
  )
}
