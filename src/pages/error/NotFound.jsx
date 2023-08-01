import styles from './NotFound.module.scss'

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {

  const navigate = useNavigate()

  useEffect(() => {

    const timer = setTimeout(() => navigate('/'), 2000 )
    
   return () => clearTimeout(timer)

  },[navigate])

  return (
    <div className={styles.error}>
      <h1 className={styles.title}>Page is not found</h1>
      </div>
  )
}
