import classes from "./Slider.module.css";
import plants from "../../assets/images/plants2.png";

const SLIDER_BUTTONS = [1, 2, 3];

type SliderProps = {
  // Норм HTMLElement добавил? https://stackoverflow.com/a/57028546/23569262
  shopRef: React.MutableRefObject<null | HTMLElement>;
};

const Slider = ({ shopRef }: SliderProps) => {
  const handleShopClick = () => {
    shopRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={classes.slider}>
      <div className={classes.info}>
        <h3>Welcome to Greenshop</h3>
        <strong>
          Let&apos;s Make a Better{" "}
          <span className={classes.colored}>Planet</span>
        </strong>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <button onClick={handleShopClick}>Shop Now</button>
      </div>
      <div className={classes.imageContainer}>
        <img src={plants} alt="Plant" />
      </div>
      <div className={classes.sliderControls}>
        <ul>
          {SLIDER_BUTTONS.map((number) => (
            <li key={number}>
              <button></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Slider };
