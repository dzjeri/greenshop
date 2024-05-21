import { useState } from "react";
import cn from "classnames";
import { Star } from "../../icons/";
import classes from "./ProductDescription.module.css";

const ProductDescription = ({ description, reviews }) => {
  const [activeTab, setActiveTab] = useState(1);

  const marks = [1, 2, 3, 4, 5];

  const handleTabClick = (tabNumber) => setActiveTab(tabNumber);

  return (
    <div className={classes.productDescription}>
      <div className={classes.tabButtons}>
        <button
          onClick={() => handleTabClick(1)}
          className={cn(classes.tabButton, {
            [classes.active]: activeTab === 1,
          })}
        >
          Product Description
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={cn(classes.tabButton, {
            [classes.active]: activeTab === 2,
          })}
        >
          Reviews ({reviews.length})
        </button>
      </div>
      <div className={classes.tabContent}>
        <div
          className={cn(classes.description, {
            [classes.active]: activeTab === 1,
          })}
        >
          {description}
        </div>
        <div
          className={cn(classes.reviews, { [classes.active]: activeTab === 2 })}
        >
          {reviews.map((r) => (
            <div key={r.id} className={classes.review}>
              <div className={classes.reviewHeader}>
                <b className={classes.reviewAuthor}>{r.author}</b>
                <div className={classes.reviewRating}>
                  {marks.map((m) => (
                    <div
                      key={m}
                      className={cn(classes.reviewStar, {
                        [classes.filled]: r.mark >= m,
                      })}
                    >
                      <Star />
                    </div>
                  ))}
                </div>
                <time className={classes.reviewDate}>{r.date}</time>
              </div>
              <p className={classes.reviewComment}>{r.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProductDescription };
