import '../styles/global.scss'
import styles from './styles.module.scss'

import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {Header} from './Header'
import { themeSelector } from '../selectors/selectors'


export const Layout = () => {

  const theme = useSelector(themeSelector) 

  return (

    <div className={`${styles.layout} ${theme === true ? 'dark' : ''} `}>
        <Header />

        <div className='main'>
          <Outlet />
        </div>
    </div>
  )
}
