import cn from 'classnames'
import classes from './CheckoutForm.module.css'

const Field = ({ label, placeholder, required }) => {
  return (
    <div className={classes.field}>
      <label>
        {label && <span>{label}</span>}
        {required && <span className={classes.asterisk}>*</span>}
        <input
          type="text"
          placeholder={placeholder}
          className={cn({ [classes.noLabelInput]: !label })}
        />
      </label>
    </div>
  )
}

export { Field }