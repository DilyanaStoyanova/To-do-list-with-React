import Item from "./Item";

export default function ListItems({
  items,
  onDeleteItem,
  onDeleteAllItems,
  onSwitchStatus,
}) {
  return (
    <div>
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
      <button onClick={onDeleteAllItems}>Delete all</button>
    </div>
  );
}
