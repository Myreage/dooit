export default function Home() {
  const titleClassName = "text-6xl font-bold";
  const subtitleClassName = "text-2xl";
  const centeredClassName = "flex flex-col items-center mt-20 space-y-12";
  return (
    <div className={centeredClassName}>
      <div>
        <h1 className={titleClassName}>Hey</h1>
      </div>

      <div>
        <p className={subtitleClassName}>What will you do today ?</p>
      </div>
    </div>
  );
}
