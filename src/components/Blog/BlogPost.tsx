import { Link } from "react-router-dom";
import { ArrowRightSharp } from "../../icons";
import formatting from "../../utils/formatting";
import { BlogPost as TBlogPost } from "../../types";
import classes from "./BlogPosts.module.css";

const getReadingTime = (text: string) => Math.floor(text.length / 8 / 60);

const BlogPost = ({ src, date, title, description, slug }: TBlogPost) => {
  const readingTime = getReadingTime(description);

  return (
    <article className={classes.post}>
      <img src={src} alt="" />
      <span className={classes.info}>
        <time>{date}</time> |{" "}
        <span>
          Read in {readingTime} {readingTime === 1 ? "minute" : "minutes"}
        </span>
      </span>
      <h4>{title}</h4>
      <p>{formatting.shortenText(description)}</p>
      <Link to={`/blogs/${slug}`}>
        Read More
        <ArrowRightSharp />
      </Link>
    </article>
  );
};

export { BlogPost };
