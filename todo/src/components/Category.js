import ListItem from "./ListItem";

export default function Category({
  items,
  onDeleteItem,
  onSwitchStatus,
  onDeleteAllItems,
}) {
  return (
    <div>
      <div className="category category--1">
        <h3 className="heading-tertiary">Must Do</h3>
        <ListItem
          items={items.filter((item) => item.category === "Must Do")}
          onDeleteItem={onDeleteItem}
          onSwitchStatus={onSwitchStatus}
        />
      </div>

      <div className="category category--2">
        <h3 className="heading-tertiary">To Do</h3>
        <ListItem
          items={items.filter((item) => item.category === "To Do")}
          onDeleteItem={onDeleteItem}
          onSwitchStatus={onSwitchStatus}
        />
      </div>

      <div className="category category--3">
        <h3 className="heading-tertiary">Call</h3>
        <ListItem
          items={items.filter((item) => item.category === "Call")}
          onDeleteItem={onDeleteItem}
          onSwitchStatus={onSwitchStatus}
        />
      </div>

      <div className="category category--4">
        <h3 className="heading-tertiary">Scheduled</h3>
        <ListItem
          items={items.filter((item) => item.category === "Scheduled")}
          onDeleteItem={onDeleteItem}
          onSwitchStatus={onSwitchStatus}
        />
      </div>

      <div className="category category--5">
        <h3 className="heading-tertiary">Morning</h3>
        <ListItem
          items={items.filter((item) => item.category === "Morning")}
          onDeleteItem={onDeleteItem}
          onSwitchStatus={onSwitchStatus}
        />
      </div>

      <div className="category category--6">
        <h3 className="heading-tertiary">Before Bed</h3>
        <ListItem
          items={items.filter((item) => item.category === "Before Bed")}
          onDeleteItem={onDeleteItem}
          onSwitchStatus={onSwitchStatus}
        />
      </div>
      <div className="category category--7">
        <h3 className="heading-tertiary">I'm Thankful For</h3>
        <ListItem
          items={items.filter((item) => item.category === "I'm Thankful For")}
          onDeleteItem={onDeleteItem}
          onSwitchStatus={onSwitchStatus}
        />
      </div>

      <button onClick={onDeleteAllItems}>Delete all</button>
    </div>
  );
}
