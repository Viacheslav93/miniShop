import styles from './styles.module.scss'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Navbar } from '../components/navbar/Navbar'
import { Search } from '../components/search/Search'
import { Theme } from '../components/theme/Theme'

import logo from '../assets/images/header/logo.svg'
import cartIcon from '../assets/images/header/cart.svg'


export const Header = () => {

  const {cart} = useSelector(state => state.cartReducer)

  const totalCount = cart?.reduce((count, product) => count + product.count, 0 )

  return (

    <header className={styles.header}>
      <div className={styles.fill}></div>
      <div className={`container ${styles.container}`}>

        <div className={styles.logo}>
          <Link to={'/'}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <Navbar />
        <div className={styles.search}>
          <Search />
        </div>
        <Theme />

        <div className={styles.cart}>
          <Link to={'/cart'}>
            <img  src={cartIcon} alt="cartIcon" /> 
            <span>{totalCount}</span></Link>
        </div>

      </div>
    </header>
  )
}
