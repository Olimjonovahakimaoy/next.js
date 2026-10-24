// POST /api/auth/logout — cookie'ni o'chiradi
export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Faqat POST so'rov qabul qilinadi" });
  }

  // Max-Age=0 — brauzer cookie'ni darhol o'chiradi
  res.setHeader("Set-Cookie", "token=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0");
  return res.status(200).json({ message: "Tizimdan chiqildi" });
}
