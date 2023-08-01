import styles from './Sort.module.scss'

import { useDispatch, useSelector } from 'react-redux'

import { Select } from '../../UI/select/Select'
import { sortProducts } from '../../store/slices/sortSlice'
import {sortSelector} from '../../selectors/selectors'


export const Sort = () => {

  const {sort} = useSelector(sortSelector)

  const dispatch = useDispatch()

  return (

    <div className={styles.sort}>

      <h5>Sort by:</h5>

     <Select 
        defaultOption={sort}
        options={[ 'new products', 'old products']}
        value={sort}
        onChange={(e) => dispatch(sortProducts(e.target.value))}
     />
    </div>
  )
}
