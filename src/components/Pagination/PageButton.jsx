import cn from 'classnames';
import classes from './Pagination.module.css';

const PageButton = ({ children, paginate, disabled = false, active = false }) => {  
  return (
    <button
      onClick={() => paginate(children)}
      className={cn(classes.pageButton, {
        [classes.disabled]: disabled,
        [classes.active]: active
      })}>
      {children}
    </button>
  )
}

export { PageButton }