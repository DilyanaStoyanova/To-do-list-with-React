import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Must Do");

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
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={description}
          placeholder="New item..."
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className="select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Must Do">Must Do</option>
          <option value="To Do">To Do</option>
          <option value="Call">Call</option>
          <option value="Scheduled">Scheduled</option>
          <option value="Morning">Morning</option>
          <option value="Before Bed">Before Bed</option>
          <option value="I'm Thankful For">I'm Thankful For</option>
        </select>
        <button className="btn btn--add">Add</button>
      </form>
    </>
  );
}
