import Link from "next/link";
import ProductCard from "./components/ProductCard";
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Link href="/users"> Click to Navigate </Link>
      <ProductCard />
      <div className={styles.card}>
        <h1>New component</h1>
      </div>
      <button className='bg-sky-400 hover:bg-sky-500 '>
        <Link href="/card"> Click to Grid View </Link>
      </button>
    </main>
  );
}
