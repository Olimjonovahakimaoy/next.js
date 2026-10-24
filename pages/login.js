import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok) router.push("/dashboard");
      else setError(data.message);
    } catch {
      setError("Server bilan bog'lanib bo'lmadi");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.page}>
      <form onSubmit={handleLogin} className={styles.card}>
        <h1 className={styles.title}>🔑 Tizimga kirish</h1>

        <input
          className={styles.input}
          type="email"
          placeholder="Emailingiz"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Parolingiz"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className={styles.err}>{error}</p>}

        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? "Tekshirilmoqda..." : "Kirish"}
        </button>

        <p className={styles.hint}>Demo: user@mail.uz / 1234</p>
      </form>
    </main>
  );
}
