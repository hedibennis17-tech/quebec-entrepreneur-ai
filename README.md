# 🎓 Québec Entrepreneur AI

Plateforme SaaS de formation entrepreneuriale numérique, 100% autonome, assistée par intelligence artificielle. Projet pilote gouvernemental — 2 saisons, 24 modules, sans classe, sans caméra.

## 🏛️ Vision

Système numérique de formation, de développement des compétences et de préparation à l'entrepreneuriat, assisté par l'IA, conçu pour être présenté comme projet pilote aux organismes québécois.

## ✨ Studios

| Studio | Description |
|--------|-------------|
| 📚 Learning Studio | Modules, vidéos, parcours, progression |
| 🤖 AI Mentor Studio | Robot IA multimédia, tutorat, assistance |
| 📋 Business Plan Studio | Construction progressive du plan d'affaires |
| 💰 Finance Studio | Budgets, simulations, scénarios |
| 📅 Student Planner | Calendrier, tâches, échéances, alertes |
| ✅ Assessment Studio | Devoirs, rubriques, validation, feedback |
| 🏛️ Government Admin | Console institutionnelle, statistiques |

## 📖 Formation

- **Saison 1** — De l'idée à la validation (12 modules)
- **Saison 2** — Du plan au lancement (12 modules)
- **Durée :** 24 semaines
- **Projet final :** Plan d'affaires complet

## 🛠️ Stack

- Next.js 15 · TypeScript · Tailwind CSS · shadcn/ui
- PostgreSQL · Prisma ORM · Neon
- NextAuth.js (Google OAuth + email)
- Claude API (Anthropic) — AI Mentor
- Resend (emails) · Vercel Blob (fichiers)
- Mux ou Cloudflare Stream (vidéos)
- Vercel (déploiement)

## 🚀 Démarrage

```bash
git clone https://github.com/hedibennis17-tech/quebec-entrepreneur-ai.git
cd quebec-entrepreneur-ai
npm install
cp .env.example .env.local
npx prisma db push
npx prisma generate
npm run dev
```

## 📄 Licence

Propriétaire — Hedi Bennis © 2026
