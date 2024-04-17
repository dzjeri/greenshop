import classes from './BlogPosts.module.css';
import BlogPost from './BlogPost';

const Blog = ({ posts }) => {
  return (
    <div className={classes.blog}>
      <div className={classes.heading}>
        <h3>Our Blog Posts</h3>
        <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
      </div>
      <ul className={classes.posts}>
        {posts.map(p => <li key={p.id}><BlogPost {...p} /></li>)}
      </ul>
    </div>
  )
}

export default Blog