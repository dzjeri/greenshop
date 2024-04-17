import classes from './Pagination.module.css';
import PageButton from './PageButton';
import BracketLeft from '../icons/BracketLeft';
import BracketRight from '../icons/BracketRight';

const Pagination = ({ currentPage, itemsLength, itemsPerPage, paginate }) => {
  const numberOfPages = Math.ceil(itemsLength / itemsPerPage);
  const numbersArray = Array.from(Array(numberOfPages), (_, x) => x + 1);

  return (
    <div className={classes.pagination}>
      {currentPage !== 1 && <PageButton
          paginate={() => paginate('<')}
        >
          <BracketLeft />
        </PageButton>
      }

      {numbersArray.map((value, i) => <PageButton 
        active={i + 1 === currentPage}
        key={i}
        paginate={paginate}
      >{value}</PageButton>)}

      {currentPage !== numberOfPages && <PageButton
          disabled={currentPage === numberOfPages}
          paginate={() => paginate('>')}
        >
          <BracketRight />
        </PageButton>
      }
    </div>
  )
}

export default Pagination