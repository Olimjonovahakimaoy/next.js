module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/pages/api/auth/login.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// POST /api/auth/login — email va parolni tekshiradi, cookie o'rnatadi
__turbopack_context__.s([
    "default",
    ()=>handler
]);
function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({
            message: "Faqat POST so'rov qabul qilinadi"
        });
    }
    const { email, password } = req.body || {};
    // Demo uchun. Haqiqiy loyihada: user'ni DB'dan olib, parolni bcrypt bilan solishtiring
    const ok = email === "user@mail.uz" && password === "1234";
    if (!ok) {
        return res.status(401).json({
            message: "Email yoki parol xato"
        });
    }
    // Path=/ MUHIM: busiz cookie faqat /api/auth yo'lida ko'rinadi va /dashboard uni o'qiy olmaydi
    res.setHeader("Set-Cookie", "token=abc; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400");
    return res.status(200).json({
        user: {
            name: "Ali"
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1s1l4is0xp1wa._.js.map