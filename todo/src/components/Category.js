import { RiCheckDoubleLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { FiSun } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";

import ListItem from "./ListItem";

export default function Category({
  items,
  onDeleteItem,
  onSwitchStatus,
  onDeleteAllItems,
}) {
  function filterItems(items, category) {
    return items.filter((item) => item.category === category);
  }

  const mustDo = filterItems(items, "Must Do");
  const toDo = filterItems(items, "To Do");
  const call = filterItems(items, "Call");
  const scheduled = filterItems(items, "Scheduled");
  const morning = filterItems(items, "Morning");
  const beforeBed = filterItems(items, "Before Bed");
  const thankful = filterItems(items, "I'm Thankful For");

  return (
    <div>
      <div className="category-content">
        <div className="category category--1">
          <h3 className="heading-tertiary">Must Do</h3>
          <RiCheckDoubleLine className="icon" />
          <span className="count">
            {mustDo.length === 0 ? <GiPadlock /> : mustDo.length}
          </span>
          <ListItem
            items={mustDo}
            onDeleteItem={onDeleteItem}
            onSwitchStatus={onSwitchStatus}
          />
        </div>

        <div className="category category--2">
          <h3 className="heading-tertiary">To Do</h3>
          <FaCheck className="icon" />
          <span className="count">
            {toDo.length === 0 ? <GiPadlock /> : toDo.length}
          </span>
          <ListItem
            items={toDo}
            onDeleteItem={onDeleteItem}
            onSwitchStatus={onSwitchStatus}
          />
        </div>

        <div className="category category--3">
          <h3 className="heading-tertiary">Call</h3>
          <FaPhone className="icon" />
          <span className="count">
            {call.length === 0 ? <GiPadlock /> : call.length}
          </span>
          <ListItem
            items={call}
            onDeleteItem={onDeleteItem}
            onSwitchStatus={onSwitchStatus}
          />
        </div>

        <div className="category category--4">
          <h3 className="heading-tertiary">Scheduled</h3>
          <GrSchedules className="icon" />
          <span className="count">
            {scheduled.length === 0 ? <GiPadlock /> : scheduled.length}
          </span>
          <ListItem
            items={scheduled}
            onDeleteItem={onDeleteItem}
            onSwitchStatus={onSwitchStatus}
          />
        </div>

        <div className="category category--5">
          <h3 className="heading-tertiary">Morning</h3>
          <FiSun className="icon" />
          <span className="count">
            {morning.length === 0 ? <GiPadlock /> : morning.length}
          </span>
          <ListItem
            items={morning}
            onDeleteItem={onDeleteItem}
            onSwitchStatus={onSwitchStatus}
          />
        </div>

        <div className="category category--6">
          <h3 className="heading-tertiary">Before Bed</h3>
          <IoBedOutline className="icon" />
          <span className="count">
            {beforeBed.length === 0 ? <GiPadlock /> : beforeBed.length}
          </span>
          <ListItem
            items={beforeBed}
            onDeleteItem={onDeleteItem}
            onSwitchStatus={onSwitchStatus}
          />
        </div>
        <div className="category category--7">
          <h3 className="heading-tertiary">I'm Thankful For</h3>
          <FaHeart className="icon" />
          <span className="count">
            {thankful.length === 0 ? <GiPadlock /> : thankful.length}
          </span>
          <ListItem
            items={thankful}
            onDeleteItem={onDeleteItem}
            onSwitchStatus={onSwitchStatus}
          />
        </div>
      </div>
      <div className="center">
        <button className="btn btn--delete" onClick={onDeleteAllItems}>
          Delete all
        </button>
      </div>
    </div>
  );
}
