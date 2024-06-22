import cn from "classnames";
import classes from "./CheckoutForm.module.css";

type FieldProps = {
  label?: string;
  placeholder?: string;
  required?: boolean;
};

const Field = ({ label, placeholder, required }: FieldProps) => {
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
  );
};

export { Field };
