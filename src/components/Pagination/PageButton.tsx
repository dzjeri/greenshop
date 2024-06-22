import cn from "classnames";
import classes from "./Pagination.module.css";

type PageButtonProps = {
  children: React.ReactNode;
  paginate: (page: string) => void;
  disabled?: boolean;
  active?: boolean;
};

const PageButton = ({
  children,
  paginate,
  disabled = false,
  active = false,
}: PageButtonProps) => {
  const page = children as string;

  return (
    <button
      onClick={() => paginate(page)}
      className={cn(classes.pageButton, {
        [classes.disabled]: disabled,
        [classes.active]: active,
      })}
    >
      {children}
    </button>
  );
};

export { PageButton };
