import styles from './Navbar.module.scss'

import { Link, useLocation } from 'react-router-dom'

import { navbarList } from './navbarData'


export const Navbar = () => {

    const {pathname} = useLocation()

  return (

    <div className={styles.navbar}>
        {navbarList?.map(({id, path, title}) => 
            <Link 
                className = {pathname === path ? styles.active : ''} 
                key={id} 
                to={path}
            >
                {title}
            </Link>
        )}
    </div>
  )
}
