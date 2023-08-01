import styles from './Favorite.module.scss'

import { useSelector } from 'react-redux'

import { FavoriteItem } from './FavoriteItem'


export const FavoritePage = () => {

  const {favorites} = useSelector(state => state.favoriteReducer)

  return (

    <div className={styles.favorite}>

      {favorites?.length < 1 && <h1>You dont have any favorites products</h1>}
      
      <div className={styles.cards}>
        {favorites?.map(product => <FavoriteItem key={product.id} {...product} />)}
      </div>
    </div>
  )
}
