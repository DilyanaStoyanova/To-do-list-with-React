import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Must do");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) {
      return;
    }
    const newItem = {
      category: category,
      description: description,
      complete: false,
      id: Date.now(),
    };

    onAddItem(newItem);

    setDescription("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>Add new task</h2>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Must do">Must Do</option>
        <option value="To do">To Do</option>
        <option value="Call">Call</option>
        <option value="Scheduled">Scheduled</option>
        <option value="Morning">Morning</option>
        <option value="Before bed">Before Bed</option>
        <option value="I'm Thankful For">TI'm Thankful For</option>
      </select>
      <button>Add</button>
    </form>
  );
}
