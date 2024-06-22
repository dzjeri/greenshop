import { useState } from "react";
import { Search } from "../../icons";
import cn from "classnames";
import classes from "./ProductPhotos.module.css";

type ProductPhotosProps = {
  gallery: string[];
};

const ProductPhotos = ({ gallery }: ProductPhotosProps) => {
  const [chosenPhoto, setChosenPhoto] = useState(0);

  const handlePhotoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const photoId = Number(e.currentTarget.dataset.photoId);
    setChosenPhoto(photoId);
  };

  return (
    <div className={classes.productPhotos}>
      <div className={classes.side}>
        {gallery?.map((imgSrc, i) => (
          <div
            key={i}
            onClick={handlePhotoClick}
            data-photo-id={i}
            className={cn(classes.photoContainer, {
              [classes.active]: chosenPhoto === i,
            })}
          >
            <img src={imgSrc} alt={`Photo ${i + 1}`} />
          </div>
        ))}
      </div>
      <div className={classes.main}>
        <div className={classes.searchIcon}>
          <Search />
        </div>
        <div
          className={cn(classes.mainPhotoContainer, {
            [classes.mint]: chosenPhoto === 1,
            [classes.blue]: chosenPhoto === 2,
            [classes.pink]: chosenPhoto === 3,
          })}
        >
          <img src={gallery[chosenPhoto]} alt="Main Photo" />
        </div>
      </div>
    </div>
  );
};

export { ProductPhotos };
