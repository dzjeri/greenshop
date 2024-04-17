import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import blogposts from '../../data/blogposts.json'
import classes from './Blogpost.module.css'

const breadcrumbsLinks = [
  {
    href: '/',
    text: 'Home'
  },
  {
    href: '/blogs',
    text: 'Blogs'
  },
  {
    href: null,
    text: 'Blog name'
  }
]

const loader = async ({ request, params }) => {
  // const { data: blogs } = await axios.get('https://gist.githubusercontent.com/Korgehah/97a70084d5c1566b0349b77663a556b5/raw/3b6ed5e6dc9801cd1cc472b83f6f3a49660b0e3b/blog.json')
  // const blogpost = blogs.find(b => b.slug === params.name)
  // return blogpost;
  const blogpost = blogposts.find(b => b.slug === params.name);
  return blogpost;
}

const Blogpost = () => {
  const blogpost = useLoaderData();
  const { title, src, date, description } = blogpost;

  return (
    <div className={classes.blogpost}>
      <div className={classes.breadcrumbs}>
        <Breadcrumbs links={breadcrumbsLinks} />
      </div>
      <div className={classes.blogHeader}>
        <h2 className={classes.title}>{title}</h2>
        <time className={classes.date}>Date added: {date}</time>
      </div>
      <div className={classes.imageContainer}>
        <img src={src} alt='Blogpost photo' />
      </div>
      <p className={classes.description}>{description}</p>
    </div>
  )
}

export default Blogpost
export { loader }