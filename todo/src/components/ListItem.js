import Item from "./Item";

export default function ListItem({ items, onDeleteItem, onSwitchStatus }) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          item={item}
          key={item.id}
          onDeleteItem={onDeleteItem}
          onSwitchStatus={onSwitchStatus}
        />
      ))}
    </ul>
  );
}
