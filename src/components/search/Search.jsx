import styles from './Search.module.scss'

import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import debounce from 'lodash.debounce'

import { InputField } from '../../UI/input/InputField'
import { searchByTitle } from '../../store/slices/filterSlice'


export const Search = () => {

   const [search, setSearch] = useState('')

   const dispatch = useDispatch()

   const optimisationSearch = useCallback(debounce(value =>
      dispatch(searchByTitle(value)), 400),
    [])

    const onChangeSearch = (e) => {
      setSearch(e.target.value)
      optimisationSearch(e.target.value)
   }
  
   const clearSearch = () => {
      dispatch(searchByTitle(''))
      setSearch('')
   }

  return (

     <div className={styles.search}>

          <InputField 
             placeholder={'Search...'}
             value={search}
             onChange={onChangeSearch}
          />

         {search && 
           <button 
             onClick={clearSearch}
             className={styles.closeSearch}
           >x</button>
         } 
        </div>
  )
}
