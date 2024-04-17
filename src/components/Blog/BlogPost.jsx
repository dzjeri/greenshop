import { Link } from 'react-router-dom'
import ArrowRightSharp from '../icons/ArrowRightSharp';
import classes from './BlogPosts.module.css';

const shortenDescription = (description) => {
  const slice = description.slice(0, 60).trim();
  return slice < description ? slice + '...' : description;
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const BlogPost = ({ src, date, title, description, slug }) => {
  const readingTime = getRandomInt(9) + 1;

  return (
    <article className={classes.post}>
      <img src={src} alt="" />
      <span className={classes.info}>
        <time>{date}</time> | <span>Read in {readingTime} {readingTime === 1 ? 'minute' : 'minutes'}</span>
      </span>
      <h4>{title}</h4>
      <p>{shortenDescription(description)}</p>
      <Link to={`/blogs/${slug}`}>
        Read More
        <ArrowRightSharp />
      </Link>
    </article>
  )
}

export default BlogPost