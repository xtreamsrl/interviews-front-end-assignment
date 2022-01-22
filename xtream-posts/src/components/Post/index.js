export default function Post({ id, title, body }) {
  return (
    <li key={id}>
      <h1>{title}</h1>
      <h2>{body}</h2>
    </li>
  );
}
