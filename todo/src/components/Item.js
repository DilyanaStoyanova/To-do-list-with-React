import { FaPencilAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Item({ item, onDeleteItem, onSwitchStatus }) {
  return (
    <li className={`item ${item.complete ? "linethrough" : ""}`}>
      <FaRegCheckCircle />
      <p className="description">{item.description}</p>
      <button className="btn" onClick={() => onSwitchStatus(item.id)}>
        <FaPencilAlt />
      </button>
      <button className="btn" onClick={() => onDeleteItem(item.id)}>
        <MdDeleteForever />
      </button>
    </li>
  );
}
