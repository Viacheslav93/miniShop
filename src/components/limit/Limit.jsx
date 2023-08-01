import styles from './Limit.module.scss'

import { useDispatch, useSelector } from 'react-redux'

import { productLimitOnPage } from '../../store/slices/limitSlice'
import { limitSelector } from '../../selectors/selectors'
import {Select} from '../../UI/select/Select'


export const Limit = () => {

const {limit} = useSelector(limitSelector)
const dispatch = useDispatch()

  return (

    <div className={styles.limit}>

      <h5>Products on page:</h5>
        
        <Select 
          defaultOption={limit}
          value={limit}
          onChange={e => dispatch(productLimitOnPage(e.target.value))}
          options={[3 ,6, 9]}
      />
    </div>
  )
}