import { useState } from "react";

import CalendarComponent from "./Calendar";
import Form from "./Form";
import ListItems from "./ListItems";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleSwitchStatus(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  }

  function handleDeleteAllItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) {
      setItems([]);
    }
  }
  return (
    <>
      <h1>Daily to do list</h1>
      <CalendarComponent />
      <Form onAddItem={handleAddItem} />
      <ListItems
        items={items}
        onDeleteItem={handleDeleteItem}
        onDeleteAllItems={handleDeleteAllItems}
        onSwitchStatus={handleSwitchStatus}
      />
    </>
  );
}

export default App;
