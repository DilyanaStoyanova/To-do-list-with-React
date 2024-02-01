export default function Item({ item, onDeleteItem, onSwitchStatus }) {
  return (
    <li>
      <span>{item.description}</span>
      <span>{item.complete ? "well done" : "take action"}</span>
      <button onClick={() => onSwitchStatus(item.id)}>Change</button>
      <button onClick={() => onDeleteItem(item.id)}>Delete</button>
    </li>
  );
}
