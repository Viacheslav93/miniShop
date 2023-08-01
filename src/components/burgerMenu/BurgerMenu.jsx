import styles from './Burger.module.scss'

import { useState } from 'react'


export const BurgerMenu = ({children}) => {

  const [show, setShow] = useState(false)

  return (
  
    <div  className={styles.burgerMenu}>
      <button 
        onClick={() => setShow(prev => !prev)} 
        className={`${styles.burger} ${show ? styles.active : ''}`}
      >
        <span></span>
      </button>

      <div 
        className={`blockWrapper  ${styles.content} ${show ? styles.active : ''}`}
      >
       {children}
      </div>
    </div>
  )
}
