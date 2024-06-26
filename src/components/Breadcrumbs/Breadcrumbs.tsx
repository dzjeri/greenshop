import { Link } from "react-router-dom";
import classes from "./Breadcrumbs.module.css";

type Crumb = {
  href: string | null;
  text: string;
};

type BreadcrumbsProps = {
  crumbs: Crumb[];
};

const Breadcrumbs = ({ crumbs }: BreadcrumbsProps) => {
  return (
    <ul className={classes.breadcrumbs}>
      <li>
        <Link to="/" className={classes.rootLink}>
          Home
        </Link>
      </li>
      {crumbs?.map((crumb) => (
        <li key={crumb.href}>
          {crumb.href ? (
            <Link to={crumb.href}>{crumb.text}</Link>
          ) : (
            <span>{crumb.text}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export { Breadcrumbs };
