import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello Next</h1>
      <Link href="/users"> Click to Navigate</Link>
    </main>
  );
}
