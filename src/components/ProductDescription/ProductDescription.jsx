import { useState } from 'react'
import Star from '../icons/Star';
import classes from './ProductDescription.module.css'

const ProductDescription = ({ description, reviews }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => setActiveTab(tabNumber);

  return (
    <div className={classes.productDescription}>
      <div className={classes.tabButtons}>
        <button
          onClick={() => handleTabClick(1)}
          className={activeTab === 1 ? `${classes.tabButton} ${classes.active}` : classes.tabButton}
        >Product Description</button>
        <button
          onClick={() => handleTabClick(2)}
          className={activeTab === 2 ? `${classes.tabButton} ${classes.active}` : classes.tabButton}
        >Reviews ({reviews.length})</button>
      </div>
      <div className={classes.tabContent}>
        <div className={activeTab === 1 ? `${classes.description} ${classes.active}` : classes.description}>
          {description}
        </div>
        <div className={activeTab === 2 ? `${classes.reviews} ${classes.active}` : classes.reviews}>
          {reviews.map(r => (
            <div key={r.id} className={classes.review}>
              <div className={classes.reviewHeader}>
                <b className={classes.reviewAuthor}>{r.author}</b>
                <div className={classes.reviewRating}>
                  <div className={r.mark >= 1 ? `${classes.reviewStar} ${classes.filled}` : classes.reviewStar}>
                    <Star />
                  </div>
                  <div className={r.mark >= 2 ? `${classes.reviewStar} ${classes.filled}` : classes.reviewStar}>
                    <Star />
                  </div>
                  <div className={r.mark >= 3 ? `${classes.reviewStar} ${classes.filled}` : classes.reviewStar}>
                    <Star />
                  </div>
                  <div className={r.mark >= 4 ? `${classes.reviewStar} ${classes.filled}` : classes.reviewStar}>
                    <Star />
                  </div>
                  <div className={r.mark >= 5 ? `${classes.reviewStar} ${classes.filled}` : classes.reviewStar}>
                    <Star />
                  </div>
                </div>
                <time className={classes.reviewDate}>{r.date}</time>
              </div>
              <p className={classes.reviewComment}>{r.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDescription