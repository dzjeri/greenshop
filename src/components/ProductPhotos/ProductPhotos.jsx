import { useState } from 'react';
import classes from './ProductPhotos.module.css';
import Search from '../icons/Search';

const ProductPhotos = ({ gallery }) => {
  const [chosenPhoto, setChosenPhoto] = useState(0);
  if (!gallery) gallery = []; // Если картинки не грузятся (при старте кидает ошибку)

  return (
    <div className={classes.productPhotos}>
      <div className={classes.side}>
        {gallery.map((imgSrc, i) => (
          <div key={i} href="" onClick={() => setChosenPhoto(i)} >
            <img src={imgSrc} alt={`Photo ${i + 1}`} />
          </div>
        ))}
      </div>
      <div className={classes.main}>
        <div className={classes.searchIcon}>
          <Search />
        </div>
        <img src={gallery[chosenPhoto]} alt="Main Photo" />
      </div>
    </div>
  )
}

export default ProductPhotos