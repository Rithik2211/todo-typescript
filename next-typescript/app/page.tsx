import Link from "next/link";
import ProductCard from "./components/ProductCard";
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <h1>Hello Next</h1>
      <Link href="/users"> Click to Navigate </Link>
      <ProductCard />
      <div className={styles.card}>
        <h1>New component</h1>
      </div>
    </main>
  );
}
