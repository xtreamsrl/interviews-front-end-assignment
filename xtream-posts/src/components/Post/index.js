import style from "./index.module.css";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

export default function Post({ id, title, body }) {
  return (
    <li className={style["post-card"]} key={id}>
      <h1>{capitalizeFirstLetter(title)}</h1>
      <h2>{capitalizeFirstLetter(body)}</h2>
    </li>
  );
}
