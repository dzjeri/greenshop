import styles from './Slider.module.css';
import plants from '../../assets/images/plants2.png';

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.info}>
        <h3>Welcome to Greenshop</h3>
        <strong>Let&apos;s Make a Better <span className={styles.colored}>Planet</span></strong>
        <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
        <button>Shop Now</button> 
      </div>
      <div className={styles.imageContainer}>
        <img src={plants} alt="Plant" />
      </div>
      <div className={styles.sliderControls}>
        <ul>
          <li><button></button></li>
          <li><button></button></li>
          <li><button></button></li>
        </ul>
      </div>
    </div>
  )
}

export default Slider