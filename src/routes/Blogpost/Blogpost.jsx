import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import classes from "./Blogpost.module.css";

// ASK: Где лучше объявлять crumbs? Вне или внутри компонента?

const loader = async ({ params }) => {
  const { data: blogs } = await axios.get("http://localhost:3001/blogposts");
  const blogpost = blogs.find((b) => b.slug === params.name);
  return blogpost;
};

const Blogpost = () => {
  const blogpost = useLoaderData();
  const { title, src, date, description } = blogpost;

  const crumbs = [
    {
      href: "/blogs",
      text: "Blogs",
    },
    {
      href: null,
      text: title,
    },
  ];

  return (
    <div className={classes.blogpost}>
      <div className={classes.breadcrumbs}>
        <Breadcrumbs crumbs={crumbs} />
      </div>
      <div className={classes.blogHeader}>
        <h2 className={classes.title}>{title}</h2>
        <time className={classes.date}>Date added: {date}</time>
      </div>
      <div className={classes.imageContainer}>
        <img src={src} alt="Blogpost photo" />
      </div>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export { Blogpost, loader };
