import styles from './FormTextarea.module.scss'

interface IFormTextareaProps {
  label: string
  defaultValue?: string
  placeholder?: string
}

const FormTextarea = ({
  label,
  defaultValue,
  placeholder,
}: IFormTextareaProps) => {
  const textareaId = label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={styles.field}>
      <label htmlFor={textareaId} className={styles.label}>
        {label}
      </label>
      <textarea
        id={textareaId}
        className={styles.textarea}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </div>
  )
}

export default FormTextarea
