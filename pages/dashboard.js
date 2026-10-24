import { useRouter } from "next/router";
import styles from "../styles/Dashboard.module.css";

// Har so'rovda serverda ishlaydi — cookie yo'q bo'lsa /login ga qaytaradi
export function getServerSideProps({ req }) {
  const token = req.cookies.token;

  if (!token) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  }

  return { props: { user: "Ali" } };
}

export default function Dashboard({ user }) {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>👋 Xush kelibsiz, {user}!</h1>
        <p className={styles.text}>
          Bu maxfiy sahifa — uni faqat login qilgan foydalanuvchilar ko'radi.
        </p>
        <button className={styles.button} onClick={handleLogout}>
          Chiqish
        </button>
      </div>
    </main>
  );
}
