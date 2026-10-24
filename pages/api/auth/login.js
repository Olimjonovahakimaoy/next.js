// POST /api/auth/login — email va parolni tekshiradi, cookie o'rnatadi
export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Faqat POST so'rov qabul qilinadi" });
  }

  const { email, password } = req.body || {};

  // Demo uchun. Haqiqiy loyihada: user'ni DB'dan olib, parolni bcrypt bilan solishtiring
  const ok = email === "user@mail.uz" && password === "1234";

  if (!ok) {
    return res.status(401).json({ message: "Email yoki parol xato" });
  }

  // Path=/ MUHIM: busiz cookie faqat /api/auth yo'lida ko'rinadi va /dashboard uni o'qiy olmaydi
  res.setHeader(
    "Set-Cookie",
    "token=abc; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400"
  );
  return res.status(200).json({ user: { name: "Ali" } });
}
