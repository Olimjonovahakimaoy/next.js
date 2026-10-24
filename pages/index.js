import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Auth tizimi</h1>
        <p className={styles.text}>Next.js Pages Router · 17-dars</p>
        <div className={styles.links}>
          <Link href="/login" className={styles.primary}>Kirish</Link>
          <Link href="/dashboard" className={styles.secondary}>Dashboard</Link>
        </div>
      </div>
    </main>
  );
}
