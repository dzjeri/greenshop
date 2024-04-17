import classes from './CheckoutForm.module.css'
import Field from './Field'

const CheckoutForm = () => {
  return (
    <div className={classes.checkoutForm}>
      <h3 className={classes.heading}>Billing Address</h3>
      <form>
        <div className={classes.row}>
          <Field label='First Name' required={true} />
          <Field label='Last Name' required={true} />
        </div>
        <div className={classes.row}>
          <Field label='Country / Region' required={true} />
          <Field label='Town / City' required={true} />
        </div>
        <div className={classes.row}>
          <Field label='Street Address' required={true} placeholder='House number and street name' />
          <Field placeholder='Appartment, suite, unit, etc. (optional)' />
        </div>
        <div className={classes.row}>
          <Field label='State' required={true} />
          <Field label='Zip' required={true} />
        </div>
        <div className={classes.row}>
          <Field label='Email address' required={true} />
          <Field label='Phone Number' required={true} />
        </div>
        <div className={classes.addressCheckboxField}>
          <label>
            <input type='checkbox' />
            <span className={classes.customCheckbox}></span>
            Ship to a different address?
          </label>
        </div>
        <div className={classes.orderNotesField}>
          <label>
            Order notes (optional)
            <textarea></textarea>
          </label>
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm