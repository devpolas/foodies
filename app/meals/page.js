import Link from "next/link";

export default function page() {
  return (
    <main>
      <h1>Meals</h1>
      <Link href='/meals/meal-1'>Meals - 1</Link>
    </main>
  );
}
