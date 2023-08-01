import styles from './Button.module.scss'


export const Button = ({children, className, type, disabled, ...props}) => {

  return (

    <button
        className={`${styles.button} ${className}`}
        type={type}
        disabled={disabled}
        {...props}
     >
        {children}
     </button>
  )
}
