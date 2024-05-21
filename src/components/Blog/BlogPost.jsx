import { Link } from 'react-router-dom'
import { ArrowRightSharp } from '../../icons/';
import formatting from '../../utils/formatting'
import classes from './BlogPosts.module.css';

// const getRandomInt = (max) => {
//   return Math.floor(Math.random() * max);
// }

const getReadingTime = (text) => Math.floor(text.length / 8 / 60);

const BlogPost = ({ src, date, title, description, slug }) => {
  const readingTime = getReadingTime(description);

  return (
    <article className={classes.post}>
      <img src={src} alt="" />
      <span className={classes.info}>
        <time>{date}</time> | <span>Read in {readingTime} {readingTime === 1 ? 'minute' : 'minutes'}</span>
      </span>
      <h4>{title}</h4>
      <p>{formatting.shortenText(description)}</p>
      <Link to={`/blogs/${slug}`}>
        Read More
        <ArrowRightSharp />
      </Link>
    </article>
  )
}

export { BlogPost }