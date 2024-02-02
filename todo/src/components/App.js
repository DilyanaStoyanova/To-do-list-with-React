import { useState } from "react";

import Form from "./Form";
import Category from "./Category";
import Header from "./Header";

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
    const confirmed = window.confirm("Are you sure you want to delete all?");

    if (confirmed) {
      setItems([]);
    }
  }
  return (
    <div className="app">
      <Header items={items} />
      <main className="main">
        <Form onAddItem={handleAddItem} />
        <Category
          items={items}
          onDeleteItem={handleDeleteItem}
          onDeleteAllItems={handleDeleteAllItems}
          onSwitchStatus={handleSwitchStatus}
        />
      </main>
    </div>
  );
}

export default App;
