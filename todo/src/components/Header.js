export default function Header({ items }) {
  const date = new Date().toDateString();

  const countItems = items.length;
  const completedItems = items.filter((item) => item.complete).length;
  const percentage = Math.round((completedItems / countItems) * 100);

  return (
    <header className="header">
      <h1 className="heading-primary center">Daily to do list</h1>
      <p className="subheading">{date}</p>
      <p className="stat">
        {countItems === 0
          ? "Please add new item..."
          : percentage === 100
          ? "You've done everything"
          : `You have ${countItems} item${
              countItems > 1 ? "s" : ""
            } on your list, and you've already done
        ${completedItems} (${percentage}%)`}
      </p>
    </header>
  );
}
