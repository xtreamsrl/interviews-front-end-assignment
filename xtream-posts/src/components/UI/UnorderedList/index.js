import style from "./index.module.css";

export default function UnorderedList({ children }) {
  return <ul className={style["unordered-list"]}>{children}</ul>;
}
