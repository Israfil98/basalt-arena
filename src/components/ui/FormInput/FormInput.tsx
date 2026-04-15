import styles from './FormInput.module.scss'

interface IFormInputProps {
  label: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  defaultValue?: string
  type?: string
  placeholder?: string
}

const FormInput = ({
  label,
  icon: Icon,
  defaultValue,
  type = 'text',
  placeholder,
}: IFormInputProps) => {
  const inputId = label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={styles.field}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <span className={styles.iconWrapper} aria-hidden="true">
          <Icon className={styles.icon} />
        </span>
        <input
          id={inputId}
          type={type}
          className={styles.input}
          defaultValue={defaultValue}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default FormInput
