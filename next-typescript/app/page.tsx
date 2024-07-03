import Link from "next/link";
// import ProductCard from "./components/ProductCard";
// import styles from './page.module.css';

export default function Home() {
  return (
    <main className="flex justify-center p-6 gap-2">
      <div className='flex flex-col gap-6 p-2'>
        <h1>Welcome to Practicing Tailwind and  Next! </h1>
        <button className='ring-4 ring-sky-300 bg-blue-500 '>
          <Link href="/Practice/card"> Click to Grid View </Link>
        </button>
        <button className='ring-4 ring-pink-300 bg-pink-500 '>
          <Link href="/Practice/Testimonial"> Click to Testimonial </Link>
        </button>
      </div>
    </main>
  );
}
