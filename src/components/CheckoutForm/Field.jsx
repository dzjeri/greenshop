import classes from './CheckoutForm.module.css'

const Field = ({ label, placeholder, required }) => {
  return (
    <div className={classes.field}>
      {label
        ? <label>
            {label}
            {required && <span className={classes.asterisk}>*</span>}
            <input type="text" placeholder={placeholder} />
          </label>
        : <>
            <input className={classes.noLabelInput} type="text" placeholder={placeholder} />
          </>}
    </div>
  )
}

export default Field