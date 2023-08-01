import styles from './Select.module.scss'


export const Select = ({options, name, onChange, defaultValue, value, className, defaultOption }) => {

  return (
    
    <div className={styles.wrapper}>

      <select 
        onChange={onChange}
        className={`${styles.select} ${className}`}
        name={name}
        defaultValue={defaultValue}
        value={value}
      >
        <option selected  disabled>{defaultOption}</option>
          {options?.map(item => 
            <option 
              key={item} 
              value={item}>{item}</option>
            )}
            
      </select>
    </div>
  )
}
