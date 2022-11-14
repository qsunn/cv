export const List = ({ items }) => (
  <ul className="grid gap-2">
    {items.map(item => <li key={item}>{item}</li>)}
  </ul>
);