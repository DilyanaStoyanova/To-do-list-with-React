export default function Header() {
  const date = new Date().toDateString();

  return (
    <header>
      <h1 className="heading-primary center">Daily to do list</h1>
      <p className="subheading">{date}</p>
    </header>
  );
}
