import classes from "./BlogPosts.module.css";
import { BlogPost } from "./BlogPost";
import { BlogPost as TBlogPost } from "../../types";

type BlogProps = {
  posts: TBlogPost[];
};

const Blog = ({ posts }: BlogProps) => {
  return (
    <div className={classes.blog}>
      <div className={classes.heading}>
        <h3>Our Blog Posts</h3>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <ul className={classes.posts}>
        {posts.map((p) => (
          <li key={p.id}>
            <BlogPost {...p} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Blog };
