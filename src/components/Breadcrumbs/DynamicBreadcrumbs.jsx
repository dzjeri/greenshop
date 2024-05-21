import { Link, useLocation } from 'react-router-dom';
import formatting from '../../utils/formatting';
import classes from './DynamicBreadcrumbs.module.css';

const Breadcrumbs = ({ links }) => {
  const location = useLocation();
  // const isLastLink = (i) => i === links.length - 1;

  let currentLink = ''
  const crumbs = location.pathname
    .split('/')
    .filter(path => path !== '')
    .map((path, i, arr) => {
      currentLink += `/${path}`
      return {
        text: formatting.capitalizeString(formatting.splitSlug(path)),
        href: currentLink,
        last: i === arr.length - 1
      };
    })

  return (
    <ul className={classes.breadcrumbs}>
      <li>
        <Link to='/' className={classes.rootLink}>Home</Link>
        {/* <span className={classes.separator}>/</span> */}
      </li>
      {crumbs.map((crumb) => (
        <li key={crumb.href}>
          {crumb.last
            ? <span>{crumb.text}</span>
            : <Link to={crumb.href}>{crumb.text}</Link>
          }

          {/* {!crumb.last && <span className={classes.separator}>/</span>} */}
        </li>
      ))}
    </ul>
  )

  return (
    <ul className={classes.breadcrumbs}>
      {links.map((link, i) => (
        <li key={i}>
          {isLastLink(i)
            ?  (<span className={classes.lastLink}>{link.text}</span>)
            :  (<Link
                 className={i === 0 ? classes.rootLink : ''}
                 to={link.href}
               >{link.text}</Link>)
          }

          {!isLastLink(i) && <span className={classes.separator}>/</span>}
        </li>
      ))}
    </ul>
  )
}

export default Breadcrumbs