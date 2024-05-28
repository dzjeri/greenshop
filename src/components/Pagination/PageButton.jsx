import classes from './Pagination.module.css';

const PageButton = ({ children, paginate, disabled = false, active = false }) => {
  let className = classes.pageButton;
  if (disabled) className += ` ${classes.disabled}`
  else if (active) className += ` ${classes.active}`
  
  return (
    <button onClick={() => paginate(children)} className={className}>
      {children}
    </button>
  )
}

export default PageButton