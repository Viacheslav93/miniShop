import styles from './Input.module.scss'


export const InputField = ({type, label, value, onChange, name, error, className, helper, placeholder}) => {


  return (

    <div className={styles.wrapper}>

        <input 
        className={`${styles.input} ${className}`}
        name={name}
        type={type} 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        />

        <label className={`${styles.label}`}>{label}</label>

        <span className={error ? styles.error : styles.helpers}>{error ? error : helper}</span>
    </div>
  )
}
